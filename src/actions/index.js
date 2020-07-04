const inc = () => {
    return {
        type: 'INC',
        value: 1
    }
}

const dec = () => {
    return {
        type: 'DEC',
        value: 1
    }
}

export {inc, dec}