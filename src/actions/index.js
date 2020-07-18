const fetchAccessToken = (apiService, username, password) => {
    return function(dispatch) {
        const request = {username: username, password}
        fetch(`${apiService.apiUrl}/user/authenticate`, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(v => {
            localStorage.setItem('token', v.token)
            window.location.reload(false);
            dispatch({
                type: 'ACCESS_TOKEN_FETCHED',
                value: v.token
            })
        })
        .catch(e => console.warn(e))
    }
}

const fetchSignals = (apiService) => {
    return function(dispatch) {
        apiService.getSignals().then((signals) => {
                dispatch({
                    type: 'SIGNALS_FETCHED',
                    value: signals
                })
            }
        )
    }
}


export {fetchAccessToken, fetchSignals}