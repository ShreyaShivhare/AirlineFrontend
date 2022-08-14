import axios from "axios";

const API_URL = 'http://localhost:8085/airline/api/user/search_flight';

class SearchService {s

    searchFligthByParams(departureAirport, arrivalAirport, departureDate) {
        // alert("hello");
        return axios.get(API_URL+'/'+departureAirport+'/'+arrivalAirport+'/'+departureDate);
    }
}



export default new SearchService();