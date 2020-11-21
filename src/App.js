import React from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router';
import { HashRouter } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import Service from './components/Service';

import PhuaInfo from './components/PhuaInfo';
import infoMs from './components/pages/Info/infoMs';
import DVC from './components/pages/Info/DVC';
import ike from './components/pages/Info/ike';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import update from './components/Update';
import About from './components/aboutUs/about';
import facilities from './components/facilities';
import research from './components/research';
import computing from './components/computing';
import alumni from './components/Alumni';
import compstu from './components/studys/compstu';
import useng from './components/studys/useng';
import master from './components/studys/master';
import DnM from './components/DnM';
import UpdateStaff from './components/UpdateStaff';
import comingsoon from './components/comingsoon';


  



function App()


{
  return(
    <HashRouter  >
      <Navbar />
      <Switch>
     
        <Route exact path={["/", "/home"]} component={Home}/>
        <Route path='/Staff/:id' component={PhuaInfo}/>
        <Route path='/updateStaff/:id' component={UpdateStaff}/>
        <Route path='/service' component={Service}/>
        
        <Route path='/foong' component={infoMs}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/update/:id" component={update} />
        <Route exact path="/about" component={About} />
        <Route exact path="/fac" component={facilities} />
        <Route exact path="/research" component={research} />
        <Route exact path="/computing" component={computing} />
        <Route exact path="/alumni" component={alumni} />
        <Route exact path="/compstu" component={compstu} />
        <Route exact path="/useng" component={useng} />
        <Route exact path="/master" component={master} />
        <Route path="/dvc" component={DVC} />
        <Route path="/ike" component={ike} />
        <Route path="/DnM" component={DnM} />
        <Route path="/cs" component={comingsoon} />
     
      </Switch>
      <Footer />
    </HashRouter>
  );
  
}

export default App;
