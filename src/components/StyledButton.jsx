import React from "react";
import PropTypes from 'prop-types';

const StyledButton = ({buttonText, faIcon, buttonFunction}) => {

  return (
  <button onClick={buttonFunction} className="text-left bg-transparent text-light w-100 Inline-Button">
    <i className={faIcon + " fas pl-2 pr-2 pt-3 pb-3"}/>
    {buttonText}
  </button>
  )
};

StyledButton.propTypes = {
  buttonText: PropTypes.string,
  faIcon: PropTypes.string,
  buttonFunction: PropTypes.func
};

export default StyledButton;