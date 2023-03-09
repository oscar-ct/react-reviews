import {useContext} from "react";
import ReviewContext from "../context/ReviewsContext";
import ReviewItem from "./ReviewItem";

function ReviewList() {

    const { reviews } = useContext(ReviewContext);

    if (!reviews || reviews.length === 0) {
        return <div>Be the first to review!</div>
    }
    return (
        <div>
            {reviews.map(function (review) {
                return (
                    <ReviewItem key={review.id} item={review}/>
                )
            })}
        </div>

    )

}

export default ReviewList;