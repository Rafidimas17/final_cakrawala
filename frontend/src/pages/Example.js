import React, { Component } from "react";
// import "./MyComponent.css";

class MyComponent extends Component {
  state = {
    rows: [
      {
        id: "",
        nama: "",
        no_id: "",
        alamat: "",
        phone: "",
      },
    ],
  };

  handleChange = (event, rowIndex) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const updatedRows = [...prevState.rows];
      updatedRows[rowIndex][name] = value;
      return {
        rows: updatedRows,
      };
    });
  };

  handleClick = () => {
    console.log(this.state.rows);
  };

  handleAddRow = () => {
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          fullname: "",
          address: "",
          no_id: "",
          phone: "",
        },
      ],
    }));
  };

  handleRemoveRow = (index) => {
    this.setState((prevState) => {
      const updatedRows = [...prevState.rows];
      updatedRows.splice(index, 1);
      return {
        rows: updatedRows,
      };
    });
  };

  render() {
    const { rows } = this.state;

    return (
      <div>
        {rows.map((row, index) => (
          <div className="row" key={index}>
            <div className="col">
              <input
                type="text"
                name="id"
                value={row.id}
                onChange={(event) => this.handleChange(event, index)}
                placeholder="ID"
                className="form-control"
              />
              <input
                type="text"
                name="nama"
                value={row.nama}
                onChange={(event) => this.handleChange(event, index)}
                placeholder="Nama"
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="no_id"
                value={row.no_id}
                onChange={(event) => this.handleChange(event, index)}
                placeholder="No. ID"
                className="form-control"
              />
              <input
                type="text"
                name="alamat"
                value={row.alamat}
                onChange={(event) => this.handleChange(event, index)}
                placeholder="Alamat"
                className="form-control"
              />
              <input
                type="text"
                name="phone"
                value={row.phone}
                onChange={(event) => this.handleChange(event, index)}
                placeholder="Phone"
                className="form-control"
              />
            </div>
            <div className="col">
              <button onClick={() => this.handleRemoveRow(index)}>Remove</button>
            </div>
          </div>
        ))}
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleClick}>Print State</button>
      </div>
    );
  }
}

export default MyComponent;
