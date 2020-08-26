import React from 'react';
import PagesContainer from "./components/pages/PagesContainer";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";


function App() {
 console.log()
 return (
  <>
   <BrowserRouter>
    <Provider store={store}>

     <p><NavLink to='/'>Home</NavLink></p>
     <p><NavLink to='/user/basic'>/user/basic</NavLink></p>
     <p><NavLink to='/user/options'>/user/options</NavLink></p>
     <p><NavLink to='/eeee'>Error404</NavLink></p>

     <Switch>
      <Route exact path='/'
             render={() => <Home/>}/>
      <Route exact path='/user/basic'
             render={() => <PagesContainer routeText='/user/basic'/>}/>
      <Route exact path='/user/options'
             render={() => <PagesContainer routeText='/user/options'/>}/>
      <Route path='*'
             render={() => <Error404/>}/>}/>
     </Switch>

    </Provider>
   </BrowserRouter>
  </>
 );
}

export default App;
