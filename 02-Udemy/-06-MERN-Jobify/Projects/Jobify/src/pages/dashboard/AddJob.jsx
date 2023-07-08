import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import {Alert, FormRow, FormRowSelect} from "../../components/index.jsx";
import {useAppContext} from "../../context/appContext.jsx";

const AddJob = () => {

    const {
        showAlert,
        displayAlert,
        position,
        status,
        statusOptions,
        jobType,
        jobLocation,
        jobTypeOptions,
        company,
        isEditing,
        handleChange,
        clearValues,
        isLoading,
        createJob,
        editJob
    } = useAppContext();

    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        handleChange(name, value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // if (!position || !company || !jobLocation) {
        //     displayAlert();
        //     return;
        // }
        if (isEditing) {
            // eventually editJob()
            editJob();
            return;
        }

        createJob()
    }

    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? 'edit' : 'add'} job</h3>
                {showAlert && <Alert/>}

                <div className="form-center">
                    <FormRow
                        type={'text'}
                        name={'position'}
                        value={position}
                        handleChange={handleJobInput}
                    />

                    <FormRow
                        type={'text'}
                        name={'company'}
                        value={company}
                        handleChange={handleJobInput}
                    />

                    <FormRow
                        type={'text'}
                        name={'jobLocation'}
                        labelText={'Job Location'}
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />

                    <FormRowSelect
                        name='status'
                        value={status}
                        id='status'
                        options={statusOptions}
                        handleChange={handleJobInput}
                    />

                    <FormRowSelect
                        name='jobType'
                        labelText={'job type'}
                        value={jobType}
                        id='jobType'
                        options={jobTypeOptions}
                        handleChange={handleJobInput}
                    />

                    <div className="btn-container">
                        <button type="submit"
                                className="btn btn-block submit-btn"
                                onClick={submitHandler}
                                disabled={isLoading}
                        >
                            Submit
                        </button>

                        <button className="btn btn-block clear-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    clearValues();
                                }}
                        >
                            clear</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
};

export default AddJob;
