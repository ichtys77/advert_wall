import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

const data =
  {
    id: 1,
    name: 'Rent a car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'john.doe@email.com',
  };

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.head}>
      <h1>Edit announcement</h1>
    </div>
    <form className={styles.form} noValidate autoComplete="off">
      <div className={styles.row}>
        <label> <span> Current id:</span> {data.id}</label>
        <TextField
          className={styles.input}
          label="id"
          variant="outlined" />
      </div>
      <div className={styles.row}>
        <label> <span> Current name: </span> {data.name}</label>
        <TextField
          className={styles.input}
          label="Name"
          variant="outlined" />
      </div>
      <div className={styles.row}>
        <label> <span> Current description:</span> {data.description}</label>
        <TextField
          className={styles.input}
          label="Description"
          variant="outlined"
          multiline="true" />
      </div>
      <div className={styles.row}>
        <label> <span> Current e-mail </span> {data.email}</label>
        <TextField
          className={styles.input}
          label="Email"
          variant="outlined" />
      </div>
      <Button
        type="submit"
        className={styles.link}
        to={process.env.PUBLIC_URL + '/post/:id'}
      >Submit
      </Button>
    </form>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};
