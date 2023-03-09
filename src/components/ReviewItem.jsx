import PropTypes from "prop-types";
import Card from "./Card";


function ReviewItem( {item} ) {
    return (
        <>
            <Card>
                <div className="rating-display">{item.rating}</div>
                <div className="review-display">{item.text}</div>
            </Card>
        </>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ReviewItem;