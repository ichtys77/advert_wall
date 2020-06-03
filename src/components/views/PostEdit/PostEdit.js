import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux.js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import styles from './PostEdit.module.scss';

const Component = ({posts, match, className, editPost}) => {

  const editedPost = posts.data[match.params.id];

  const [post, updatePost] = React.useState({
    name: '',
    description: '',
    email: '',
  });

  const handleChange = (e, name) => {
    updatePost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({...editedPost, ...post});
  };


  return (
    <ValidatorForm>
      <div className={clsx(className, styles.root)}>
        <div className={styles.head}>
          <h1>Edit announcement</h1>
        </div>

        <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>

          <div className={styles.row}>
            <label> <span> Current name: </span> {editedPost.name}</label>
            <TextValidator
              className={styles.input}
              label="Name"
              value={post.name}
              variant="outlined"
              onChange={e => handleChange(e, 'name')}
              validators={['required']}
              errorMessages={['this field is required']}/>
          </div>
          <div className={styles.row}>
            <label> <span> Current description:</span> {editedPost.description}</label>
            <TextValidator
              className={styles.input}
              label="Description"
              value={post.description}
              variant="outlined"
              multiline="true"
              onChange={e => handleChange(e, 'description')}
              validators={['required']}
              errorMessages={['this field is required']}/>
          </div>
          <div className={styles.row}>
            <label> <span> Current e-mail </span> {editedPost.email}</label>
            <TextValidator
              className={styles.input}
              label="Email"
              value={post.email}
              variant="outlined"
              onChange={e => handleChange(e, 'email')}
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
