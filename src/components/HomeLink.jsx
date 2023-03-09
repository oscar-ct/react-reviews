import {Link} from "react-router-dom";

function HomeLink() {
    return (
        <div className="about-link-wrapper">
            <Link className="about-link" to="/">Return Home</Link>
        </div>
    )
}
export default HomeLink;