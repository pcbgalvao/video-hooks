import React, { useState, useEffect } from 'react';


const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    // browser shall not submit the form and
    // reload the page will not refresh;

    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;