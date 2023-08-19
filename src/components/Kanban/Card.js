/* eslint-disable react/prop-types */
import React from "react"

const Card = ({value, users}) => {
    let tags = value.tag.map((tags, index) => {
      return (
        <div className="tag" key={index}>
                <i className="uil uil-adjust-half"></i>
                {tags}
            </div>
      )
    })

    let isActive;
    users.forEach((user, index) => {
      if(user.id === value.userId){
        isActive=user.available;
      }
    })
  return (
    
    <div className='card'>

          <div className={isActive ? "avatar active": "avatar"}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsm_e8tqrx6KbrRvELOvIYs2neMYDvpo4rQ&usqp=CAU" alt="" />
          </div>
          <div>
            {value.id}
          </div>
          <div className="title">
            <div><i className="uil uil-check-circle"></i></div>
            <div>{value.title}</div>
          </div>
          <div className="footer">
            {tags}
          </div>
    </div>
  )
}

export default Card