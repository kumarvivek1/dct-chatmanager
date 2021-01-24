import React, {useEffect,useState } from 'react'


function Pagination(props) {
    const {handlePage} = props
    const [pageCount, setPageCount] = useState(1)
    
    useEffect(() => {
        handlePage(pageCount)
    }, [pageCount])

    return (
        <div>
            <ul className='pagination'>

                <li className="page-item">
                    <a href='#' className="page-link" onClick={() => {
                        if (pageCount > 1) {
                            setPageCount(pageCount - 1)
                        }
                    }} >previous</a>
                </li>
                <li className="page-item">
                    <a href='#' className="page-link" onClick={()=>{setPageCount(pageCount+1)}}>next</a>
                </li>
            </ul> 
        </div>
    )
}

export default Pagination
