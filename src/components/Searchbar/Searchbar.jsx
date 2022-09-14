import { ReactComponent as Search } from '../../images/search.svg';
import s from 'components/Searchbar/Searchbar.module.css';

function Searchbar({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.searchImage.value);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSearch} className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <Search />
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          name="searchImage"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
