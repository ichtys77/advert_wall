import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../../features/Announcement/Announcement';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const data =
  {
    id: 1,
    name: 'Rent a car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'john.doe@email.com',
  };

const Component = ({id, name, description, email}) => (
  <div className={styles.root}>
    <div className={styles.head}>
      <h1 className={styles.title}>Details</h1>
    </div>
    <Announcement
      id={id}
      name={data.name}
      description={data.description}
      email={data.email}
      userLogged
    />
  </div>
);

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
