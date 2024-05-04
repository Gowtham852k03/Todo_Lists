import React from 'react'
import { ImSearch } from "react-icons/im";
import { IoIosColorPalette } from "react-icons/io";
const Search = ({ search, changecolor }) => {
    return (
        <form className="addform" onSubmit={(e) => { e.preventDefault(); search(); }}>
            <span className='paint'>
                <IoIosColorPalette onClick={() => { changecolor() }} />
            </span>
            <input className="Search" type="text"

                autoFocus
                placeholder='Enter City Name'
                required
            />

            <button
                type='submit'
                arual-label='Search'>
                <ImSearch className='searchtool'
                    onClick={() => { search() }} />
            </button></form>
    )
}

export default Search
