import React, { Component } from "react";
//import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./OurStudio.css";
import axios from "axios";

class OurStudio extends Component {
  // state = {
  //   selectedFile: null
  // };

  // fileSelectedHandler = event => {
  //   this.setState({ selectedFile: event.target.files[0] });
  // };

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

  //   axios
  //     .post(
  //       "https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile",
  //       fd,
  //       {
  //         onUploadProgress: progressEvent => {
  //           console.log(
  //             "Upload Progress:" +
  //               Math.round((progressEvent.loaded / progressEvent.total) * 100) +
  //               "%"
  //           );
  //         }
  //       }
  //     )

  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  render() {
    return (
      <div>
        <div className="beatExplorer">
          <br></br>
          <Container fluid="md">
            <Row>
              <Col>
                <input
                  className="centerMe"
                  type="file"
                  onChange={this.fileSelectedHandler}
                />
                <Button onClick={this.fileUploadHandler}>Upload</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default OurStudio;
