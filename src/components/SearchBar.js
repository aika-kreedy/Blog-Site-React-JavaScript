import React from 'react';
import { FaSearch } from 'react-icons/fa';


const Search = ({ listPosts, searchResults, setSearchResults }) => {

    const handleSearchChange = (e) => {
        if (!e.target.value) {return setSearchResults(listPosts)}
        else{
     const resultsArray = listPosts.filter(post => ((post.title).toLowerCase()).includes(e.target.value.toLowerCase()))
        console.log(resultsArray)
        setSearchResults(resultsArray)
        console.log('hahahahha',searchResults)
       }
    }

    const handleSubmit = (e) => e.preventDefault()

    return (
        <>
        <header> 
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder='Search for News...'
                    onChange={handleSearchChange}
                />
                <button type='submit' className="search-icon">
                  <FaSearch  size={19}  />
                </button>
               
            </form>
        </header>
      
        </>
    )
}

export default Search;