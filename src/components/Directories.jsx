import React from 'react';
import DirectoryEntry from "./DirectoryEntry";
import StyledButton from "./StyledButton";

const Directories = () => {
  return (
    <div className="container pl-0 pr-0 h-100 bg-secondary">
      <table className="text-justify w-100 text-dark">
        <thead>
        <tr className="border-bottom border-dark text-light">
          <th className="font-weight-light">
            <StyledButton buttonText="Add new directory" faIcon="fa-plus"/>
          </th>
        </tr>
        </thead>
        <tbody>
          <DirectoryEntry entryText="Locations" isActive={true}/>
          <DirectoryEntry entryText="Characters" isActive={false}/>
          <DirectoryEntry entryText="Items" isActive={false}/>
        </tbody>
      </table>
    </div>
  )
};

export default Directories;