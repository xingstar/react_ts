import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { indexRoute} from '../routes/index';
import HomeBanner from '../components/homebanner';

class Greeting extends React.Component {
    render() {
        return (
            <>
               <HomeBanner></HomeBanner>
                <React.Suspense fallback={
                    <div className="text-danger">
                        loading
                    </div>
                }>
                    <Switch>
                     {/* {
                         indexRoute[0]
                     }
                     {
                         indexRoute[1]
                     } */}
                     {indexRoute.map(({name, path,  component}) => (
                         <Route path={path} component={component} key={name}></Route>
                     ))}
                     </Switch>
                </React.Suspense>
            </>
        
        );
    }
}
export default Greeting;