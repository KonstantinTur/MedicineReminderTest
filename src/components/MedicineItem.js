import React, { Component } from "react";
import "../css/MedicineItem.css";

class MedicineItem extends Component {
  render() {
    return (
      <div key={this.props.id} className="MedicineItem">
        <p className="ItemTitle">{this.props.title}</p>
        <p className="ItemDate">{this.props.time}</p>
        <img
          alt=""
          className="DeleteItem"
          src="https://static.thenounproject.com/png/236306-200.png"
          onClick={this.props.deleteMedicine}
        />
      </div>
    );
  }
}

export default MedicineItem;
