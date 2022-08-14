import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faEdit,faCamera,faList } from "@fortawesome/free-solid-svg-icons";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import AdLogin from './components/AdLogin';
import Flights from './components/Flights';
import User from './components/User';
import ViewUser from'./components/ViewUser';
import ViewFlight from'./components/ViewFlight';
import CreateFlight from './components/CreateFlight';
import Footer from './components/Footer';
import PassengerList from './components/PassengerList';
// Booking
import FlightDetails from './components/FlightDetails';
import TicketBooking from './components/TicketBooking';
import TicketDetails from './components/TicketDetails';
import UserProfile from './components/UserProfile';
import PaymentPage from './components/PaymentPage';

library.add(faTrash,faEdit,faPlus,faList)


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
     <img src="/images/logo.jpg" className="App-logo" alt="logo"></img>
     <h1>  Sharp Wings  </h1>
      </header>

      <div style={{ backgroundImage: "url(/images/bg2.webp)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    backgroundSize:"cover"
                    }}>

      <Router>
        <Navbar></Navbar>
        <div className='container'>
        <Switch>
        <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>

          <Route path='/admin_login' component={AdLogin}></Route>
          <Route path='/register_user' component={Registration}></Route>
          {/* Flght CRUD  */}
          <Route path='/flights'  component={Flights}></Route>
          <Route path='/viewFlight/:flightId'  component={ViewFlight}></Route> 
         
          <Route path='/addFlight/:flightId'  component={CreateFlight}></Route>

          {/* Booking */}
          {/* added flight id in url */}
          <Route path='/passenger/:flightId' component={PassengerList}></Route>
          <Route path='/fightDetails/:id' component={FlightDetails}></Route>
          <Route path='/booking' component={TicketBooking}></Route>
          <Route path='/pdetails' component={TicketDetails}></Route>
          <Route path='/userProfile' component={UserProfile}></Route>
          <Route path='/payment'  component={PaymentPage}></Route>
          
          
          
          
          <Route path='/user'  component={User}></Route>
          <Route path='/viewUser/:flightId'  component={ViewUser}></Route>
        </Switch>
        </div>
      </Router>
    </div>
    <footer className="Footer">
        <Footer></Footer>

      </footer> 
    </div>
  );
}

export default App;
