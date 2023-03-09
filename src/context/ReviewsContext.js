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

    const deleteReview = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setReviews(reviews.filter(function (review) {
                return review.id !== id;
            }));
        }
    }

    return <ReviewContext.Provider
    value={{reviews, addReview, deleteReview}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext