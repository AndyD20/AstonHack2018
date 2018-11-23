import PropTypes from "prop-types";
import React, {Component} from "react";
import StyledButton from "./StyledButton";

class DirectoryEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryText: this.props.entryText,
      isActive: this.props.isActive
    }
  }

  render() {
    return (
      <tr className={this.state.isActive ? "table-active" : ""}>
        <td>
          <StyledButton buttonText={this.state.entryText} faIcon="fa-folder" buttonFunction={() => this.setState({isActive: !this.state.isActive})}/>
        </td>
      </tr>
    )
  }
}

DirectoryEntry.propTypes = {
  entryText: PropTypes.string,
  isActive: PropTypes.bool
};

export default DirectoryEntry;