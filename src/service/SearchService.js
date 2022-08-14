import axios from "axios";

const API_URL = 'http://localhost:8085/airline/api/user/search_flight';

class SearchService {
    // searchBydepartureAirport() {
    //     let departureAirport = sessionStorage.getItem("departureAirport")
    //     if (departureAirport === null)
    //         return ''
    //     return departureAirport
    // }
    // searchByArrivalAirport() {
    //     let arrivalAirport = sessionStorage.getItem("arrivalAirport")
    //     if (arrivalAirport === null)
    //         return ''
    //     return arrivalAirport
    // }
    // searchByDepartureDate() {
    //     let departureDate = sessionStorage.getItem("departureDate")
    //     if (departureDate === null)
    //         return ''
    //     return departureDate
    // }

    searchFligthByParams(departureAirport, arrivalAirport, departureDate) {
        alert("hello");
        return axios.get(API_URL+'/'+departureAirport+'/'+arrivalAirport+'/'+departureDate);
        // console.log(JSON.stringify(axios.get(API_URL+'/'+departureAirport+'/'+arrivalAirport+'/'+departureDate)));
    }
}



export default new SearchService();