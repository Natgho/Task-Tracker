import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({title, showAdd, setShowAdd}) => {
    const onClick = () => {
        setShowAdd(!showAdd)
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? "red": "green"} text={showAdd ? "Close": "Add"} onClick={onClick}/>
        </header>

    );
};

Header.propTypes = {
    title: PropTypes.string
};
Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header;