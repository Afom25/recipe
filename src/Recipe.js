import React from 'react';


const Recipe = ({title,image}) => {
    return (
        <div className='container'><hr></hr>
            
                <h1>{title}</h1><hr></hr>
           
         
            <img src={image} alt=""/>

                </div>
        
    )
}

export default Recipe;