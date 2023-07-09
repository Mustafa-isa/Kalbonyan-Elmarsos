import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={'/images/not-found.svg'} alt='not found' />
                <h3>text</h3>
                <p>text</p>
                <Link to='/'>back home</Link>
            </div>
        </Wrapper>
    );
};

export default  Error;

