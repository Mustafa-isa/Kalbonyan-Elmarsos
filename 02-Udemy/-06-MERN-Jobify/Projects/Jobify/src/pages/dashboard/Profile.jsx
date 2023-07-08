import {useState} from "react";
import {useAppContext} from "../../context/appContext.jsx";
import {FormRow, Alert} from '../../components/index.jsx';
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";

const Profile = () => {
    const {
        user,
        showAlert,
        displayAlert,
        updateUser,
        isLoading
    } = useAppContext();

    const [name, setName] = useState(user?.name);
    const [lastName, setLastName] = useState(user?.lastName);
    const [email, setEmail] = useState(user?.email);
    const [location, setLocation] = useState(user?.location);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !lastName || !location) {
            displayAlert();
            return;
        }
        updateUser({name, email, lastName, location});
    };

    return (
        <Wrapper>
            <form className={'from'} onSubmit={submitHandler}>
                <h3>Profile</h3>
                {showAlert && <Alert/>}
                <div className="form-center">
                    <FormRow
                        type="text"
                        name={'name'}
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                    />
                    <FormRow
                        labelText={'Last name'}
                        type="text"
                        name={'lastName'}
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                    />
                    <FormRow
                        type="email"
                        name={'email'}
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                    />
                    <FormRow
                        type="text"
                        name={'location'}
                        value={location}
                        handleChange={(e) => setLocation(e.target.value)}
                    />
                    <button className="btn btn-block"
                            type="submit"
                            disabled={isLoading}
                    >
                        {isLoading ? 'please Wait...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
};

export default Profile;