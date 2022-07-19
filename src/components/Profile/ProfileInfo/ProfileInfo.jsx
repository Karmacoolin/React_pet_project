import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '../../../assets/img/rickyie.jpg';
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import Preloader from "../../common/preloader";

const ProfileInfo = (props) => {


  
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader/>
}

  const mainPhotoSelected = (e) => {
    if (e.target.files.length)
      props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false)
}

  return (
    <div>
      <img src={props.profile.photos.large || userPhoto} className={s.avatar} />
      <div >
        {props.isOwner && <input type={"file"} onChange={mainPhotoSelected} />}
      </div>
{editMode ? <ProfileDataForm initialValues={props.profile} onSubmit = {onSubmit} /> 
: <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}}/> }
      <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />




    </div>

  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  
  return <div>
    
{isOwner && <div><button className={s.button} onClick={goToEditMode} >edit</button></div>}
    <div>
      <b>Full name:</b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My profeccional skills</b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>
    <div>

    {/* <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })} */}
    </div>
  </div>
}

const Contact = (contactTitle, contactValue) => {
  
  return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;