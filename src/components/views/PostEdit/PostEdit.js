import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux.js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import styles from './PostEdit.module.scss';

const Component = ({posts, match, className, editPost}) => {

  console.log('posts', posts);
  const editedPostId = match.params.id;
  console.log(editedPostId);
  const editedPost = posts.data.find(item => item._id === editedPostId);

  const [post, updatePost] = React.useState({
    name: '',
    description: '',
    email: '',
  });

  const history = useHistory();

  const backNavigate = () => {
    history.push('/myposts');
  };

  const handleChange = (e, name) => {
    updatePost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({...editedPost, ...post});
    backNavigate();
  };


  return (
    <ValidatorForm>
      <div className={clsx(className, styles.root)}>
        <div className={styles.head}>
          <h1>Edit announcement</h1>
        </div>

        <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>

          <div className={styles.row}>
            <label> <span> Current title: </span> {editedPost.title}</label>
            <TextValidator
              className={styles.input}
              label="Title"
              value={post.title}
              variant="outlined"
              onChange={e => handleChange(e, 'title')}
              validators={['required']}
              errorMessages={['this field is required']}/>
          </div>
          <div className={styles.row}>
            <label> <span> Current description:</span> {editedPost.text}</label>
            <TextValidator
              className={styles.input}
              label="Description"
              value={post.text}
              variant="outlined"
              multiline="true"
              onChange={e => handleChange(e, 'text')}
              validators={['required']}
              errorMessages={['this field is required']}/>
          </div>
          <div className={styles.row}>
            <label> <span> Current e-mail: </span> {editedPost.author}</label>
            <TextValidator
              className={styles.input}
              label="Email"
              value={post.author}
              variant="outlined"
              onChange={e => handleChange(e, 'author')}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}/>
          </div>
          <Button
            type="submit"
            className={styles.link}
          >Submit
          </Button>
        </form>
      </div>
    </ValidatorForm>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  editPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
