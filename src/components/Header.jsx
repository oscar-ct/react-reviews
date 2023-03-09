import PropTypes from "prop-types";


function Header( {title} ) {
    return (
        <div className="header">{title}
        </div>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;