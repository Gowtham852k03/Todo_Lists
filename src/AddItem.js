import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className="addform" onSubmit={handleSubmit}>
            <label className="additemlabel"> Add Items</label>
            <input className="addinput" type="text"
                autoFocus
                id='additem'
                placeholder='ADD ITEM'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)} />
            <button
                type='submit'
                arual-label='Add Item'>
                <FaPlus />
            </button></form>
    )
}

export default AddItem
