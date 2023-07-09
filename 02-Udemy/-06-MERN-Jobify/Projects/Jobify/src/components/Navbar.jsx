import Wrapper from "../assets/wrappers/Navbar.js";
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa";
import {useAppContext} from "../context/appContext.jsx";
import {Logo} from "./index.jsx";
import {useState} from "react";


const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const {user, toggleSidebar, logoutUser} = useAppContext();

    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn"
                    type='button'
                    onClick={toggleSidebar}
                >
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo/>
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button className='btn'
                        type='button'
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle/>
                        {user && user.name}
                        {/*{user?.name} // Optional Chaining*/}
                        <FaCaretDown/>
                    </button>
                    <div className={`dropdown ${showLogout ? 'show' : 'hide'}-dropdown`}>
                        <button type="button"
                                className='dropdown-btn'
                                onClick={logoutUser}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;