import { useContext } from "react";
import { StudentContext } from "../StudentContext";

const StudentList = () => {
  const { students, favorites, addFavorite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="text-4xl text-indigo-700 mb-8 tracking-wider text-center">All Students...</h2>
      
      <div className="grid gap-6">
        {students.map((student) => {
          const isAdded = favorites.some((fav) => fav.id === student.id);

          return (
            <div 
              key={student.id} 
              className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-indigo-100"
            >
              <div>
                <p className="text-2xl">{student.name}</p>
                <p className="text-gray-500 text-lg mt-1">Roll ID: {student.id}</p>
              </div>
              <button
                onClick={() => addFavorite(student)}
                disabled={isAdded}
                className={`px-6 py-3 rounded-lg text-lg tracking-wider transition-colors ${
                  isAdded 
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                    : "bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 cursor-pointer"
                }`}
              >
                {isAdded ? "Added to Favourites" : "Add to Favourites"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;