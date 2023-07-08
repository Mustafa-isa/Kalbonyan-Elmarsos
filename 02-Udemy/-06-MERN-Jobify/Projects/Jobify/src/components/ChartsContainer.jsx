import BarChart from "./BarChart.jsx";
import AreaChart from "./AreaChart.jsx";
import {useAppContext} from "../context/appContext.jsx";
import {useState} from "react";
import Wrapper from "../assets/wrappers/ChartsContainer.js";

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications: data} = useAppContext();

    return (
        <Wrapper>
            <h4>Monthly Applications</h4>

            <button
                onClick={() => setBarChart(!barChart)}
            >{barChart ? 'Area Chart' : 'Bar Chart'}</button>

            {
                barChart ? <BarChart data={data}/> :
                    <AreaChart data={data}/>
            }
        </Wrapper>
    );
};

export default ChartsContainer;
