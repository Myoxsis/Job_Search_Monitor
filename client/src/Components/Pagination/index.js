import React from 'react';

const Pagination = ({offersPerPage, totalOffers, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalOffers / offersPerPage); i ++) {
        pageNumbers.push(i);
    }

    //const handleClick = (event) => {
    //    setCurrentPage(Number(event.target.id));
    //}

    return (
        <nav>
            <ul className="pagination pagination-sm">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(handleClick) => paginate(number)} href="#" className={currentPage == number ? 'active page-link' : 'page-link'}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;