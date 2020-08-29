import React from "react";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.componet";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  auth,
  createUserfromAuth
} from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { currentUserSelector } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckOutPage from "./pages/checkout/checkout.component";
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selector";

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
      setCurrentUser(authUser);

      //CreateCollectionAndDocuments("collections", collectionArray.map(({title, items}) =>({
        //title, items
     // })));
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
          <Route path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  collectionArray: selectShopCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
