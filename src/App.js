import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  /* auth.onAuthStateChanged is an open subscription and will keep checking for 
  auth state changes (observer) as long as the App component remains mounted. 
  But since it is an open subscription, we also need to close it when the App 
  component gets unmounted because we do not want any memory leaks in our application.
  We will do this with unsubscribeFromAuth */

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
