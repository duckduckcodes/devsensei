import React from 'react'
import { IoMdSend } from 'react-icons/io'
import "../../styles/view/request.css"
function Search() {
  return (
    <div className='search_bar'>
        <div className="search_input_container">
          <input className="search_input" type="text" placeholder='Enter url'/>
        </div>
        <div className="button">
          <p>Send</p>
          <IoMdSend />
        </div>
    </div>
  )
}

export default Search