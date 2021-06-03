import React from 'react'
import "./loader.styles.css"

const Loader = () => {
    return ( 
    <div className="loader">
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div> );
}

export default Loader;