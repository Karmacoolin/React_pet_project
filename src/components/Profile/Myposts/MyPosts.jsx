import s from './MyPosts.module.css'
import Posttest from './posts/Posttest';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilits/validators/validators';
import { Textarea } from '../../common/Form/Form';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
  console.log('Render');
  let state = props.profilePage;

  let postElements = state.postData.map(el => <Posttest message={el.message} likesCount={el.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newPost)
  }

  return <div className={s.MyPosts}>
    <h3>My Posts</h3>
    <MyPostReduxForm onSubmit={addNewPost} />
    <div>
      {postElements}
    </div>
  </div>

}
)

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} placeholder={'type'} name={'newPost'}
          validate={[required, maxLength10]}></Field>
      </div>
      <button>send</button>
    </form>
  )
}

const MyPostReduxForm = reduxForm({
  form: 'post'
})(MyPostForm);

export default MyPosts;