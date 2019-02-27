import React, { Component } from "react";
import "../css/AddMedicineItem.css";

class AddMedicineItem extends Component {
  AddItem = () => {
    this.props.addMedicine(
      document.getElementById("MedicineName").value,
      document.getElementById("MedicineTime").value
    );
  };

  render() {
    return (
      <React.Fragment>
        <div id="MedicineWindow">
          <div className="AddMedicineItem">
            <p>
              <input
                id="MedicineName"
                type="text"
                placeholder="Введите название лекарства"
              />
            </p>
            <p>
              <span>В какое время принимать?</span>
              <br />
              <input id="MedicineTime" type="time" />
            </p>
            <button className="AddItem" onClick={this.AddItem}>
              Добавить
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddMedicineItem;
