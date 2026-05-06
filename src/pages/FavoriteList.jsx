import { useContext } from "react";
import { StudentContext } from "../StudentContext";

const FavoriteList = () => {
  const { favorites, removeFavorite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="text-4xl text-red-500 mb-8 tracking-wider text-center">My Favourite Students</h2>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border-4 border-dashed border-gray-300">
          <p className="text-gray-400 text-xl mt-4">No favourite students added yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {favorites.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md border-l-8 border-red-500">
              <div>
                <p className="text-2xl">{student.name}</p>
                <p className="text-gray-500 text-lg mt-1">Roll ID: {student.id}</p>
              </div>
              <button onClick={() => removeFavorite(student.id)} className="text-red-500 bg-red-50 hover:bg-red-500 hover:text-white border-2 border-red-500 px-6 py-3 rounded-lg transition-colors text-lg tracking-wider cursor-pointer">
                Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;