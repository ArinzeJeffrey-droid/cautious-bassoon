import React from 'react'



const Pagination = ({ numberOfPages, currentPage, goNext, goPrev }) => {
    const hidePaginationBtn = (nav) => {
        if(currentPage === 1 && nav === "prev") {
            return { visibility: "hidden"}
        }
        if(currentPage === numberOfPages && nav === "next"){
            return { visibility: "hidden"}
        }
        return {}
    }
    return ( 
    <div className="pagination-container">
        <div className="navigate" style={hidePaginationBtn("prev")} onClick={goPrev}>Previous</div>
        <div className="page">
            <p className="active">{currentPage}</p>
            <p className="ml">of</p>
            <p className="ml">{numberOfPages}</p>
        </div>
        <div className="navigate" style={hidePaginationBtn("next")} onClick={goNext}>Next</div>
    </div>
    );
}

export default Pagination;