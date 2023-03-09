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
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi. Amet dictum sit amet justo donec enim diam vulputate ut. Molestie nunc non blandit massa enim.",
            rating: 7
        },
        {
            id: 3,
            text: "Would buy again, highly recommend",
            rating: 10
        }
    ]);

    const [reviewEditState, setReviewEditState] = useState({
        item: {},
        edit: false

    });

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


    const editReview = (item) => {
        setReviewEditState({
            item: item,
            edit: true
        });
    }

    const updateReview = (id, updItem) => {
        setReviews(reviews.map(function (item) {
            if (item.id === id) {
                return { ...item, ...updItem }
            } else {
                return item;
            }
        }));
    }

    return <ReviewContext.Provider
    value={{reviews, addReview, deleteReview, reviewEditState, editReview, updateReview}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext