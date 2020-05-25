import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PageNav.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <nav className={styles.component}>
      <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/login'} activeClassName='active'>Login</Button>
      <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/logout'} activeClassName='active'>Logout</Button>
    </nav>
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
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent,
};
