const initalState = {
    fuga : 1
}

export default function reducer(state = initalState, action) {
    switch(action.type) {
        case "TEST":
            return { fuga : state.fuga + 1 }
        default:
            return state
    }
}