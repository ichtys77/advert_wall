import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux.js';

import styles from './Posts.module.scss';
import {Link} from 'react-router-dom';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;

    fetchPublishedPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={styles.root}>
        {posts.map(post =>(
        // eslint-disable-next-line react/jsx-key
          <Link key={post.id} to={`/post/${post.id}`} className={styles.link}>
            <Announcement
              name={post.title}
              description={post.text}
              published={post.created}
              updated={post.updated}
              email={post.author}
              status={post.status}
              id={post._id}
            />
          </Link>
        ))}
      </div>
    );

  }
}



Component.propTypes = {
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
