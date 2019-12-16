import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Contact from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioDashboard from '../components/PortfolioDashboard';
import Home from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={PortfolioDashboard} />
        <Route path="/work/:id" component={PortfolioPage} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
