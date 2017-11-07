import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

import PostsList from "./components/PostsList";
import PostDetails from "./components/PostDetails";
import EditPostPage from "./components/EditPostPage";
import AddPostPage from "./components/AddPostPage";
import Nav from "./components/Nav";

//Middleware
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/posts/new" component={AddPostPage} />
          <Route path="/posts/edit/:id" component={EditPostPage} />
          <Route path="/:category/:id" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
