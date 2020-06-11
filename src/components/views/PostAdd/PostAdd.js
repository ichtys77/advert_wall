import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getAll, addRequest } from '../../../redux/postsRedux.js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import styles from './PostAdd.module.scss';

const Component = ({className, addRequestPost}) => {

  const [post, newPost] = React.useState({
    author: '',
    created: '',
    updated: '',
    status: '',
    title: '',
    text: '',
    photo: '',
    price: '',
    phone: '',
    location: '',
  });

  const history = useHistory();

  const backNavigate = () => {
    history.push('/');
  };

  const handleChange = (e, name) => {
    newPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequestPost(post);
    backNavigate();
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
            label="Title"
            onChange={e => handleChange(e, 'title')}
            value={post.title}
            variant="outlined"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={styles.input}
            label="Description"
            onChange={e => handleChange(e, 'text')}
            value={post.text}
            variant="outlined"
            multiline="true"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <TextValidator
            className={styles.input}
            label="E-mail"
            onChange={e => handleChange(e, 'author')}
            name="author"
            value={post.author}
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
  addRequestPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addRequestPost: post => dispatch(addRequest(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
