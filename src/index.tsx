import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import './style.scss';

function App(){
    return <div><Link to="/another">go somewhere else</Link></div>
}
const Another = React.lazy(() => import('./Another.jsx'));
const Loader = ()=> <div>loading...</div>

const appRouting = (
  <>
  9
  <Suspense fallback={<><Loader/></>}><Another/></Suspense>
  <HashRouter>
    <Switch>
      <Route exact path="/" render={App} />
      <Route path="/another" render={()=><Suspense fallback={<><Loader/></>}><Another/></Suspense>} />
    </Switch>
  </HashRouter>
  </>
);

ReactDOM.render(appRouting, document.getElementById("root"));