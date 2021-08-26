

export const categoryType = (category) => {
    return {
        type: "CATEGORY",
        payload: category
    }
}

export const AddtoCart = (name, imgsrc) => {
    return {
        type: "ADDTOCART",
        name: name,
        imgsrc: imgsrc,
    }
}