import React, {useState} from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalItemCount, pageSize, onPageChange, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>

            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> prev </button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <button className={currentPage === p
                        ? style.selectPage
                        : style.pageCount}
                                   onClick={(e) => {
                                       onPageChange(p)
                                   }}>{p}</button>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> next </button>}
        </div>
    )

}

export default Paginator;