import React from 'react'
import classes from './header.module.css'
import ImageMeal from "../../Assets/meals.jpg"
import HeaderIcon from './HeaderIcon'
function Header(props) {
  return (
    <React.Fragment>
<header className={classes.header}>
  <h3>
    ReactMeal
  </h3>
  <HeaderIcon  onclick={props.onshowingcard}/>
</header>
<div className={classes['main-image']}>
  <img src={ImageMeal} alt="" />
</div>
    </React.Fragment>
  )
}

export default Header
