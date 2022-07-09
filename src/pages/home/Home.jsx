import React from 'react';
import ProfileRight from '../../components/ProfileRight/ProfileRight';
import ProfileMiddle from '../../components/ProfileMiddle/ProfileMiddle';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';

import './Home.css'

function home() {
  return (
    <div className="home">
        <div className="profile-left"><ProfileLeft/></div>
        <div className="profile-middle"><ProfileMiddle/></div>
        <div className="profile-right"><ProfileRight/></div>
    </div>
  )
}

export default home