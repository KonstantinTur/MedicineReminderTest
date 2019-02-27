import React, { Component } from "react";
import AddMedicineItem from "./AddMedicineItem";
import MedicineItem from "./MedicineItem";
import uuid from "uuid";

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
    if (title === "" || time === "") {
      alert("Введите название/время");
    } else {
      this.setState({ Medicine: [...this.state.Medicine, newMedicine] });
      document.getElementById("MedicineName").value = "";
      document.getElementById("MedicineTime").value = "";
    }
  };

  deleteMedicine = id => {
    this.setState({
      Medicine: [...this.state.Medicine.filter(Medicine => Medicine.id !== id)]
    });
  };

  render() {
    return (
      <React-fragment>
        <AddMedicineItem
          addMedicine={this.addMedicine}
          Medicine={this.state.Medicine}
          deleteMedicine={this.deleteMedicine}
        />
        {this.state.Medicine.map(Medicine => (
          <MedicineItem
            title={Medicine.title}
            id={Medicine.id}
            time={Medicine.time}
            deleteMedicine={this.deleteMedicine.bind(this, Medicine.id)}
          />
        ))}
      </React-fragment>
    );
  }
}

export default MedicineReminder;
