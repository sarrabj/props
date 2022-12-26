import React from 'react'
import './Profile.css';
import PropTypes from "prop-types";

const Profile = (props) => {
return (
    
       
    <div className='paren'style={{backgroundColor:"beige"}}> 
    <img src="/img1.jpg" alt="img1">{props.children}</img>
    <h3 className="name"> FullName:{props.fullName}      
    <button onClick={props.handleName}> alert name</button> </h3>
    <h3 className="bio">Bio:{props.bio} </h3>
    <h3 className="prof">Profession:{props.profession} </h3>

    </div>
    
    
    
)
}
Profile.defaultProps={fullName:"Sarra Sarra"}
Profile.propTypes={fullName:PropTypes.string}
export default Profile