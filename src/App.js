import './App.css';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/DashBoardSection/Dashboard/Dashboard';
import Explores from './Pages/Home/Explores/Explores';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services" >
              <Services></Services>
            </Route>
            <Route exact path="/explores" >
              <Explores></Explores>
            </Route>
            <PrivateRoute exact path="/placeorder/:serviceId" >
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>


    //   <div className="App">
    //   <Router>
    //    <Navigation></Navigation>
    //     <Switch>
    //       <Route exact path="/" component={Home} />

    //       <Route exact path="/services" component={Services} />
    //       <Route exact path="/about" component={AboutUs} />

    //       <Route path="/about">
    //            <AboutUs></AboutUs>
    //       </Route>

    //     </Switch>
    //     <Footer></Footer>
    //   </Router>
    // </div>


  );
}

export default App;
