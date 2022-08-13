import axios from 'axios';

 const ADMINS_REST_API_URL='http://localhost:8085/airline/api/admin_login'; 
//  const ADMINS_REST_API_URL='http://localhost:8085/airline/api/admin_login/delete_flight/{flightId}'; 
//  const ADMINS_REST_API_URL='http://localhost:8085/ims/api/products'; 

class AdminService {


    //get all fights
    getFlights(){ //getAdmin
        return axios.get(ADMINS_REST_API_URL+'/all_flights')
    }

    // delete flight by id
    deleteFlight(flightId){ //adminId
        return axios.delete(ADMINS_REST_API_URL+'/delete_flight/'+flightId);
    }

    getFlightById(flightId){ // getFlightById
       
        return axios.get('http://localhost:8085/airline/api/admin_login/all_flights'+'/'+flightId);
    }

    // add flight
    createFlight(flight){ // createAdmin
        alert("Hello")
        return axios.post('http://localhost:8085/airline/api/admin_login/all_flights', flight);
    }
 
    updateFlight(flight, flightId){ //func name = updateFlight second para- flightId
        return axios.put(ADMINS_REST_API_URL +'/update_flight/'+flightId, flight);
    }
}
export default new AdminService();