import './App.css';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
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
            <Route exact path="/placeorder/:serviceId" >
              <PlaceOrder></PlaceOrder>
            </Route>
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
          <Footer></Footer>
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
