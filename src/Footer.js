import React from 'react'

const Footer = ({ length }) => {

    return (
        <footer>
            <div className='bottomname'>

                <h2>{length} List {length === 1 ? "Item" : "items"}</h2>
            </div>
        </footer>
    )
}

export default Footer
