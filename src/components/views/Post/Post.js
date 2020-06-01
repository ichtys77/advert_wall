import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../../features/Announcement/Announcement';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({posts, match, userLogged}) => {

  const post = posts.data[match.params.id];
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h1 className={styles.title}>Details</h1>
      </div>
      <Announcement
        key={post.id}
        name={post.name}
        description={post.description}
        email={post.email}
        published={post.published}
        updated={post.updated}
        status={post.status}
      />

      { userLogged === true
        ?
        <div className={styles.editButton}>
          <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + `/post/${post.id}/edit`} activeClassName='active'>Edit</Button>
        </div>
        :
        ''
      }

    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts,
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
