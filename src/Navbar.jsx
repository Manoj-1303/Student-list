import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "./StudentContext";

const Navbar = () => {
  const { favorites } = useContext(StudentContext);

  return (
    <nav className="bg-black/40 backdrop-blur-xl border-b border-cyan-900/50 p-4 md:p-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">

        <h1 className="text-2xl md:text-3xl text-cyan-50 tracking-widest drop-shadow-md whitespace-nowrap">
          <span className="text-cyan-400">🎓</span> Student Hub
        </h1>

        <div className="flex gap-6 md:gap-10 items-center mt-2 sm:mt-0">
          <Link to="/" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-base md:text-xl tracking-wide">
            List
          </Link>

          <Link to="/favorites" className="relative text-cyan-100/60 hover:text-cyan-400 transition-colors text-base md:text-xl tracking-wide">
            Favourites

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-4 md:-right-5 bg-linear-to-tr from-amber-500 to-yellow-300 text-black font-extrabold text-[10px] md:text-[11px] leading-none min-w-4.5 md:min-w-5 h-4 md:h-5 px-1 md:px-1.5 pt-0.5 md:pt-0.75 pb-px flex items-center justify-center rounded-full shadow-[0_2px_10px_rgba(251,191,36,0.6)] border border-yellow-100">
                {favorites.length}
              </span>
            )}

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;