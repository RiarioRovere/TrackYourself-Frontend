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

    addSignalName = (name) => {
        return fetch(`${this.apiUrl}/signal-name`, {
            method: 'POST',
            body: JSON.stringify({name}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
    }

    deleteSignalName = (name) => {
        return fetch(`${this.apiUrl}/signal-name`, {
            method: 'DELETE',
            body: JSON.stringify({name}),
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
            return r.json();
        })
        .catch(error => console.log(error))
    }

    getSignalNames = () => {
        return fetch(`${this.apiUrl}/signal-name`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.json();
            })
            .then(r => {
                return r.map(({name}) => name);
            })
            .catch(error => console.log(error))
    }

    getGoals = () => {
        return fetch(`${this.apiUrl}/goals`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.json();
            })
            .catch(error => console.error(error))
    }

    getSummary = (date) => {
        console.log('date', date)
        return fetch(`${this.apiUrl}/summary?date=${date}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.text();
            })
            .then(r => {
                if (r) {
                    return JSON.parse(r);
                }
                return {
                    summary: ''
                }
            })
            .then(({summary}) => summary)
            .catch(error => console.warn(error))
    }

    saveSummary = (summary, date) => {
        console.log('date summary', date, summary)
        return fetch(`${this.apiUrl}/summary`, {
            method: 'POST',
            body: JSON.stringify({summary, date}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.json();
            })
            .then(({summary}) => summary)
            .catch(error => console.log(error))
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

    fetchInsight = (id) => {
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

    getGoal = (id) => {
        return fetch(`${this.apiUrl}/goal/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.json();
            })
            .catch(error => console.error(error))
    }

    getReports = (id) => {
        return fetch(`${this.apiUrl}/goal/${id}/reports`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then((r) => {
                return r.json();
            })
            .catch(error => console.error(error))
    }

}


export default ApiService;