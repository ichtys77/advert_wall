import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import {Posts} from '../../features/Posts/Posts';
import clsx from 'clsx';

import {connect} from 'react-redux';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, userLogged}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.head}>
      <h1 className={styles.title}>Recent added</h1>
      { userLogged === true
        ?
        <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/post/add'} activeClassName='active'>Add new</Button>
        :
        ''
      }
    </div>
    <Posts/>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  userLogged: state.userLogged,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
