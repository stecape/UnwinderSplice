import React from "react";
import Field from "./Field.js";
import Drawing from "./Drawing.js";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ricalcolo } from "./ricalcolo.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Stella
      zp: 45,
      as: 0,
      rs: 410,
      al: 1,
      dc: 0,

      //Fotocellula
      af: 90,
      rf: 524.956,
      sf: 0,

      //Bobina 1
      rb1: 111,
      db1: 222,
      xb1: 0,
      yb1: 0,

      //Bobina 2
      rb2: 55,
      db2: 110,
      xb2: 0,
      yb2: 0,

      //Dati supplementari per disegno
      drawing: {
        as: 0,
        rs: 0,
        af: 0,
        rf: 0,
        sf: 0,
        rb: 111
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(ricalcolo(this.state));
  }

  handleChange(k, v) {
    var ob = {};
    ob[k] = v;
    this.setState(ob, () => {
      this.setState(ricalcolo(this.state));
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h1>Properties</h1>
            <Row>
              <Col md={4}>
                <Form>
                  <h4>Stella</h4>
                  <Field
                    parameter
                    name="zp"
                    mu="°"
                    description="Angolo di zero stella"
                    val={this.state.zp}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    input
                    name="as"
                    mu="°"
                    description="Angolo stella"
                    val={this.state.as}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    parameter
                    name="rs"
                    mu="mm"
                    description="Raggio stella"
                    val={this.state.rs}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    input
                    name="al"
                    mu=""
                    description="Asse in lavoro"
                    val={this.state.al}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    input
                    name="dc"
                    mu=""
                    description="Direzione di cambio"
                    val={this.state.dc}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                </Form>
                <Form>
                  <h4>Fotocellula</h4>
                  <Field
                    parameter
                    name="af"
                    mu="°"
                    description="Angolo fotocellula"
                    val={this.state.af}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    parameter
                    name="rf"
                    mu="mm"
                    description="Raggio fotocellula"
                    val={this.state.rf}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    input
                    name="sf"
                    mu=""
                    description="Stato fotocellula (ON/OFF)"
                    val={this.state.sf}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                </Form>
                <Form>
                  <h4>Bobina 1</h4>
                  <Field
                    parameter
                    name="rb1"
                    mu="mm"
                    description="Raggio bobina"
                    val={this.state.rb1}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    parameter
                    name="db1"
                    mu="mm"
                    description="Diametro bobina"
                    val={this.state.db1}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                </Form>
                <Form>
                  <h4>Bobina 2</h4>
                  <Field
                    parameter
                    name="rb2"
                    mu="mm"
                    description="Raggio bobina"
                    val={this.state.rb2}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                  <Field
                    parameter
                    name="db2"
                    mu="mm"
                    description="Diametro bobina"
                    val={this.state.db2}
                    handleChange={(k, v) => this.handleChange(k, v)}
                  />
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h1>Drawing</h1>
            <Drawing {...this.state.drawing} />
          </Col>
        </Row>
      </Container>
    );
  }
}
