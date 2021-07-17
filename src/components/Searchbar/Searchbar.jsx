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
          <span className={s.SearchForm_button_label}>Search</span>
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
