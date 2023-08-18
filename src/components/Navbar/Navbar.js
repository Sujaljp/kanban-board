/* eslint-disable react/prop-types */
import React,{ useState } from 'react'
import './navbar.css'

const Navbar = ({groupBy, orderBy, setGroupBy, setOrderBy, change}) => {
  const [noDisplay, setNoDisplay] = useState(true)

  const displayGroupBy = () =>{
    setNoDisplay(!noDisplay)
  }

  const handleGroup = (e) =>{
    setGroupBy(e.target.value)
    localStorage.setItem("groupBy",e.target.value)
    change(e.target.value)
  }

  const handleOrder = (e)=>{
    setOrderBy(e.target.value)
    localStorage.setItem("orderBy",e.target.value)
  }
  

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <button className='display_btn' onClick={displayGroupBy}>
          <i className="uil uil-sliders-v-alt"></i>
            Display
            <i className="uil uil-angle-up"></i>
            <i className="uil uil-angle-down"></i>
          </button>
        </li>
      </ul>

      {!noDisplay && 
      <div className='group-by'>
      <ul>
        <li>
          Grouping
          <select name="groupBy" id="groupBy" value={groupBy} onChange={handleGroup}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </li>
        <li>
          Ordering
          <select name="orderBy" id="orderBy" value={orderBy} onChange={handleOrder}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </li>
      </ul>
    </div>}
    </nav>
  )
}

export default Navbar;