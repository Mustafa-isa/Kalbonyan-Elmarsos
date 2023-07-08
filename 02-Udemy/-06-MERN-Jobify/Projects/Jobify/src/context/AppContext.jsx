import React, {useReducer, useContext, useEffect} from 'react';
import axios from "axios";
import reducer from "./reducer.jsx";

import {
    CLEAR_ALERT, DISPLAY_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    DELETE_JOB_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
} from "./actions.jsx";
import {FcClearFilters} from "react-icons/fc";

// const user = localStorage.getItem('user');
// const token = localStorage.getItem('token');
// const userLocation = localStorage.getItem('location');

const initialState = {
    userLoading: true,
    isLoading: false,
    showAlert: false,
    showSidebar: true,
    alertText: '',
    alertType: '',
    user: null,
    userLocation: '',
    isEditing: false,
    editJobId: '',
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],

    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    // Axios
    const authFetch = axios.create({
        baseURL: '/api/v1'
    });


    // response
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // console.log(error.response);
            if (error.response.status === 401) {
                logoutUser();
            }
            return Promise.reject(error);
        }
    );

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT});
        }, 3000)
    }

    const setupUser = async ({currentUser, endPoint, alertText}) => {
        dispatch({type: SETUP_USER_BEGIN});
        try {
            const {data} = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);
            const {user, location} = data
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {user,location, alertText}
            })

        } catch (err) {
            dispatch({
                type: SETUP_USER_ERROR,
                payload: {
                    msg: err.response.data.msg
                }
            });
        }
        clearAlert();
    };

    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR});
    };

    const logoutUser = async () => {
        await authFetch('/auth/logout');
        dispatch({type: LOGOUT_USER});
    }

    const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN});
        try {
            const {data} = await authFetch.patch(
                '/auth/update-user',
                currentUser
            );

            const {user, location} = data;
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {user, location}
            });

        } catch (err) {
            if (err.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: {msg: err.response.data.msg}
                });
            }
        }
        clearAlert()
    };

    const handleChange = (name, value) => {
        dispatch({type: HANDLE_CHANGE, payload: {name, value}});
    }

    const clearValues = () => {
        dispatch({type: CLEAR_VALUES});
    }

    const createJob = async () => {
        const {position, company, status, jobType, jobLocation} = state;
        dispatch({type: CREATE_JOB_BEGIN});

        try {
            await authFetch.post('/jobs/create-job', {
                position,
                company,
                status,
                jobType,
                jobLocation
            });

            dispatch({type: CREATE_JOB_SUCCESS});
            clearValues();
        } catch (err) {
            if (err.response.status === 401) return;

            dispatch({type: CREATE_JOB_ERROR, payload: {msg: err.response.data.msg}});
        }
        clearAlert();
    }

    const getJobs = async () => {
        const {page, search, searchStatus, searchType, sort} = state;

        let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
        if (state.search.length) {
            url += `&search=${search}`;
        }
        dispatch({type: GET_JOBS_BEGIN})

        try {
            const {data} = await authFetch(url);
            const {jobs, totalJobs, numOfPages} = data;

            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: {jobs,totalJobs, numOfPages}
            })
        } catch (err) {
            // console.log(err.response);
            logoutUser();
        }
        clearAlert();
    }

    const setEditJob = (id) => {
        dispatch({type: SET_EDIT_JOB, payload: {id}});
    };

    const editJob = async () => {
        dispatch({type: EDIT_JOB_BEGIN});

        try {
            const {
                position,
                company,
                jobLocation,
                jobType,
                status,
                editJobId
            } = state;

            console.log(editJobId);
            await authFetch.patch(
                `/jobs/update-job/${state.editJobId}`,
                {
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status
                }
            );

            dispatch({type: EDIT_JOB_SUCCESS});
            clearValues()
        } catch (err) {
            if (err.response.status === 401) return;

            console.log(err.response);
            dispatch({
                type: EDIT_JOB_ERROR,
                payload: {msg: err.response.data.msg}
            });
        }
        clearAlert();
    }

    const deleteJob = async (id) => {
        dispatch({type: DELETE_JOB_BEGIN});

        try {
            await authFetch.delete(`/jobs/delete-job/${id}`);
            await getJobs();
        } catch (err) {
            if (err.response.status === 401) return;

            console.log(err.response);
            dispatch({
                type: DELETE_JOB_ERROR,
                payload: {msg: err.response.data.msg}
            });
        }
        console.log(`Delete Job: ${id}`);
    }

    const showStats = async () => {
        dispatch({type: SHOW_STATS_BEGIN});
        try {
            const {data} = await authFetch('/jobs/stats');
            dispatch({
                type: SHOW_STATS_SUCCESS,
                payload: {
                    stats: data.stats,
                    monthlyApplications: data.monthlyApplications
                }
            });
        } catch (err) {
            // console.log(err)
            logoutUser()
        }

        clearAlert();
    }

    const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS});
    }

    const changePage = (page) => {
        dispatch({type: CHANGE_PAGE, payload: { page } });
    }

    const getCurrentUser = async () => {
        dispatch({type: GET_CURRENT_USER_BEGIN});

        try {
            const {data} = await authFetch('/auth/getCurrentUser');
            const {user, location} = data;
            console.log(user);
            dispatch({
                type: GET_CURRENT_USER_SUCCESS,
                payload: {user, location}
            });
        } catch (err) {
            if (err.response.status === 401) return;

            logoutUser();
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
        <AppContext.Provider value={{
            ...state,
            displayAlert,
            setupUser,
            toggleSidebar,
            logoutUser,
            updateUser,
            handleChange,
            clearValues,
            createJob,
            getJobs,
            setEditJob,
            deleteJob,
            editJob,
            showStats,
            clearFilters,
            changePage,
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export {AppProvider, initialState, useAppContext}