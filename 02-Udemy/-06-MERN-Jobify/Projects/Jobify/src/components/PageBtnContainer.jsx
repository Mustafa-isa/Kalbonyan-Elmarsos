import Wrapper from "../assets/wrappers/PageBtnContainer.js";
import {useAppContext} from "../context/appContext.jsx";
import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi";

const PageBtnContainer = () => {
    const {numOfPages, page, changePage} = useAppContext();

    const pages = Array.from({length: numOfPages}, (_, index) => {
        return index + 1;
    });

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }
        changePage(newPage);
    };
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages;
        }
        changePage(newPage);
    };

    return (
        <Wrapper>
            <button className="prev-btn" onClick={prevPage}>
                <HiChevronDoubleLeft/> prev
            </button>
            <div className="btn-container">
                {
                    pages.map((num) => {
                        return <button type={"button"}
                                key={num}
                                className={`${num === page ? 'active' : ''} 
                                    pageBtn
                                `}
                                onClick={() => changePage(num)}
                        > {num} </button>;
                    })
                }
            </div>
            <button className="prev-btn" onClick={nextPage}>
                <HiChevronDoubleRight/> next
            </button>
        </Wrapper>
    );
};

export default PageBtnContainer;
