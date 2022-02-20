import React from 'react'
import './Search-box.css'

export const Search = (props) => (
    <div>
        <input type="search" className = "search" onChange={props.searchitem} />
    </div>    
)
