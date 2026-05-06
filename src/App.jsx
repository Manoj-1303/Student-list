import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import StudentList from "./pages/StudentList";
import FavoriteList from "./pages/FavoriteList";

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen">
          <nav className="bg-indigo-600 p-6 shadow-lg">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl text-white tracking-widest">
                🎓 Student Hub
              </h1>
              <div className="flex gap-8">
                <Link to="/" className="text-white hover:text-indigo-200 transition-colors text-xl">
                  Student List 
                </Link>
                <Link to="/favorites" className="text-white hover:text-indigo-200 transition-colors text-xl">
                  Favourites
                </Link>
              </div>
            </div>
          </nav>

          <main className="max-w-4xl mx-auto py-12 px-4">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favorites" element={<FavoriteList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;