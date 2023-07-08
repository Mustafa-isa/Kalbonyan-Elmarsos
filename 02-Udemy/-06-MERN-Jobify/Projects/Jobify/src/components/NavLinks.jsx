
import { NavLink } from 'react-router-dom';
import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'


const idies =[1,2,3,4]
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
        <NavLink
            to='/'
            key={idies[0]}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className='icon'>
            <IoBarChartSharp/>
            </span>
            stats
          </NavLink>


          <NavLink
            to='All_jops'
            key={idies[1]}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className='icon'>
            <MdQueryStats/>
            </span>
            all jobs
          </NavLink>


          <NavLink
            to='Add_jop'
            key={idies[2]}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className='icon'><FaWpforms/></span>
          add jop
          </NavLink>


          <NavLink
            to='profile'
            key={idies[3]}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className='icon'><ImProfile/></span>
            profile
          </NavLink>

    
    </div>
  );
};

export default NavLinks;
