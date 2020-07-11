import {createRenderer} from "react-dom/test-utils";
import {map} from "react-bootstrap/cjs/ElementChildren";

class ApiService {
    constructor() {
        this.apiUrl = 'https://api.trackyourself.io'
        // this.apiUrl = 'http://localhost:8080'
    }

    saveSignals = (signals) => {
        return fetch(`${this.apiUrl}/signals`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(signals),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    getSignals = () => {
        return fetch(`${this.apiUrl}/signals`, { credentials: 'include' })
        .then((r) => {
            const js = r.json()
            return js;
        })
        .catch(error => console.log(error))
    }

    getSignalNames = () => {
        return [
            'sleep',
            'sport',
            'nutrition',
            'meditation',
            'life qualiity',
        ]
    }

    isLoggedIn = () => {
        // return true;
        return fetch(`${this.apiUrl}/login`, {
            credentials: 'include',
            // headers: {
            //     'X-Requested-With': 'XMLHttpRequest'
            // }
        })
        .then((r) => {
            return r.status !== 401;
        })
        .catch(error => console.log(error))
    }
}


export default ApiService;