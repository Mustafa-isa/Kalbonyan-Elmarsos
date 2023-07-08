import {useEffect} from "react";
import Wrapper from "../assets/wrappers/JobsContainer.js";
import {useAppContext} from "../context/appContext.jsx";
import Job from "./Job.jsx";
import {Alert, Loading} from "./index.jsx";
import PageBtnContainer from "./PageBtnContainer.jsx";

const JobsContainer = () => {
    const {
        getJobs,
        jobs,
        isLoading,
        page,
        totalJobs,
        search,
        searchStatus,
        searchType,
        sort,
        numOfPages,
        showAlert,
    } = useAppContext();

    useEffect(() => {
        getJobs();
    }, [search, searchStatus, searchType, sort, page]);

    if (isLoading) {
        return <Loading center/>
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No Jobs To Display...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            {showAlert && <Alert/>}
            <h5>{totalJobs} job{jobs.length > 1 && 's'} found</h5>
            <div className="jobs">
                {
                    jobs.map(job => {
                        return <Job key={job._id} {...job}/>
                    })
                }
            </div>
            {numOfPages > 1 && <PageBtnContainer/>}
        </Wrapper>
    )
};

export default JobsContainer;