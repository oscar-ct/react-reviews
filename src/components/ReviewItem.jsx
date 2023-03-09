import PropTypes from "prop-types";
import Card from "./Card";
import {FaTimes, FaEdit} from "react-icons/fa";
import {useContext} from "react";
import ReviewContext from "../context/ReviewsContext";


function ReviewItem( {item} ) {

    const { deleteReview } = useContext(ReviewContext);

    const handleDelete = () => {
        deleteReview(item.id);
    }

    return (
        <>
            <div className="rating-display">{item.rating}</div>
            <Card>
                <div className="crud-wrapper">
                    <button className="icn" onClick={() => alert("hey")}>
                        <FaEdit  color="purple" />
                    </button>
                    <button className="icn" onClick={handleDelete}>
                        <FaTimes color="red" />
                    </button>

                </div>
                <div className="review-display">{item.text}</div>

            </Card>
        </>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ReviewItem;