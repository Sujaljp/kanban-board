/* eslint-disable react/prop-types */
import React,{ useEffect, useRef, useState } from 'react'
import './navbar.css'

const Navbar = ({groupBy, orderBy, setGroupBy, setOrderBy, change}) => {
  const [open, setOpen] = useState(false)

  let menuRef = useRef();
  let btnRef = useRef();

  const handleChange =() =>{
    setOpen((prev)=> !prev)
  }

  useEffect(()=>{
    let handler = (e)=>{
      if(btnRef.current.contains(e.target)){
        console.log("Button touched");
      }else if(!menuRef.current.contains(e.target)){
        setOpen(false)
        console.log(e.target);
      }else{
      }
    }
    document.addEventListener("mousedown", handler)
  })

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
        <li >
          <button className='display_btn' onClick={handleChange} ref={btnRef}>
          <i className="uil uil-sliders-v-alt" ></i>
            Display
            <i className="uil uil-angle-up"></i>
            <i className="uil uil-angle-down"></i>
          </button>
        </li>
      </ul>

      <div className={open? 'group-by': 'group-by hide'} ref={menuRef}>
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
          </div>
    </nav>
  )
}

export default Navbar;