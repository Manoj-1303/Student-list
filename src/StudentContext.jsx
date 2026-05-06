import { createContext, useState } from "react";

export const StudentProvider = ({ children }) => {
  const [students] = useState([
    { id: "101", name: "Agnel John" },
    { id: "102", name: "Manoj" },
    { id: "103", name: "Rishi" },
    { id: "104", name: "Tony Stark" },
    { id: "105", name: "Steve Harrington" },
    { id: "106", name: "Johnny Deep" },
    { id: "107", name: "Chris Hemsworth" },
    { id: "108", name: "Peter Parker" },
    { id: "109", name: "Henry Cavil" },
    { id: "110", name: "Ryan Renold" },
    { id: "111", name: "Thomas Shelby" },
    { id: "112", name: "John Snow" },
    { id: "113", name: "Billy Butcher" },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (student) => {
    if (!favorites.find((fav) => fav.id === student.id)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, favorites, addFavorite, removeFavorite }}>
      {children}
    </StudentContext.Provider>
  );
};

export const StudentContext = createContext();