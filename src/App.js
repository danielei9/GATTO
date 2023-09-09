import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import News from "./Components/News/News";
import BuyTicket from "./Components/BuyTicket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <img id="img1" className="imagen-flotante" style={{}} src={"images/Gatos/2.png"} alt="Imagen Fija" />
        <img id="img2" className="imagen-flotante" style={{}} src={"images/Gatos/3.png"} alt="Imagen Fija" />
        <img id="img3" className="imagen-flotante" style={{}} src={"images/Gatos/4.png"} alt="Imagen Fija" />
        <img id="img4" className="imagen-flotante" style={{}} src={"images/Gatos/5.png"} alt="Imagen Fija" />
        <img id="img5" className="imagen-flotante" style={{}} src={"images/Gatos/6.png"} alt="Imagen Fija" />
        <img id="img6" className="imagen-flotante" style={{}} src="https://www.forosperu.net/data/xengallery/173/173946-382b0acce1b883af3a2d1d9c08474faf.jpg?1585525619" alt="Imagen Fija" />
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <News />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <BuyTicket data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
