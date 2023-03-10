import Card from "./Card";
import {useContext, useEffect, useState} from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import ReviewContext from "../context/ReviewsContext";

// let id = 100;
function ReviewForm() {

    const [text, setText] = useState("");
    const [message, setMessage] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);

    const { addReview, reviewEditState, updateReview } = useContext(ReviewContext);

    useEffect(function () {
        if (reviewEditState.edit === true) {
            setBtnDisabled(false)
            setText(reviewEditState.item.text)
            setRating(reviewEditState.item.rating)
        }
    }, [reviewEditState]);


    const handleMessage = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage( <div className="message">
                Review must be at least 10 characters
                </div>
            )
        } else {
            setMessage(null);
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length >= 10) {

            const newReview = {
                // id: id++,
                text: text,
                rating: rating,
            }
            if (reviewEditState.edit === true) {
                updateReview(reviewEditState.item.id, newReview);
                reviewEditState.edit = false;
            } else {
                addReview(newReview);
            }
            setText("");
        }
    }

    return (
        <Card>
            <div className="service">
                How would you rate our service with us?
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <RatingSelect select={(rating) => {
                        setRating(rating);
                    }}/>
                </div>

                <div className="form-border form-wrapper">
                    <input onChange={handleMessage} value={text} type="text" placeholder="Write a review" required className="input"/>
                    <Button type="submit" version='secondary'  isDisabled={btnDisabled}
                    >Submit</Button>
                </div>
            </form>
                {message !== "" ? <div> {message} </div> : ""}
        </Card>
    )
}

export default ReviewForm;