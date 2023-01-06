import { NavLink } from 'react-router-dom';
import './BoutonAccesListes.css';
const BoutonAccesListes = () => {
  return (
    <button type='button' className='btn Acces-Liste'>
      <NavLink to='/pageListesEnregistrees' end className='nav-link'>
        Accès listes sauvegardées
      </NavLink>
    </button>
  );
};

export default BoutonAccesListes;
