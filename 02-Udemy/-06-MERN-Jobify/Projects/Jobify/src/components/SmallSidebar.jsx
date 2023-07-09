import Wrapper from "../assets/wrappers/SmallSidebar.js";
import {useAppContext} from "../context/appContext.jsx";
import {Logo} from "./index.jsx";
import {NavLink} from "react-router-dom";
import {FaTimes, FaWpforms} from "react-icons/fa";
import {IoBarChartSharp} from "react-icons/io5";
import {MdQueryStats} from "react-icons/md";
import {ImProfile} from "react-icons/im";

const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useAppContext();
    return (
        <Wrapper >
            <div className={`${showSidebar ? 'show' : 'hide'}-sidebar sidebar-container`}>
                <div className="content">
                    <button className={'close-btn'}
                            onClick={toggleSidebar}
                    >
                        <FaTimes/>
                    </button>
                    <Logo/>
                    <nav className={'nav-links'}>
                        <NavLink to={'/'} className={'nav-link'}>
                            <IoBarChartSharp className={'icon'}/>
                            Stats
                        </NavLink>
                        <NavLink to={'/all-jobs'} className={'nav-link'}>
                            <MdQueryStats className={'icon'}/>
                            All Jobs
                        </NavLink>
                        <NavLink to={'/add-job'} className={'nav-link'}>
                            <FaWpforms className={'icon'}/>
                            Add Job
                        </NavLink>
                        <NavLink to={'/profile'} className={'nav-link'}>
                            <ImProfile className={'icon'}/>
                            Profile
                        </NavLink>
                    </nav>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;