import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Typography, Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Layout from '../components/core/Layout';
import { useTitle } from '../hooks';

const Home = () => {
  useTitle('Home');
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      </Box>
    </Container>
  );
};

const routes = [{ title: 'Home', icon: HomeIcon, path: '/', exact: true, component: Home }];

const Index = () => {
  return (
    <Layout routes={routes}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} component={component} exact={exact} path={path} />
        ))}
      </Switch>
    </Layout>
  );
};

export default Index;
