import React from "react";

export class CardClass extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="name">{this.props.name}</h2>
        <div className="body">
          <div className="label">Age:</div>
          <div>{this.props.age}</div>
          <div className="label">Phone:</div>
          <div>{this.props.phoneNumber}</div>
          <div className="label">Address:</div>
          <div>{this.props.address}</div>
          <p style={{ fontSize: "10px" }}>This is a Class Component</p>
        </div>
      </div>
    );
  }
}
