import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import StudentList from "./pages/StudentList";
import FavoriteList from "./pages/FavoriteList";
import Navbar from "./Navbar";

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-400 to-black text-white">
          <Navbar />

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