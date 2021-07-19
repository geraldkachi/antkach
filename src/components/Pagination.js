import React, {useState, useEffect}  from "react";

const Pagination = ({ totalPosts, paginate, setcurrentPage, currentPage }) => {

    // const [pageNumLimit, setPageNumLimit] = useState(5)
    const [pageNumLimit] = useState(5)
    const [maxPageNumLimit, setmaxPageNumLimit] = useState(5)
    const [minPageNumLimit, setminPageNumLimit] = useState(0)

    const [currentButton, setcurrentButton] = useState(1)

  const pageNumbers = [];

  for (let i = 1; i < totalPosts; i++) {
    pageNumbers.push(i);
  }
//   for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
    useEffect(() => {
        setcurrentPage(currentButton)
    }, [currentButton, setcurrentPage])


    const renderPageNumbers = pageNumbers.map((number) => {

        if(number < maxPageNumLimit + 1 && number > minPageNumLimit){

        return (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </li>
        )
        } else {
            return null
        }
    })

    const handleNextbtn = () => {
        setcurrentPage(prev => prev + 1)
        if (currentPage + 1 > maxPageNumLimit) {
            setmaxPageNumLimit(maxPageNumLimit + pageNumLimit)
            setminPageNumLimit(minPageNumLimit + pageNumLimit)
        }
    }

    const handlePrevbtn = () => {
        if ((currentPage - 1) % pageNumLimit === 0) {    
            setmaxPageNumLimit(maxPageNumLimit - pageNumLimit)
            setminPageNumLimit(minPageNumLimit - pageNumLimit)
        }
    }

    let pageIncrementBtn = null;
    if (pageNumbers.length > maxPageNumLimit) {
        pageIncrementBtn = <li><a onClick={handleNextbtn}>&hellip;</a></li>
    }
    
    let pageDecrementBtn = null;
    // pageNumbers.length < maxPageNumLimit
    if (minPageNumLimit  >= 1) {
        pageDecrementBtn = <li><a onClick={handlePrevbtn}>&hellip;</a></li>
    }
    

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button onClick={() => setcurrentButton(prev => prev === 1 ? prev : prev - 1)} disabled={currentPage === pageNumbers[0] ? true : false}>Previous</button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button onClick={() => setcurrentButton(next => next === pageNumbers.length ? next : next + 1)} disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false} >Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
