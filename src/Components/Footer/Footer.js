import React from 'react'

 const Footer = (props) => {
     console.log(props)
    return (
        <div>
              <h1>{props.owner.firstName}</h1>
               <p>{props.owner.email}  </p> 
        </div>
    )
}
export default Footer
