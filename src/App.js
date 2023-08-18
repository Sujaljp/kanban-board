import React,{ useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Kanban from './components/Kanban/Kanban'



function App() {
  const API = 'https://api.quicksell.co/v1/internal/frontend-assignment';

  const status = ["Backlog","Todo", "In progress", "Done", "Cancelled"];
  const priority = ["No Priority","Urgent","High","Medium","Low"];


  const [tickets, setTickets] = useState(null);
  const [users, setUsers] = useState(null);
  const [pass, setPass] = useState(null)
  
  const change = (val) =>{
    if(val === "status"){
      setPass(status)
    }else if(val ==="user"){
      setPass(users)
    }else if(val ==="priority"){
      setPass(priority)
    }
  }

  const [groupBy, setGroupBy] = useState(()=>{
    if (localStorage.getItem("groupBy")) {
      change(localStorage.getItem("groupBy"))
      return localStorage.getItem("groupBy")
    }

    localStorage.setItem("groupBy", 'status')
    setPass(status)
    return  'status'
  })

  const [orderBy, setOrderBy] = useState(()=>{
    if (localStorage.getItem("orderBy")) {
      return localStorage.getItem("orderBy")
    }
    
    localStorage.setItem("orderBy", 'priority')
    return  'priority'
  })

  // getting data from api
  async function getData(API){
    try {
      const res = await fetch(API);
      const data = await res.json()
      setTickets(data.tickets)
      setUsers(data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData(API)
   },[]);

  
  useEffect(()=>{
    if(groupBy==='user'){
      setPass(users)
    }
  },[users])

  return (
    <>
      <div className='main_container'>
        <Navbar groupBy={groupBy} setGroupBy={setGroupBy} orderBy={orderBy} setOrderBy={setOrderBy} change={change}/>
        {tickets && pass && <Kanban val={pass} cards={tickets} groupBy={groupBy} orderBy={orderBy}/>}
      </div>
    </>
  )
}

export default App