import {createContext, useState, useEffect} from "react";


const ReviewContext = createContext();

export const ReviewProvider = function ( {children} ) {

    const [reviews, setReviews] = useState([]);

    const [reviewEditState, setReviewEditState] = useState({
        item: {},
        edit: false

    });


    useEffect(function () {
        fetchData();
        // fetchReviews();
    }, []);

    // const fetchReviews  = async () => {
    //     const response = await fetch("http://localhost:5000/reviews?_sort=id&_order=desc");
    //     const data = await response.json();
    //     setReviews(data)
    //     console.log(data);
    // }

    const fetchData = () => {
        fetch("http://localhost:5000/reviews?_sort=id&_order=desc")
            .then(async function (response) {
                const data = await response.json();
                setReviews(data);
        });
    }


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