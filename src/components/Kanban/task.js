/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';
import './task.css'

const TaskContainer = ({title,cards,orderBy}) => {

  // console.log(cards[0]);

  if(orderBy==='priority'){
      cards = cards.sort((a, b) => {
        return b.priority -a.priority;
    })
  }else if(orderBy==='title'){
      cards=  cards.sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
  }
  cards = cards.map((value, index) => {
    return(
      <Card key={index} value={value}/>
    )
  })
  
  return (
    <div className="task-container">
        <div className='header'>
          <div className='header_first'>
          <i className="uil uil-circle"></i>

            {title} 
            <span> {cards.length}</span>
          </div>
          <div>
            <i className="uil uil-plus"></i>
            <i className="uil uil-ellipsis-h"></i>
          </div>

          
        </div>
        {cards}
    </div>
  )
}

export default TaskContainer;