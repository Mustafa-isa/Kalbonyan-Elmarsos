import Wrapper from "../assets/wrappers/BigSidebar.js";
import {useAppContext} from "../context/appContext.jsx";
import {Logo} from "./index.jsx";
import {NavLink} from "react-router-dom";
import {IoBarChartSharp} from "react-icons/io5";
import {MdQueryStats} from "react-icons/md";
import {FaWpforms} from "react-icons/fa";
import {ImProfile} from "react-icons/im";

const BigSidebar = () => {
    const {showSidebar} = useAppContext();
    return (
        <Wrapper className={`sidebar-container
                ${showSidebar ? 'show' : 'hide'}-sidebar
            `}
        >
            <div className={`sidebar-container
                ${showSidebar ? 'show' : 'hide'}-sidebar
            `}>
                <div className="content">
                    <header>
                        <Logo/>
                    </header>
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

export default BigSidebar;