// import { Component } from 'react';
// import toast from 'react-hot-toast';
import s from 'components/Searchbar/Searchbar.module.css';

// export default class SearchBar extends Component {
//   state = {
//     query: '',
//   };

//   handelChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     // if (this.state.query.trim() === '') {
//     //   toast.error('Enter what you want to find');
//     //   return;
//     // }
//     this.props.onSearch(this.state.query);
//     this.setState({ query: '' });
//   };
//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form onSubmit={this.handleSubmit} className={s.SearchForm}>
//           <button type="submit" className={s.SearchForm_button}>
//             <span className={s.SearchForm_button_label}>Search</span>
//           </button>

//           <input
//             className={s.SearchForm_input}
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handelChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

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
