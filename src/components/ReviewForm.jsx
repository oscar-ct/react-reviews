import Card from "./Card";
import {useState} from "react";

function ReviewForm() {

    const [text, setText] = useState();

    return (
        <Card>
            <div className="service">
                How would you rate our service with us?
            </div>
            <form className="form-wrapper">
                <div className="form-border">
                    <input value={text} type="text" placeholder="Write a review" required className="input"/>
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>

        </Card>
    )
}

export default ReviewForm;