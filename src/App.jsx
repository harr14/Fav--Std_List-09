import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/navbar';
import StudentList from './pages/StudentList';
import FavouriteStudents from './pages/FavouriteStudents';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favourites" element={<FavouriteStudents />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;