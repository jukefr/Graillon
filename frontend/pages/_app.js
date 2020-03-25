import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import UserContext from '../components/UserContext';
import withData from '../util/apollo-client';

class MyApp extends App {
  state = {
    user: null
  };

  componentDidUpdate = () => {
    const userIsInLocal = localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'));

    if (userIsInLocal && !this.state.user) {
      this.setState({
        user
      });
    }
    if (!userIsInLocal && this.state.user) {
      this.setState({
        user: null
      })
    }
  }
  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.setState({
        user
      });
    } else {
      this.setState({
        user: null
      })
    }
  };
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (

      <ApolloProvider client={apollo}>
        <UserContext.Provider value={{ user: this.state.user }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);