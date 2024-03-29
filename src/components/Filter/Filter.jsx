import css from './Filter.module.css';
import { FaSearch } from 'react-icons/fa'; // Import FontAwesome icons
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  //filter name based on the the search keyword
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.divFilter}>
      <p>Find Contacts by Name</p>
          <div className={css.inputContainer}>
              <FaSearch className={css.icon} />
              <input
              type="text"
              name="filter"
              placeholder="Search by name"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
    </div>
  );
};