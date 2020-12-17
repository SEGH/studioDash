const initState = {
    articles: [
        {id: 1, title: "First Post", body: "Stuff to say"},
        {id: 2, title: "Second Post", body: "More stuff to say"}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer