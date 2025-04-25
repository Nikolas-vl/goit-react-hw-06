import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = query => {
    dispatch(changeFilter(query));
  };

  return (
    <div>
      <p>Find contact by name</p>
      <input
        className={s.input}
        type='text'
        onChange={e => {
          handleFilter(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
