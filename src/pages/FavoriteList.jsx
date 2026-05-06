import { useContext } from "react";
import { StudentContext } from "../StudentContext";

const FavoriteList = () => {
  const { favorites, removeFavorite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="text-5xl text-rose-500 mb-10 tracking-wider text-center drop-shadow-sm">
        My Favourite Students
      </h2>

      {favorites.length === 0 ? (
        <div className="max-w-2xl mx-auto text-center py-10 px-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg border-4 border-dashed border-cyan-500/60">
          <p className="text-white text-2xl tracking-widest">No favourite students added yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {favorites.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 hover:border-green-500/50 hover:bg-white/10 border-l-8 border-l-rose-500 transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <p className="text-3xl text-white pb-1 tracking-wide">{student.name}</p>
                <p className="text-lg text-cyan-200/50 mt-1 tracking-wider">Roll ID: {student.id}</p>
              </div>

              <button
                onClick={() => removeFavorite(student.id)}
                className="px-8 py-3 rounded-xl text-base tracking-widest transition-all duration-300 uppercase bg-rose-600 text-white border border-rose-500 hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] active:scale-95 cursor-pointer shadow-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;