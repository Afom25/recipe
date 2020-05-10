import React from 'react';


const Recipe = ({title,image}) => {
    return (
        <div className='container'><hr></hr>
            
                <h4>{title}</h4><hr></hr>
           
         
            <img src={image} alt=""/>

                </div>
        
    )
}

export default Recipe;