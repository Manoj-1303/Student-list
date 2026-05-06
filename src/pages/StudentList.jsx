import { useContext } from "react";
import { StudentContext } from "../StudentContext";

const StudentList = () => {
  const { students, favorites, addFavorite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="text-3xl md:text-5xl text-cyan-50 mb-6 md:mb-10 tracking-wider text-center drop-shadow-md mt-2 md:mt-0">
        All Students...
      </h2>

      <div className="grid gap-4 md:gap-6">
        {students.map((student) => {
          const isAdded = favorites.some((fav) => fav.id === student.id);

          return (
            <div
              key={student.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-8 gap-5 sm:gap-0 bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10 border-l-8 border-l-cyan-500 hover:border-white/20 hover:border-l-green-500 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-full">
                <p className="text-xl md:text-3xl text-white pb-1 tracking-wide">{student.name}</p>
                <p className="text-sm md:text-lg text-cyan-200/50 mt-1 tracking-wider">Roll ID: {student.id}</p>
              </div>

              <button
                onClick={() => addFavorite(student)}
                disabled={isAdded}
                className={`w-full sm:w-auto px-4 py-3 md:px-8 md:py-3 rounded-xl text-sm md:text-base tracking-widest transition-all duration-300 uppercase ${isAdded
                    ? "bg-white/10 text-white/40 cursor-not-allowed border border-white/5 shadow-none"
                    : "bg-cyan-600 text-white border border-green-400 hover:bg-green-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] active:scale-95 cursor-pointer shadow-md"
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