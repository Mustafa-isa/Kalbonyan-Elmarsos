import {React,useState} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = (props => {
  const [filterdTitle ,SetFilterdTitled]=useState('')
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input value={filterdTitle} type="text" onChange={(e)=>{
            SetFilterdTitled(e.target.value)
            console.log(filterdTitle)
            props.item(filterdTitle)
            }}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
