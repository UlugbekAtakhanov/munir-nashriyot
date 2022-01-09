const reducer = (state, action) => {
    if (action.type === "GETTING_YANGILIKLAR") {
        return {...state, yangiliklar: action.data,}
    }
    if (action.type === "GET_SPEC_YANGI_KITOB") {
        return {...state, specYangilik: action.yangiKitob}
    }

    return state
}

export default reducer
