
import {useContext} from "react";
import ReviewContext from "../context/ReviewsContext";

function ReviewStats () {
    const { reviews } = useContext(ReviewContext);

    let average = reviews.reduce(function(acc, cur) {
        return acc + cur.rating / reviews.length;
    }, 0);

    average = average.toFixed(1).replace(/[.,]0$/, '');


    return (
        <div className="review-stats">
            <div>Avg Ratings: {average}</div>
            <div>Ratings: {reviews.length}</div>
        </div>
    )
}

export default ReviewStats;