import React from 'react';
import { Navigate } from 'react-router-dom';
import MyPostsContainer from './Myposts/MyPostsContainer';

import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  
  
    return (
      <div>
      <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus} />
      <MyPostsContainer  />
      
      </div>
    )
      

   
}

export default Profile;