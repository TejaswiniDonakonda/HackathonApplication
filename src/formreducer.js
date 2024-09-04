const FormData = (state = [], action) => {
    switch (action.type) {
        case "newchallenge":
            return [...state, action.formdata];
        case "editchallenge":
            return state.map((challenge, index) =>
                index === action.index ? { ...challenge, ...action.updatedData } : challenge
            );
        case "removechallenge":
            return state.filter((_, index) => index !== action.index);
        default:
            return state;
    }
};

export default FormData;

