import {Link, Navigate} from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage.js';
import Logo from "../components/Logo.jsx";
import {useAppContext} from "../context/appContext.jsx";

const Landing = (props) => {
    const {user} = useAppContext();

    if (user) {
        return <Navigate to={'/'}/>;
    }
    return (
        <Wrapper >
            <nav>
                <Logo/>
            </nav>

            <section className={'container page'}>
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        I'm baby wayfarers hoodie next level teriyaki brooklyn cliche blue bottle
                        single-origin coffee chia. Aesthetic post-ironic venmo,
                        quinoa lo-fi tote bag adaptation everyday carry muggings +1 brunch narwhal.
                    </p>
                    <Link to={'/register'} className="btn btn-hero">Login/Register</Link>
                </div>
                <img src="/images/main.svg" alt="job hunt" className={'img main-img'}/>
            </section>
        </Wrapper>
    );
};


export default Landing;