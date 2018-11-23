import React from 'react';
import Directories from "./Directories";
import Entry from "./Entry";

const Entries = () => {
  return (
    <div className="d-flex w-100 h-100">
      <div className="Entry-Directories border-right-0 border-dark">
        <Directories/>
      </div>
      <div className="Entry-Form h-100">
        <Entry/>
      </div>

    </div>
  );
};

export default Entries;