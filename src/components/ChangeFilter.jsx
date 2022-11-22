import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filtersSlice';
import { nanoid } from 'nanoid';
import css from './StatusFilter/StatusFilter.module.css';
import { getFilter } from 'redux/selectors';

export const ChangeFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterInputId = nanoid();

  const handleFilterChange = event => {
    dispatch(onChangeFilter(event.currentTarget.value));
  };

  return (
    <div>
      <div className={css.boks}>
        <label className={css.label} htmlFor={filterInputId}>
          <h2 className={css.text}>Search for contacts</h2>
          <input
            className={css.input}
            type="text"
            name="filter"
            id={filterInputId}
            value={filter}
            onChange={handleFilterChange}
          />
        </label>
      </div>
    </div>
  );
};
