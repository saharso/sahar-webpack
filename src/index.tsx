import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import './style.scss';

function Nav(){
    return <nav>
      <Link to="/">go home</Link>
      &nbsp;
      <Link to="/another">go somewhere else</Link>
    </nav>
}
function Home(){
  return <>
    <h1>Welcome</h1>
  </>
}
const WithLodash = React.lazy(() => import('./WithLodash.jsx'));
const Loader = ()=> <div>loading...</div>

const appRouting = (
  <>
  <HashRouter>
    <Nav/>
    <Switch>
      <Route exact path="/" render={Home} />
      <Route path="/another" render={()=><Suspense fallback={<><Loader/></>}><WithLodash/></Suspense>} />
    </Switch>
  </HashRouter>
  </>
);

ReactDOM.render(appRouting, document.getElementById("root"));