import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { PageNav } from '../../layout/PageNav/PageNav';

import styles from './Header.module.scss';
import { Container } from '@material-ui/core';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar className = {styles.component}>
      <Container>
        <Toolbar disableGutters>
          <PageNav/>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar/>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
