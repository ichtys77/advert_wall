import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { addPost, getAll } from '../../../redux/postsRedux.js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import styles from './PostAdd.module.scss';

const Component = ({className, addPost}) => {

  const [post, newPost] = React.useState({
    id: '',
    name: '',
    description: '',
    email: '',
    published: '',
    updated: '',
    status: '',
  });

  const handleChange = (e, name) => {
    newPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
  };

  return (
    <ValidatorForm>
      <div className={clsx(className, styles.root)}>
        <div className={styles.head}>
          <h1>Add new announcement</h1>
        </div>
        <form className={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={e => handleSubmit(e)}>
          <TextValidator
            className={styles.input}
            label="Name"
            onChange={e => handleChange(e, 'name')}
            value={post.name}
            variant="outlined"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={styles.input}
            label="Description"
            onChange={e => handleChange(e, 'description')}
            value={post.description}
            variant="outlined"
            multiline="true"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={styles.input}
            label="E-mail"
            onChange={e => handleChange(e, 'email')}
            name="email"
            value={post.email}
            variant="outlined"
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
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
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
