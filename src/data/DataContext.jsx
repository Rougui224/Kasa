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
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.json`, {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []); // Le tableau vide [] en tant que deuxième argument signifie que ce hook useEffect ne s'exécute qu'une seule fois, au chargement initial du composant

  // Rendu du contexte fournissant les données aux composants enfants
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Création d'un hook personnalisé pour utiliser les données fournies par le contexte
export const useData = () => useContext(DataContext);
