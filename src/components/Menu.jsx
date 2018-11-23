import React from 'react';
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="container pl-0 pr-0 h-100 bg-secondary border-right border-dark ">
      <table className="text-justify w-100 text-dark">
        <tbody>
          <MenuItem path="Home" lastEntry={false}/>
          <MenuItem path="Entries" lastEntry={false}/>
          <MenuItem path="About" lastEntry={true}/>
        </tbody>
      </table>
    </div>
  )
};

export default Menu;