import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from "moment";
import { useAppContext } from '../context/appContext.jsx';
import Wrapper from '../assets/wrappers/Job.js';
import JobInfo from './JobInfo.jsx';


const Job = ({_id, position, status, jobLocation, jobType, company, createdAt}) => {
    const {setEditJob, deleteJob} = useAppContext();

    let date = moment(createdAt);
    date = date.format('MMM Do, YYYY');
    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>

            <div className="content">
                <div className="content-center">
                    <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
                    <JobInfo icon={<FaCalendarAlt/>} text={date}/>
                    <JobInfo icon={<FaBriefcase/>} text={jobType}/>
                    <div className={`status ${status}`}>{ status }</div>
                </div>
                <footer>
                    <div className="actions">
                        <Link to={'/add-job'}
                            className={'btn edit-btn'}
                            onClick={() => setEditJob(_id)}
                        >Edit</Link>

                        <button type="button"
                                className="btn delete-btn"
                                onClick={() => deleteJob(_id)}
                        >delete</button>

                    </div>
                </footer>
            </div>
        </Wrapper>
    )
};

export default Job;