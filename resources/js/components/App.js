import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, HashRouter } from 'react-router-dom'

import Header from './layouts/Header';
import SidebarNav from "./layouts/SidebarNav";
import Dashboard from './Dashboard';
import Test from './Test';
import Cattle from './cattle/Cattle';
import MilkTally from './milkTally/MilkTally';



const App = () => {



    return (


        <BrowserRouter>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 g-0 bg-secondary">
                        <SidebarNav />
                    </div>

                    <div className="col-11 g-0">


                        <Switch>
                            <Route path='/test' component={Test} />
                            <Route exact path='/dashboard' component={Dashboard} />
                            <Route exact path='/cattle' component={Cattle} />
                            <Route exact path='/milktally' component={MilkTally} />



                        </Switch>



                    </div>
                </div>
            </div>




        </BrowserRouter>
    );
}

export default App;


if (document.getElementById('main-app')) {
    ReactDOM.render(<App />, document.getElementById('main-app'));
}

