

export const categoryType = (category) => {
    return {
        type: "CATEGORY",
        payload: category
    }
}

export const AddtoCart = (name) => {

    return {
        type: "ADDTOCART",
        payload: name
    }
}
export const RemovetoCart = (remove) => {

    return {
        type: "REMOVETOCART",
        payload: remove
    }
}