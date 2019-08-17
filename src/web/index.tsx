import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import rootRoute from './routes/index';
import Banner from './components/banner';
function App(){
    return (
        <div>
            <Banner></Banner>
            <div>
            <React.Suspense fallback={
                <div className="text-danger">
                    loading
                </div>
            }>
                <Switch>
                    {/* { rootRoute.map((item) => {
                        {item}
                        
                    }) }     */}
                    {rootRoute}
                </Switch>
            </React.Suspense>
            </div>
            hellosdfas
        </div>
        
    );
}
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));