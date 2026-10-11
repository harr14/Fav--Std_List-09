import { useStudentContext } from '../context/StudentContext';

function FavouriteStudents() {
  const { favourites, removeFromFavourite } = useStudentContext();

  return (
    <div className="page">
      <h1>Favourite Students</h1>
      <p className="subtitle">
        {favourites.length > 0
          ? `You have ${favourites.length} favourite student${favourites.length > 1 ? 's' : ''}.`
          : 'Manage your favourite students here.'}
      </p>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <p>No favorite students added yet</p>
          <p className="hint">Go to the Student List page and add some students!</p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div key={student.id} className="student-card favourite-card">
              <div className="student-info">
                <h3>{student.name}</h3>
                <p className="roll">Roll No: {student.rollNumber}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => removeFromFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;   