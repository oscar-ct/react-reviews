import {useContext} from "react";
import ReviewContext from "../context/ReviewsContext";
import Card from "./Card";

function ReviewList() {

    const {reviews} = useContext(ReviewContext);

    if (!reviews || reviews.length === 0) {
        return <div>Be the first to review!</div>
    }
    return (
        <div>
            {reviews.map(function (review) {
                return (
                    <Card>
                        <div>{review.text}</div>

                    </Card>
                )
            })}
        </div>

    )

}

export default ReviewList;