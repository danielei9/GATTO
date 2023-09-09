import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade bottom duration={2000} delay={2000}>
          <div className="row" style={{ background: "#000000", padding: "4rem", borderRadius: "30px" }} > 
            <div className="three columns">
              <img
                className="profile-pic"
                src={"images/Sokiç.PNG"}
                alt="Nordic Giant Profile Pic"
              />
              <img
                className="profile-pic"
                src={"images/buchu.PNG"}
                alt="Nordic Giant Profile Pic"
              />
              <img
                className="profile-pic"
                src={"images/Javi.PNG"}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col" >
              <h2>Que es GATTO?</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Eres artista?</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#contact" className="button">
                      <i className="fa fa-download"></i>Contacta con Nosotros
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
