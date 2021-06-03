import React from 'react'



const Card = ({ name, description, link }) => {
    return ( 
    <div className="card">
        <div className="card-inner-header">
            {name}
        </div>
        <div className="card-inner-text">
            {description} ...
        </div>
        <div className="card-footer">
            <p>Use Template</p>
        </div>
    </div>
    );
}

export default Card;