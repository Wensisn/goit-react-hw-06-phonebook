import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import { getStatusFilter } from 'redux/selectors';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <div className={css.boks}>
        <label className={css.label}>
          <h2 className={css.text}>Search for contacts</h2>
          <input className={css.input} type="text" />
        </label>
      </div>
    </div>
  );
};
