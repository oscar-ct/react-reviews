import {createContext, useState, useEffect} from "react";


const ReviewContext = createContext();

export const ReviewProvider = function ( {children} ) {

    ////  State  /////
    const [reviews, setReviews] = useState([]);
    const [reviewEditState, setReviewEditState] = useState({
        item: {},
        edit: false
    });
    const [isLoading, setIsLoading] = useState(true);


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
                setIsLoading(false);
            });
    }


    const addReview = async (newReview) => {
        const response = await fetch("http://localhost:5000/reviews/", {
            method: "POST",
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();
        // / replaced newReview with data
        setReviews([data, ...reviews])
    }

    const deleteReview = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {

            await fetch("http://localhost:5000/reviews/" + id, {
                method: "DELETE",
            });

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

    const updateReview = async (id, updItem) => {

        const response = await fetch("http://localhost:5000/reviews/" + id, {
            method: "PUT",
            body: JSON.stringify(updItem),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.json();

        setReviews(reviews.map(function (item) {
            if (item.id === id) {
                // replaced updItem with data from json server
                return { ...item, ...data }
            } else {
                return item;
            }
        }));
    }

    return <ReviewContext.Provider
    value={{reviews, addReview, deleteReview, reviewEditState, editReview, updateReview, isLoading}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext