import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const Content = ({ items, handleCheck, deleteItem }) => {

    return (
        <main>
            {(items.length) ? (
                <ul className='lists'>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheck(item.id)} />

                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}> {item.item}
                            </label>
                            <FaTrash
                                role="button"
                                tabIndex="0"
                                aria-label={`Delete ${item.item}`}
                                onClick={() => deleteItem(item.id)}
                            />
                        </li>
                    ))}
                </ul>) : (
                <h3 style={{ fontSize: 32 }}>YOUR LIST IS EMPTY</h3>
            )}
        </main>
    )
}


export default Content