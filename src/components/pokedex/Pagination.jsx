import React from 'react'
import './styles/pagination.css'


const Pagination = ({ page, pagesLength, setPage }) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrevius = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handleSet = e => {
        setPage(e)
    }

    return (
        <div className="pagination__container ">
        {
            page > 1 &&
            <div className='pagination__prev pagination__active' onClick={handlePrevius}>&#60;</div>
        }
            <ul className='pages_container'>
            {
                arrPages.map(e => (
                    <li className={`pages ${page === e && 'pagination__active'}`}
                    key={e}
                    onClick={() => handleSet(e)}
                    id='page'
                    >{e}</li>
                ))
            }
            </ul>
        {
            page < pagesLength &&
            <div className={`pagination__next pagination__active`} onClick={handleNext}>&#62;</div>
        }
            
        </div>
    )
}

export default Pagination