import axios from "axios";
const API_URL = ' http://localhost:8085/airline/api/login_user'; //url for user login
const API_URL1 = ' http://localhost:8085/airline/api/register_user'; //url for user registration
const API_URL2 = ' http://localhost:8085/airline/api/admin_login'; // url for admin login
const API_URL3=' http://localhost:8085/airline/api/payment';
// const API_URL1 = ' http://localhost:8085/airline/api/register_users';


  class AuthenticationService{
    loginUser(user)
    {
        return axios.post(API_URL , user);
    }
    registerUser(user){
        return axios.post(API_URL1, user);
     }

     adminLogin(adm){
      return axios.post(API_URL2, adm)
     }

     paymentDealer(payment){
      return axios.post(API_URL3, payment);
     }
    }
//create an object of Authentication service
export default new AuthenticationService();


