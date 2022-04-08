import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, HashRouter } from 'react-router-dom'

//import Header from './layouts/Header';
import SidebarNav from "./layouts/SidebarNav";
import Dashboard from './Dashboard';
import Test from './Test';
import Cattle from './cattle/Cattle';
import MilkTally from './milkTally/MilkTally';

import CattleProfile from './cattle/CattleProfile';


import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const App = () => {


    return (
        <>
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>

                    <Sider /*style={{ background: '#292929' }}*/ >
                        <div className="p-3"><img src="/images/kadagaya-w_1.png" style={{ width: '100%' }} /></div>
                        <SidebarNav />
                    </Sider>

                    <Layout>
                        <Header /*style={{ background: '#292929' }}*/></Header>
                        <Content className="p-3" >

                            <Switch>
                                <Route path='/test' component={Test} />
                                <Route exact path='/dashboard' component={Dashboard} />
                                <Route exact path='/cattle' component={Cattle} />
                                <Route exact path='/milktally' component={MilkTally} />
                                <Route exact path='/cattle/profile/:id' component={CattleProfile} />
                            </Switch>

                        </Content>
                        <Footer>kadagaya</Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </>
    );


    /*return (


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
                            <Route exact path='/cattle/profile/:id' component={CattleProfile} />



                        </Switch>



                    </div>
                </div>
            </div>




        </BrowserRouter>
    );*/
}

export default App;



if (document.getElementById('main-app')) {
    ReactDOM.render(<App />, document.getElementById('main-app'));
}

