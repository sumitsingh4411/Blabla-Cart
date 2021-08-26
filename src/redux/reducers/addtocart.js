

let initialstate = [];

const addtocart = (state = initialstate, action) => {
    const mydata = { name: action.name, imgsrc: action.imgsrc };
    switch (action.type) {
        case "ADDTOCART":
            {
            console.log(initialstate)
            initialstate.push(mydata);
            console.log(initialstate)
            return state=initialstate;
            }

        default:
            return state;
    }

}

export default addtocart;