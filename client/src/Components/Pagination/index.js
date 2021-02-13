import React from 'react';

const Pagination = ({offersPerPage, totalOffers, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalOffers / offersPerPage); i ++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination pagination-sm">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;