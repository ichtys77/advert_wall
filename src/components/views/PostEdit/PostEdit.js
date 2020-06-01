import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux.js';

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
    <div className={clsx(className, styles.root)}>
      <div className={styles.head}>
        <h1>Edit announcement</h1>
      </div>

      <form className={styles.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>

        <div className={styles.row}>
          <label> <span> Current name: </span> {editedPost.name}</label>
          <TextField
            className={styles.input}
            label="Name"
            variant="outlined"
            onChange={e => handleChange(e, 'name')}/>
        </div>
        <div className={styles.row}>
          <label> <span> Current description:</span> {editedPost.description}</label>
          <TextField
            className={styles.input}
            label="Description"
            variant="outlined"
            multiline="true"
            onChange={e => handleChange(e, 'description')}/>
        </div>
        <div className={styles.row}>
          <label> <span> Current e-mail </span> {editedPost.email}</label>
          <TextField
            className={styles.input}
            label="Email"
            variant="outlined"
            onChange={e => handleChange(e, 'email')}/>
        </div>
        <Button
          type="submit"
          className={styles.link}
        >Submit
        </Button>
      </form>
    </div>
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
