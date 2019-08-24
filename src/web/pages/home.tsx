import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const { useState, useEffect } = React;
import { indexRoute} from '../routes/index';
import HomeBanner from '../components/homebanner';

const Home =()=> {
    useEffect(() => {
        document.title = "首页";
    });
    return (
        <>
            <HomeBanner></HomeBanner>
            <React.Suspense fallback={
                <div className="text-danger">
                    loading
                </div>
            }>
                <Switch>
                    {indexRoute.map(({name, path,  component}) => (
                        <Route path={path} component={component} key={name}></Route>
                    ))}
                    </Switch>
            </React.Suspense>
            
        </>
    
    );
}
export default Home;