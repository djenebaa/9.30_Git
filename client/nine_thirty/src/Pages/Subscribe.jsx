// Page qui permet l'inscription d'un nouvel utilisateur.

import React, { useState } from "react";

export default function Subscribe() {
  // Ici on déclare plusieurs variables et on leur attribue un état par défaut. On crée également les fonctions
  // "set" qui vont permettre de modifier cet état.
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Idem pour vérifier si le formulaire a été soumis et pour la vérification d'erreurs.
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Ici on crée les fonctions qui permettent de récupérer la valeur rentrée dans chaque input du formulaire.
  const handleEmail = (e) => {
    setEmail(e.target.value); // on set l'état de la const email à la valeur de l'input
    setSubmitted(false); // le formulaire reste non soumis car les inputs ne sont pas tous remplis.
  };

  // Handling name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling surname change
  const handleSurname = (e) => {
    setSurname(e.target.value);
    setSubmitted(false);
  };

  // Handling password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling password confirmation change
  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling form submission
  const handleSubmit = (e, res, req) => {
    e.preventDefault();
    console.log(name, email, surname, password, confirmPassword);

    // On vérifie que tous les champs sont remplis, auquel cas un message d'erreur s'affichera.
    if (
      name === "" ||
      email === "" ||
      surname === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);

      // Password verification - idem ici on aura une erreur si les mots de passe ne sont pas identiques.
    } else if (password != confirmPassword) {
      setError(true);
      console.log("ca marche ap");

      // Si tous les champs sont remplis correctement alors on modifie l'état de soumission du formulaire à true ;
    } else {
      setSubmitted(true);
      setError(false);

            // Requête Post pour inscrire le nouvel utilisateur dans la bdd. 
            fetch('http://localhost:8000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, surname, email, password})
            })
            .then(res => res.json())
            .then(res => console.log(JSON.stringify(res)), setSubscribed(true))
            .catch(error => console.log(error))
        }
    }


  // Form displaying and assigning functions to each input;
  return (
    <div className="flex w-auto h-auto flex-1 flex-col justify-center px-6 py-10 lg:px-8 bg-slate-100/90 border rounded-lg">
      <h2 className="pb-2">Inscrivez-vous :</h2>
      {/* Pour inscrire des fonctions en JS dans les div on le fait entre {} */}
      {!subscribed ? (
        <div>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mail
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="email"
                placeholder="..."
                id="emailSubscribe"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre nom
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="text"
                placeholder="..."
                id="name"
                value={name}
                onChange={handleName}
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre prénom
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="text"
                placeholder="..."
                id="surname"
                value={surname}
                onChange={handleSurname}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Votre mot de passe
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="password"
                placeholder="..."
                id="passwordSubscribe"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Veuillez confirmer votre mot de passe
              </label>
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                type="password"
                placeholder="..."
                id="confirmPassword"
                value={confirmPassword}
                onChange={handlePasswordConfirmation}
              />
            </div>
            <button
              className="flex w-full justify-center rounded-md bg-[#2E2E68] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              S'inscrire
            </button>{" "}
          </form>
        </div>
      ) : (
        <p>Thank you for your registration !</p>
      )}
    </div>
  );
}