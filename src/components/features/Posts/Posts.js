import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Posts.module.scss';

const Component = ({posts}) => (
  <div className={styles.root}>
    {posts.data.map(post =>(
      <Announcement
        key={post.id}
        name={post.name}
        description={post.description}
        email={post.email}
        id={post.id}
        published={post.published}
        updated={post.updated}
        status={post.status}
      />
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
