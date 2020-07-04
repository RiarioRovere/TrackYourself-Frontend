import {createRenderer} from "react-dom/test-utils";

class ApiService {
    constructor() {
        this.apiUrl = 'http://localhost:8080'
    }

    getSignals = () => {
        return [
            {
                name: 'sleep',
                value: 3.
            }
        ]
    }

    isLoggedIn = () => {
        return fetch('http://localhost:8080/is_logged_in', { credentials: 'include' })
        .then((r) => {
            console.log(r)
            return r.status === 200;
        })
        .catch(error => console.log(error))
    }
}


export default ApiService;