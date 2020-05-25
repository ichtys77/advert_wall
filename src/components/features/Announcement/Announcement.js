import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Announcement.module.scss';

const Component = ({id, name, description, phone}) => (
  <div className={styles.root}>
    <Link to={`/post/${id}`} className={styles.link}>
      <Card  className={styles.item}>
        <CardContent>
          <Typography
            variant="h4"
            color="primary"
            paragraph ="true"
          >
            {name}
          </Typography>
          <Typography
            paragraph ="true">
            {description}
          </Typography>
          <div className={styles.footer}>
            <Typography>{phone}</Typography>
            <Button to={process.env.PUBLIC_URL + `/post/${id}/edit`}> Edit </Button>
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
  phone: PropTypes.number,
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
