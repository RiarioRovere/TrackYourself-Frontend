import {createRenderer} from "react-dom/test-utils";

class ApiService {
    constructor() {
        this.apiUrl = 'http://api.trackyourself.io'
    }

    getSignals = () => {
        return [
            {
                name: 'sleep',
                value: 3.
            }
        ]
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
        return true;
        // return fetch(`${this.apiUrl}/is_logged_in`, { credentials: 'include' })
        // .then((r) => {
        //     return r.status === 200;
        // })
        // .catch(error => console.log(error))
    }
}


export default ApiService;