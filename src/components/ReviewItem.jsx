import PropTypes from "prop-types";
import Card from "./Card";
import {FaTimes, FaEdit} from "react-icons/fa";


function ReviewItem( {item} ) {
    return (
        <>
            <div className="rating-display">{item.rating}</div>
            <Card>
                <div className="crud-wrapper">
                    <FaEdit className="icn" color="purple" />
                    <FaTimes className="icn" color="red" />
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