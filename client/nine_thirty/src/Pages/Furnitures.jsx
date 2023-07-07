// Composant parent qui va permettre d'afficher chaque petit composant meuble.

import React, { useEffect, useState } from "react";
import Furniture from "../Components/Furniture";
import Buttons from "../Components/Buttons";

function Furnitures() {
  // ici on déclare une variable data qu'on assigne pour le moment à un tableau vide.
  const [data, setData] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // cette constante va permettre de récupérer les catégories pour chaque meuble présent dans data.
  const categories = [...new Set(data.map((element) => element.category))];

  // Requête Get pour récupérer les données de la bdd et les insérer dans la variable data, soit un tableau d'objets.
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:8000/furnitures/articles")
        .then((response) => response.json())
        .then((dataLocal) => {
          setData(dataLocal);
          // console.log(dataLocal);
        });
    };
    getData();
  }, []);

  // Ici on crée la fonction qui va permettre de filtrer les meubles. "curcat" correspond à la catégorie en cours
  // (current category), soit la catégorie de chaque objet du tableau data.
  // Quand la fonction est appelée plus bas, originalData correspond au tableau d'objets data.
  const filterItem = (curcat, setData, originalData) => {
    const newItem = originalData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setData(newItem);
  };
  const handleRefresh = () => {
    // Refresh the data by making the API call again
    window.location.reload();
  };


  return (
    <div>
      <p onClick={() => setIsFilterOpen(!isFilterOpen)} className="pt-4 pl-4 mx-2">
        Filtrer {isFilterOpen ? "▲" : "▼"}
      </p>
      {isFilterOpen && (
        <div>
          <Buttons
            setCategory={(category) => filterItem(category, setData, data)}
            categories={categories}
          />
        </div>
      )}
    <div className="flex justify-end m-2">
          <button onClick={handleRefresh} className="bg-[#2E2E68] text-white text-xs p-2 rounded-lg hover:bg-[#5858a3]">Refresh</button>
        </div>
      {/* Pour mapper sur le tableau data on doit d'abord vérifier son existence (peut-être qu'il y a un autre moyen mais on l'a pas trouvé) */}
      <div className="flex flex-wrap justify-center items-center">
        {data
          ? data.map((element) => (
              <div
                // className="Furniture shadow-lg shadow-slate-200 rounded-xl p-2 m-2 flex-shrink-0 w-1/4 max-w-1/4"
                key={element.id}
                style={{ height: "550px", width: "300px" }}
              >
                <Furniture
                  picture={"http://localhost:8000/assets/" + element.picture || "./LogoImage.png"}
                  type={element.type}
                  description={element.description}
                  price={element.price + " €"}
                  material={element.material}
                  size_height={element.size_height}
                  size_width={element.size_width}
                  size_deep={element.size_deep}
                  // height="100%"
                  // width="100%"
                  addToCart={() => addToCart(element)}
                
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Furnitures;
