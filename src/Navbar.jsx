import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "./StudentContext";

const Navbar = () => {
  const { favorites } = useContext(StudentContext);

  return (
    <nav className="bg-black/40 backdrop-blur-xl border-b border-cyan-900/50 p-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        <h1 className="text-3xl text-cyan-50 tracking-widest drop-shadow-md">
          <span className="text-cyan-400">🎓</span> Student Hub
        </h1>
        
        <div className="flex gap-10 items-center">
          <Link to="/" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-xl tracking-wide">
            List
          </Link>
          
          <Link to="/favorites" className="relative text-cyan-100/60 hover:text-cyan-400 transition-colors text-xl tracking-wide">
            Favourites
            
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-5 bg-gradient-to-tr from-amber-500 to-yellow-300 text-black font-extrabold text-[11px] leading-none min-w-[20px] h-5 px-1.5 pt-[3px] pb-[1px] flex items-center justify-center rounded-full shadow-[0_2px_10px_rgba(251,191,36,0.6)] border border-yellow-100">
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