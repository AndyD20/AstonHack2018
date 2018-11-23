import React, { Component } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : "",
      short: "",
      content: "",
      changeMade: false
    };

    this.setTitle = this.setTitle.bind(this);
    this.setShort = this.setShort.bind(this);
    this.setContent = this.setContent.bind(this);
  }


  updateDatabase(){

  }

  changeMade = () => this.setState({changeMade: false});

  setTitle(val) {
    this.setState({title: val.target.value});
    this.changeMade();
  }

  setShort(val) {
    this.setState({short: val.target.value});
  }

  setContent(val) {
    this.setState({content: val.target.value});
  }

  render() {
    return (
      <div className="bg-dark w-100 h-100">
        <form className="h-100">
          <div className="d-flex flex-column h-100">
            <textarea value={this.state.title} onChange={this.setTitle} placeholder="Title" className="bg-transparent text-light form-control"/>
            <textarea value={this.state.short} onChange={this.setShort} placeholder="Short Description" className="bg-transparent text-light form-control"/>
            <textarea value={this.state.contents} onChange={this.setContent} placeholder="Entry Contents" className="bg-transparent text-light form-control h-100"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Entry;