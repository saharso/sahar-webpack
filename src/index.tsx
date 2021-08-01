import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import './style.scss';

function sep(){
  return <>&nbsp;|&nbsp;</>
}
function Nav(){
    return <nav>
      <Link to="/">Home</Link> {sep()} 
      <Link to="/with-lodash">With Lodash</Link> {sep()} 
      <Link to="/with-css">With Css</Link>
    </nav>
}
function Home(){
  return <>
    <h1>Welcome</h1>
  </>
}
const WithLodash = React.lazy(() => import('./components/withLodash/WithLodash.component.jsx'));
const WithCss = React.lazy(() => import('./components/withCss/withCss.component.jsx'));
const Loader = ()=> <div>loading...</div>

const appRouting = (
  <>
  <BrowserRouter basename="/">
    <Nav/>
    <Switch>
      <Route exact path="/" render={Home} />
      <Route path="/with-lodash" render={()=><Suspense fallback={<><Loader/></>}><WithLodash/></Suspense>} />
      <Route path="/with-css" render={()=><Suspense fallback={<><Loader/></>}><WithCss/></Suspense>} />
    </Switch>
  </BrowserRouter>
  </>
);

ReactDOM.render(appRouting, document.getElementById("root"));