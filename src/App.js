import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import RegisterEvent from './components/RegisterEvent/RegisterEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import RegisteredEvents from './components/RegisteredEvents/RegisteredEvents';
import Donation from './components/Donation/Donation';
import Blog from './components/Blog/Blog';
import AdminPannel from './components/AdminPannel/AdminPannel';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/donation">
            <Donation />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/admin">
            <AdminPannel />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
          <PrivateRoute path="/register">
            <RegisterEvent />
          </PrivateRoute>
          <PrivateRoute path="/events">
            <RegisteredEvents />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
