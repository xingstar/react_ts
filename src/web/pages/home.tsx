import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch, RouteComponentProps } from "react-router-dom";
const { useState, useEffect } = React;
import { indexRoute} from '../routes/index';
import HomeBanner from '../components/homebanner';
import Banner from '../components/banner';
import { observer, useObservable, useObserver } from "mobx-react-lite";

const Home =()=> {
    console.log('home渲染');
    useEffect(() => {
        document.title = "首页";
    });
    return (
        useObserver(() => (
            <>
                <Banner></Banner>
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
        ))
        
    );
}
export default Home;