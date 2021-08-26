

const initialstate = "Electronics";

const choosecategory = (state = initialstate, action) => {

    switch (action.type) {
        case "CATEGORY":
            return state = action.payload;

        default:
            return state;
    }

}

export default choosecategory;