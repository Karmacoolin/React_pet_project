import { Field, Form, reduxForm } from "redux-form";
import { required } from '../../../utilits/validators/validators';
import { Input } from '../../common/Form/Form';
import { Textarea } from './../../common/Form/Form';
const ProfileDataForm = ({ profile, handleSubmit }) => {
    return <Form onSubmit={handleSubmit}>
        <div><button>save</button></div>

        <div>
            <b>Full name:</b> <Field placeholder={'FullName'} name={'fullname'}
                component={Input} />
        </div>
        <div>
            <b>Looking for a job:</b> <Field placeholder={''} name={'lookingForAJob'}
                component={Input} type={'checkbox'} />
        </div>

        <div>
            <b>My profeccional skills</b> <Field placeholder={'My profeccional skills'}
                name={'lookingForAJobDescription'} component={Textarea} />
        </div>


        <div>
            <b>About me:</b> <Field placeholder={'About me'}
                name={'aboutMe'} component={Textarea} />
        </div>
        <div>

            {/*  <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
  
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })} */}
        </div>
    </Form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;