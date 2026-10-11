import { createContext, useState, useContext } from 'react';

const StudentContext = createContext();

// Sample student data
const initialStudents = [
  { id: 1, name: 'Aarav Sharma', rollNumber: 'STU001' },
  { id: 2, name: 'Priya Patel', rollNumber: 'STU002' },
  { id: 3, name: 'Rohan Mehta', rollNumber: 'STU003' },
  { id: 4, name: 'Sneha Reddy', rollNumber: 'STU004' },
  { id: 5, name: 'Vikram Singh', rollNumber: 'STU005' },
  { id: 6, name: 'Ananya Gupta', rollNumber: 'STU006' },
  { id: 7, name: 'Karan Joshi', rollNumber: 'STU007' },
  { id: 8, name: 'Meera Nair', rollNumber: 'STU008' },
];

export function StudentProvider({ children }) {
  const [students] = useState(initialStudents);
  const [favourites, setFavourites] = useState([]);

  // Add student to favourites (prevents duplicates)
  const addToFavourite = (student) => {
    setFavourites((prev) => {
      if (prev.some((fav) => fav.id === student.id)) {
        return prev; // already exists → do nothing
      }
      return [...prev, student];
    });
  };

  // Remove student from favourites
  const removeFromFavourite = (studentId) => {
    setFavourites((prev) => prev.filter((fav) => fav.id !== studentId));
  };

  // Check if student is already in favourites
  const isFavourite = (studentId) => {
    return favourites.some((fav) => fav.id === studentId);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addToFavourite,
        removeFromFavourite,
        isFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// Custom hook
export function useStudentContext() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
}