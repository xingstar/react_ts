import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import rootRoute from './routes/index';
import Banner from './components/banner';
import Footer from './components/footer';
// import 'antd/dist/antd.css';
import './assets/css/index.css';

function App(){
    return (
        <>
            <Router>
                
                <div className="main">
                    <React.Suspense fallback={
                        <div className="text-danger">
                            loading
                        </div>
                    }>
                        <Switch>
                            {/* {rootRoute} */}
                            {rootRoute.map((r,index) => {
                                const {name, path, auth, component,exact} = r;
                                console.log('component', component);
                                const LaComponent:any= component;
                                const isLogin = localStorage.getItem('rrname');
                                return (
                                    // <Route path={path} component={component} key={name} exact={exact}></Route>
                                    <Route path={path}
                                        key = {name}
                                        exact = {exact}
                                        render ={props => {
                                            console.log('LaComponent',LaComponent)
                                            debugger;
                                            return (
                                                !auth ?
                                                ( <LaComponent {...props} /> )
                                                :
                                                isLogin ?
                                                (<LaComponent {...props} />)
                                                :
                                                (
                                                    <Redirect
                                                      to={{
                                                        pathname: "/login",
                                                        state: { from: props.location }
                                                      }}
                                                    />
                                                  )
                                            )
                                         }
                                        }></Route>
                                )
                            })}
                        </Switch>
                    </React.Suspense>
                </div>
            </Router>
            <Footer></Footer>
        </>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));