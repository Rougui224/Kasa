import React, { createContext, useState, useEffect, useContext } from "react";

// Création d'un contexte pour stocker les données
const DataContext = createContext();

// Création d'un composant fournisseur de données qui utilise le contexte
export const DataProvider = ({ children }) => {
  // Déclaration d'un état local pour stocker les données récupérées
  const [data, setData] = useState([]);

  // Utilisation du hook useEffect pour effectuer une action au chargement du composant
  useEffect(() => {
    // Définition de la fonction pour récupérer les données
    fetch("/data.json", {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Le tableau vide [] en tant que deuxième argument signifie que ce hook useEffect ne s'exécute qu'une seule fois, au chargement initial du composant

  // Rendu du contexte fournissant les données aux composants enfants
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Création d'un hook personnalisé pour utiliser les données fournies par le contexte
export const useData = () => useContext(DataContext);
