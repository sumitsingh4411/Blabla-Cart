let initialstate = '';

const addtocart = (state = initialstate, action) => {
    switch (action.type) {
        case "ADDTOCART":
            initialstate += action.payload + '#';
            return initialstate;
        case "REMOVETOCART":
            let arr = initialstate.split('#').filter(e => e !== action.payload);
            let p = '';
            // eslint-disable-next-line array-callback-return
            arr.map(e => {
                p += e + '#';
            })
            return initialstate = p;
        default:
            return state;
    }

}

export default addtocart;