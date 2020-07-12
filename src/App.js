import React from "react";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componet";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import { Switch, Route } from "react-router-dom";
import { auth, createUserfromAuth } from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserfromAuth(authUser);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser({ currentUser: authUser });
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const dispatchUser = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, dispatchUser)(App);
