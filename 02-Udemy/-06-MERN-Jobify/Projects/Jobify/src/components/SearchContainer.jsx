import Wrapper from "../assets/wrappers/SearchContainer.js";
import {useAppContext} from "../context/appContext.jsx";
import {FormRow, FormRowSelect} from "./index.jsx";
import {useEffect, useState, useMemo} from "react";


const SearchContainer = () => {
    const [localSearch, setLocalSearch] = useState('');
    const {
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        handleChange,
        clearFilters,
        jobTypeOptions,
        statusOptions,
    } = useAppContext();

    const searchHandler = (e) => {
        handleChange(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalSearch('');
        clearFilters();
    }

    const debounce = () => {
        let timeoutId;
        return (e) => {
            setLocalSearch(e.target.value);
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                handleChange(e.target.name, e.target.value);
            }, 800)
        }
    }

    const optimizedDebounce = useMemo(() => debounce(), []);

    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>
                <div className="form-center">
                    <FormRow
                        type={'text'}
                        name={'search'}
                        value={localSearch}
                        handleChange={optimizedDebounce}
                    />

                     <FormRowSelect
                         id={'searchStatus'}
                         labelText={'status'}
                         name={'searchStatus'}
                         value={searchStatus}
                         handleChange={searchHandler}
                         options={['all', ...statusOptions]}
                     />

                    <FormRowSelect
                        id={'type'}
                        labelText={'Type'}
                        name={'searchType'}
                        value={searchType}
                        handleChange={searchHandler}
                        options={['all', ...jobTypeOptions]}
                    />

                    <FormRowSelect
                        id={'sort'}
                        // labelText={'status'}
                        name={'sort'}
                        value={sort}
                        handleChange={searchHandler}
                        options={sortOptions}
                    />

                    <button className="btn btn-block btn-danger"
                            disabled={isLoading}
                            onClick={handleSubmit}
                    > clear filter</button>
                </div>
            </form>
        </Wrapper>
    )
};

export default SearchContainer;