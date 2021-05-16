import React from 'react';
import mypic from './syrine.jpg';

const style={
    
    width: '350px',
    height: '350px',
    border: 'none',
    MozBorderRadius : '170px',
    WebkitBorderRadius : '170px',
    borderRadius : '170px',
    marginLeft:'10px',
    float :'left',

}
const ProfilePhoto = () => {
    return (
        <div>
        <img src= {mypic} alt="syrine "style ={style}/>  
        </div>
    );
}

export default ProfilePhoto;
