import React, { Component } from "react";
import "../css/MedicineItem.css";

class MedicineItem extends Component {
  render() {
    return this.props.Medicine
      ? this.props.Medicine.map(Medicine => (
          <div key={Medicine.id} className="MedicineItem">
            <div className="ItemTitle">{Medicine.title}</div>
            <div className="ItemDate">{Medicine.time}</div>
          </div>
        ))
      : "";
  }
}

export default MedicineItem;
