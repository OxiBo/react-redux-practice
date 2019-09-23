export const multiply = () => {
    return {
        type: "MULTIPLY"
    }
}


export const setNum = (num) => {
    return {
        type: "SET_NUM",
        num
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}