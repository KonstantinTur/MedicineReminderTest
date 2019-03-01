import React, { Component } from "react";
import AddMedicineItem from "./AddMedicineItem";
import MedicineItem from "./MedicineItem";
import uuid from "uuid";

class MedicineReminder extends Component {
  state = {
    Medicine: [],
    curTime: new Date().toLocaleString()
  };

  componentWillMount() {
    localStorage.getItem("MedicineList") &&
      this.setState({
        Medicine: JSON.parse(localStorage.getItem("MedicineList"))
      });
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("MedicineList", JSON.stringify(nextState.Medicine));
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

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
        <div
          className="CurrentTime"
          style={{
            textAlign: "center",
            margin: "0 auto 10px auto",
            fontSize: "25px",
            fontFamily: "Roboto Slab, serif"
          }}
        >
          Текущее время <br />
          {this.state.curTime}
        </div>
        <div id="MedicineList">
          {this.state.Medicine.sort(
            (a, b) =>
              a.time.split(":")[0] * 60 +
              a.time.split(":")[1] +
              0 -
              (b.time.split(":")[0] * 60 + b.time.split(":")[1] + 0)
          ).map(Medicine => (
            <MedicineItem
              key={Medicine.id}
              curTime={this.state.curTime}
              title={Medicine.title}
              id={Medicine.id}
              time={Medicine.time}
              deleteMedicine={this.deleteMedicine.bind(this, Medicine.id)}
            />
          ))}
        </div>
      </React-fragment>
    );
  }
}

export default MedicineReminder;
