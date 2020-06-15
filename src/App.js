import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAll, fetchPublished } from '../src/redux/postsRedux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { MyPosts } from './components/features/MyPosts/MyPosts';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

class Component extends React.Component {

  static propTypes = {
    posts: PropTypes.array,
    fetchPublished: PropTypes.func,
  };

  componentDidMount() {
    const { fetchPublished } = this.props;
    fetchPublished();
  }

  render() {
    return (
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/myposts' component={MyPosts} />
                <Route exact path='/post/add' component={PostAdd} />
                <Route exact path='/post/:id' component={Post} />
                <Route exact path='/post/:id/edit' component={PostEdit} />
                <Route path='*' component={NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublished: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as App };
