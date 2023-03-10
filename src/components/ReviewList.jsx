import {useContext} from "react";
import ReviewContext from "../context/ReviewsContext";
import ReviewItem from "./ReviewItem";
import {motion, AnimatePresence} from "framer-motion";

function ReviewList() {

    const { reviews, isLoading } = useContext(ReviewContext);

    if (!isLoading && (!reviews || reviews.length === 0)) {
        return <div>Be the first to review!</div>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <AnimatePresence>
                {reviews.map(function (review) {
                    return (
                        <motion.div key={review.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <ReviewItem key={review.id} item={review}/>
                        </motion.div>
                    )
                })}
                </AnimatePresence>
            </div>

        )
    }

}

export default ReviewList;