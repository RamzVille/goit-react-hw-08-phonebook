import css from './ContactListItem.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio'; // Import Confirm from Notiflix
import { FaTrash } from 'react-icons/fa'; // Import FontAwesome icons
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOperation';;

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // handleDelete method
  const handleDelete = () => {
    Confirm.show(
      'Delete Contact',
      `Are you sure you want to delete ${filteredContact.name}?`,
      'Yes',
      'No',
      () => {
        // If user clicks 'Yes', proceed with the deletion
        dispatch(deleteContact(filteredContact.id));
        Notify.success(`${filteredContact.name} was successfully deleted in your contacts!`, { position: 'center-top' });
      },
      () => {
        // If user clicks 'No', do nothing
        Notify.info('Deletion canceled.', { position: 'center-top' });
      }
    );
  };


  return (
   <li className={css.contactListItem}>
      <p><strong>{filteredContact.name.toUpperCase()}</strong></p>
      <p><i>{filteredContact.number}</i></p>
        <button className={css.btnDelete} onClick={handleDelete}>
          <FaTrash className={css.icon} /> Delete
        </button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};