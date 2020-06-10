import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../../features/Announcement/Announcement';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const Component = ({posts, match, userLogged}) => {

  console.log('posts', posts);
  const postId = match.params.id;
  console.log(postId);
  const post = posts.find(item => item._id === postId);

  console.log('post', post);
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h1 className={styles.title}>Details</h1>
      </div>
      <Announcement
        title={post.title}
        text={post.text}
        author={post.author}
        id={post._id}
        created={post.created}
        updated={post.updated}
        status={post.status}
      />

      { userLogged === true
        ?
        <div className={styles.editButton}>
          <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + `/post/${post._id}/edit`} activeClassName='active'>Edit</Button>
        </div>
        :
        ''
      }

    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  userLogged: state.userLogged,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};
