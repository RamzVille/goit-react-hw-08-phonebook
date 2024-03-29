import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio'; // Import Confirm from Notiflix
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icons

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
 // handleDelete method
  const handleLogout = () => {
    Confirm.show(
      'Logout',
      `Are you sure you want to logout?`,
      'Yes',
      'No',
      () => {
        // If user clicks 'Yes', proceed with the deletion
        dispatch(logOut());
        Notify.success(`Thank you for coming!`, { position: 'center-top' });
      },
      () => {
        // If user clicks 'No', do nothing
        Notify.info('Logout canceled.', { position: 'center-top' });
      }
    );
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email}</p>
      <button  className={css.btnLogout} type="button" onClick={handleLogout}>
        <FaSignOutAlt  className={css.icon} /> Logout
      </button>
    </div>
  );
};