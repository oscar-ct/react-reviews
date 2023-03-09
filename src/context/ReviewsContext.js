import {createContext, useState} from "react";

const ReviewContext = createContext();

export const ReviewProvider = function ( {children} ) {

    const [reviews, setReviews] = useState([
        {
            id: 1,
            text: "This app is awesome! Great Work.",
            rating: 8
        },
        {
            id: 2,
            text: "Love the app",
            rating: 7
        },
        {
            id: 3,
            text: "Would buy again, highly recommend",
            rating: 10
        }
    ]);

    const addReview = (newReview) => {
      setReviews([newReview, ...reviews])
    }

    return <ReviewContext.Provider
    value={{reviews, addReview}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext