import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Posts.module.scss';

export const data = [
  {
    id: 1,
    name: 'Rent a car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'john.doe@email.com',
  },
  {
    id: 2,
    name: 'Books for free',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'adoe@gmail.com',
  },
  {
    id: 3,
    name: 'Looking for old computer parts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'lmazurkiewicz@outlook.com',
  },
];

const Component = () => (
  <div className={styles.root}>
    {data.map(post =>(
      <Announcement
        key={post.id}
        name={post.name}
        description={post.description}
        email={post.email}
        id={post.id}
      />
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Posts,
  // Container as Posts,
  Component as PostsComponent,
};
