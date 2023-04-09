import Axios from "./Axios"
import { toast } from "react-toastify"
import { Navigate } from "react-router-dom"

// Login API Call
export const doLogin = (data) => {

    return  Axios.post("/auth/login", data)
      .then((response) => {
        console.log(response)
        if (response.status >= 200 && response.status < 300){
          const UserData = response.data 
          localStorage.setItem("user", JSON.stringify(UserData))
          return "SUCCESS"
        }
        return response.data.message
      })
      .catch((error) => {
        if (error.message == "Request failed with status code 401"){
          if (error.response.data.error.message == 'User not verified, Please verify your email first'){
            return "verify"
          }
        }
        return error.response.data.error.message
      })
  }


  // Register API Call
  export const doRegister = (data) => {

    console.log(data)
    
    return Axios.post("/auth/register", data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300){
          return "SUCCESS"
        }
        return response.error.message
      })
      .catch((error) => {
        if (error.message == "Request failed with status code 400"){
          return "Email/Password is incorrect"
        }
        else if (error.message == "Request failed with status code 401"){
          return "Email/Password is incorrect"
        }
        else if (error.message == "Request failed with status code 404"){
          return "User Not Found"
        }
        return error.message
      })
  }