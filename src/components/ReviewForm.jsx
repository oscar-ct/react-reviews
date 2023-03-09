import Card from "./Card";
import {useState} from "react";
import Button from "./Button";

function ReviewForm() {

    const [text, setText] = useState("");
    const [message, setMessage] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(true);



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
        setText(e.target.value)
    }

    return (
        <Card>
            <div className="service">
                How would you rate our service with us?
            </div>
            <form className="form-wrapper">
                <div className="form-border">
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