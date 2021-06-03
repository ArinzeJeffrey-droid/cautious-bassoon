import React from 'react'

const CardContentHeader = ({ num_of_results, search }) => {
    return (
    <div className="card-header">
        <p>{search ? search : "All Templates"}</p>
        <p>{num_of_results} templates</p>
    </div>
    );
}

export default CardContentHeader;