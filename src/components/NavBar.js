import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


const NavBar = () => {
    return (
        <div className = 'Nav-wrapper'>
            <div className = 'Nav-links-wrapper'>
                <Link to = '/' className = 'Nav-link' >Home</Link>
                <Link to = '/restaurants' className = 'Nav-link' >All Restaurants</Link>
                <Link to = '/review_form' className = 'Nav-link' >Write a Review</Link>
            </div>
        </div>
    )
  }

  export default NavBar;
