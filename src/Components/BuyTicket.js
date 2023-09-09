import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class BuyTicket extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + "OIG.png";
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="buyTicket">
        <Fade bottom duration={2000} delay={500}>
          <div className="row" style={{ background: "#000000", padding: "4rem", borderRadius: "30px", textAlign: "center", display: "flex",flexDirection: "column",alignItems: "center"}} >
            <img
              className="profile-pic"
              src={profilepic}
              style={{ height: "350px",borderRadius: "100px", marginBottom:"20px" }}
              alt="Nordic Giant Profile Pic"
            />
            <a href={resumeDownload} className="button" style={{ padding: "30px" }}>
              <i className="fa fa-download"></i>COMPRA TUS ENTRADAS
            </a>
          </div>
        </Fade>
      </section>
    );
  }
}

export default BuyTicket;
