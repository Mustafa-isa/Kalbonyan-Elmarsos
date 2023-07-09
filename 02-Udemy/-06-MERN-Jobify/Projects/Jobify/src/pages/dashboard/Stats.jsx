import { useEffect } from 'react';
import {useAppContext} from "../../context/appContext.jsx";
import {StatsContainer, Loading, ChartsContainer} from "../../components/index.jsx";

const Stats = () => {
    const {showStats, isLoading, monthlyApplications} = useAppContext();

    useEffect(() => {
        showStats();
    }, []);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
            <StatsContainer/>
            {monthlyApplications && monthlyApplications.length > 0 && <ChartsContainer/>}
        </>
    )
};

export default Stats;