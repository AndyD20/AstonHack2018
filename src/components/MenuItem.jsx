import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const isActive = (location, lastElem) => {
  let returnVal = "";
  if (window.location.pathname === location) {
    returnVal = "table-active";
  }

  if(!lastElem){
    returnVal += " border-bottom border-dark"
  }
  return returnVal;
};

const MenuItem = ({path, lastEntry}) => {
  return (
    <tr className={isActive("/" + path, lastEntry)}>
      <td>
        <Link to={"/" + path} className="mw-100 text-light pl-3 pb-3 pt-3 Menu-Item">{path}</Link>
      </td>
    </tr>
  )
};

MenuItem.propTypes = {
  path: PropTypes.string,
  lastEntry: PropTypes.bool
};

export default MenuItem;