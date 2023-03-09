import {Link} from "react-router-dom"

function AboutLink() {
    return (
        <div className="about-link-wrapper">
            <Link className="about-link" to="/about">About</Link>
        </div>
    )
}

export default AboutLink;