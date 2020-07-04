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
        return fetch(`${this.apiUrl}/is_logged_in`, { credentials: 'include' })
        .then((r) => {
            return r.status === 200;
        })
    }
}


export default ApiService;