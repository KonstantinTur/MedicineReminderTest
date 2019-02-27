import React, { Component } from "react";
import AddMedicineItem from "./AddMedicineItem";
import uuid from "uuid";
import MedicineItem from "./MedicineItem";

class MedicineReminder extends Component {
  state = {
    Medicine: []
  };

  addMedicine = (title, time) => {
    const newMedicine = {
      id: uuid.v4(),
      title: title,
      time: time
    };
    this.setState({ Medicine: [...this.state.Medicine, newMedicine] });
  };

  render() {
    return (
      <AddMedicineItem
        addMedicine={this.addMedicine}
        Medicine={this.state.Medicine}
      />
    );
  }
}

export default MedicineReminder;
