// Première page lorsqu'un visiteur arrive sur l'url de notre site

import React from "react";

import Subscribe from "./Subscribe";
import Login from "./Login";

export default function FirstVisit() {
  return (
    <>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          className="h-40"
          src="./Logo.png"
          alt="Logo du site Nine-Thirty"
        />
      </div>
      <p className="w-2/3 text-center text-l my-6">
        Nine Thirty, le site de meubles neufs et d'occasion. Achetez ou vendez
        facilement vos meubles. Une sélection de qualité pour tous les styles et
        budgets. Simplifiez votre expérience d'achat de meubles avec Nine
        Thirty.
      </p>

      <div className="background py-12 px-20 flex flex-row">
        <div className="ml-6 mr-12">
          <Subscribe />
        </div>
        <div className="mr-6 ml-12 my-auto">
          <Login />
        </div>
      </div>
    </div>
    </>

  );
}
