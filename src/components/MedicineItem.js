import React, { Component } from "react";
import "../css/MedicineItem.css";

class MedicineItem extends Component {
  render() {
    var curHours = this.props.curTime.split(" ")[1].split(":")[0] + 0;
    var curMinutes = this.props.curTime.split(" ")[1].split(":")[1] + 0;
    var itemHours = this.props.time.split(":")[0] + 0;
    var itemMinutes = this.props.time.split(":")[1] + 0;

    return (
      <div
        key={this.props.id}
        className="MedicineItem"
        style={
          itemHours < curHours ||
          (itemHours === curHours && itemMinutes <= curMinutes)
            ? { backgroundColor: "lightgreen", ...this.style }
            : { ...this.style }
        }
      >
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
