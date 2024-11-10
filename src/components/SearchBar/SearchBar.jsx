import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Please enter text to search for images');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={styles.header}>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;