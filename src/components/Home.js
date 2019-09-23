import React from "react"
import { Link } from 'react-router-dom'


export default () =>
    <div className='Home-wrapper'>
        <div className='Home-header'>
            <h1>Can't figure out what to eat for dinner?</h1>
            <h2>Let us help!</h2>
        </div>
          <div className='Home-body'>
              <h3>Try a random restaurant by <Link to = '/random_restaurant' className = 'Home-link' >Name</Link>
              <br></br> or by <Link to = '/random_type' className = 'Home-link' >Food Type</Link></h3>

          </div>
        <div>
        </div>
    </div>
