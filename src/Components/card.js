import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longNumber: "**** **** ****",
      expirydate: "** **",
      name: "Foulen"
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

    // function to handle the Long Number change

    this.handleLongNumberChange = event => {
      if (/^(\d){0,16}$/.test(event.target.value)) {
        this.setState({
          longNumber: event.target.value
        });
      } else alert("The card number has a maximun  length of 16 characters");
    };

    // function to handle the Expiry Date change
    this.handleExpiryChange = event => {
      let ele = event.target.value.split("/").join(""); //  Remove slash (/) if mistakenly entered.
      if (ele.length < 5 && ele.length > 0) {
        this.setState({
          expirydate: ele.match(/.{1,2}/g).join("/")
        });
      }
    };

    // function to handle the Name change
    this.handleNameChange = event => {
      console.log("which event", event.target.value);
      if (/^[a-zA-Z]{0,20}$/.test(event.target.value)) {
        this.setState({ name: event.target.value.toUpperCase() });
      } else {
        alert("The name has a maximum length of 20 characters");
        event.target.value = event.target.value.substr(
          0,
          event.target.value.length - 1
        );
      }
    };

    this.handleSubmit = event => {};
  }
  render() {
    return (
      <div>
        {/* the credit card  Template  */}
        <div className="credit-Card">
          <h3> Company name</h3>
          <img src="/img/sim-card.png" className="sim-card" alt="sim-card" />

          <div className="long-number"> {this.state.longNumber}</div>
          <div className="expiry-date"> {this.state.expirydate} </div>
          <div>
            <img
              src="/img/mastercard.png"
              alt="master-card-logo"
              className="master-card-logo"
            />
          </div>
          <div className="Name"> {this.state.name}</div>
        </div>

        {/* the credit card  form  */}
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={this.handleNameChange} />
            </label>
            <label>
              Long number :
              <input
                type="text"
                name="long number"
                onChange={this.handleLongNumberChange}
              />
            </label>
            <label>
              Month/Year :
              <input
                type="text"
                name="expiry date"
                onChange={this.handleExpiryChange}
                maxlength="4"
                apttern="(0[1-9]|1[0-2])\/[0-9]{2}"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Card;
