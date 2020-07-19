import {createRenderer} from "react-dom/test-utils";
import {map} from "react-bootstrap/cjs/ElementChildren";

class ApiService {
    constructor() {
        this.apiUrl = 'https://api.trackyourself.io'
        // this.apiUrl = 'http://localhost:8081';
        this.token = localStorage.getItem('token')
    }

    saveSignals = (signals) => {
        return fetch(`${this.apiUrl}/signals`, {
            method: 'POST',
            body: JSON.stringify(signals),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
    }

    getSignals = () => {
        return fetch(`${this.apiUrl}/signals`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
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
        return fetch(`${this.apiUrl}/signals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
        .then((r) => {
            return r.status !== 401;
        })
        .catch(error => console.log(error))
    }

    getInsight = (id) => {
        switch (id) {
            case 'sport':
                return 'Do sport'
            case 'sleep':
                return 'Sleep well'
            case 'water':
                return 'Drink water'
            case 'meditation':
                return 'Keep calm'
            case 'nutrition':
                return 'Eat well'
            default:
                return 'Be happy'
        }
    }
}


export default ApiService;