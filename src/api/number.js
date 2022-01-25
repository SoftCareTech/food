import axios from "axios";
export default axios.create({
    baseURL: 'https://learn-numbers.herokuapp.com/v2/words'
    , headers: { 'Content-Type': 'application/json', }
})

