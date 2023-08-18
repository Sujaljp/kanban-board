/* eslint-disable react/prop-types */
import React from "react"

const Card = ({value}) => {
    // value = {
    //     "id": "CAM-1",
    //     "title": "Update User Profile Page UI",
    //     "tag": [
    //       "Feature request"
    //     ],
    //     "userId": "usr-1",
    //     "status": "Todo",
    //     "priority": 4
    //   }
  return (
    
    <div className='card'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsm_e8tqrx6KbrRvELOvIYs2neMYDvpo4rQ&usqp=CAU" alt="" />
          <div>
            {value.id}
          </div>
          <div className="title">
            <div><i className="uil uil-check-circle"></i></div>
            <div>{value.title}</div>
          </div>
          <div className="footer">
            
            <div className="tag">
                <i className="uil uil-adjust-half"></i>
                {value.tag[0]}
            </div>
          </div>
    </div>
  )
}

export default Card