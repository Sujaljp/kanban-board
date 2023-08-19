/* eslint-disable react/prop-types */
import React from 'react';
import './kanban.css'
import TaskContainer from './task';



const Kanban = ({val,cards, groupBy, orderBy, users}) => {
  let arr;

  if(groupBy === 'status'){
    arr = val.map((title, index) => {
        let newCards = cards.filter((value) => value.status === title)
        return(
        <TaskContainer key={index} title={title} cards={newCards} orderBy={orderBy} users={users}/>
        )
    })
  }else if(groupBy === 'priority'){
    let ar = ["No Priority","Low","Medium","High","Urgent",]
    arr = val.map((title, index) => {
        let newCards = cards.filter((value) => ar[value.priority] === title)
        return(
        <TaskContainer key={index} title={title} cards={newCards} orderBy={orderBy} users={users}/>
        )
    })
    
  }else if(groupBy === 'user'){
      arr = val.map((obj, index) => {
        let newCards = cards.filter((value) => value.userId === obj.id)
        return(
        <TaskContainer key={index} title={obj.name} cards={newCards} orderBy={orderBy} users={users}/>
        )
    })
  }
  
  return (
    <div className='kanban-container'>
      {arr}
    </div>
  )
}

export default Kanban