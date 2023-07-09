import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Logo  from '../components/Logo.jsx';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from "../components/FormRow.jsx";
import Alert from "../components/Alert.jsx";
import {useAppContext} from "../context/appContext.jsx";
// global context and useNavigate later

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}
const Register = () => {
    const [values, setValues] = useState(initialState);
    const {
        isLoading,
        showAlert,
        displayAlert,
        setupUser,
        user
    } = useAppContext();
    const navigate = useNavigate();

    const toggleMember = () => {
        setValues((prevState) => {
            return {...prevState, isMember: !prevState.isMember}
        });
    }

    const handleChange = (e) => {
        setValues((prevState) => {
            return {...prevState, [e.target.name]: e.target.value};
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }
        const currentUser = {name, email, password};
        if (isMember) {
            setupUser({
                currentUser,
                endPoint: 'login',
                alertText: 'Login Successful! Redirecting...'
            });
        } else {
            setupUser({
                currentUser,
                endPoint: 'register',
                alertText: 'Create User Successfully! Redirecting...'
            });
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [user, navigate])

    return (
        <Wrapper className={'full-page'}>
            <form className={'form'} onSubmit={onSubmit}>
                <Logo/>
                <h3>{values.isMember ? 'Login' : 'Signup'}</h3>
                {showAlert && <Alert/>}
                {
                    !values.isMember &&
                    <FormRow type={'text'}
                             name={'name'}
                             handleChange={handleChange}
                             value={values.name}
                             labelText={'Name'}
                    />
                }
                <FormRow type={'email'}
                         name={'email'}
                         value={values.email}
                         labelText={'Email'}
                         handleChange={handleChange}
                />
                <FormRow type={'password'}
                         name={'password'}
                         value={values.password}
                         labelText={'Password'}
                         handleChange={handleChange}
                />
                <button type="submit" className="btn btn-block">Submit</button>
                <button type="button"
                        className="btn btn-block btn-hipster"
                        disabled={isLoading}
                        onClick={() => {
                            setupUser({
                                currentUser: {
                                    email: 'testUser@test.com',
                                    password: 'vF$fnBSggEZ4J9',
                                },
                                endPoint: 'login',
                                alertText: 'Login Successful! Redirecting...'
                            });
                        }}
                >{isLoading ? 'loading...' : 'demo app'}</button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}

                    <button type='button'
                            onClick={toggleMember}
                            className='member-btn'
                            disabled={isLoading}
                    >{values.isMember ? 'Register' : 'Login'}</button>
                </p>
            </form>
        </Wrapper>
    )
};

export default  Register;