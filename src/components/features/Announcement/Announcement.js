import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Announcement.module.scss';

const Component = ({id, name, description, email, published, updated, status}) => (
  <div className={styles.root}>
    <Link to={`/post/${id}`} className={styles.link}>
      <Card  className={styles.item}>
        <CardContent>
          <Typography
            variant="h5"
            color="primary"
            paragraph = {true}
          >
            {name}
          </Typography>
          <Typography className={styles.info}>published: {published}</Typography>
          <Typography className={styles.info}>last edit: {updated}</Typography>
          <Typography className={styles.info}>status: {status}</Typography>
          <Typography
            paragraph = {true}>
            {description}
          </Typography>
          <div className={styles.footer}>
            <Typography>{email}</Typography>

            <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + `/post/${id}/edit`}> Edit </Button>

          </div>

        </CardContent>
      </Card>
    </Link>
  </div>
);

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
  userLogged: PropTypes.bool,
  published: PropTypes.string,
  updated: PropTypes.string,
  mail: PropTypes.string,
  status: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Announcement,
  // Container as Announcement,
  Component as AnnouncementComponent,
};
