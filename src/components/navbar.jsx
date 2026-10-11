import { Link, useLocation } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';

function Navbar() {
  const location = useLocation();
  const { favourites } = useStudentContext();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo">★</span>
        Favourite Student List
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Student List
          </Link>
        </li>
        <li>
          <Link
            to="/favourites"
            className={location.pathname === '/favourites' ? 'active' : ''}
          >
            Favourites
            {favourites.length > 0 && (
              <span className="badge">{favourites.length}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;