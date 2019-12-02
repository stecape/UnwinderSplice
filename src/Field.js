import React from "react";
import { Label } from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: Number(0)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return nextProps;
    }
    return null;
  }

  render() {
    var calculated = "calculated";
    var parameter = "parameter";
    var input = "input";
    var output = "output";
    return (
      <div>
        <FormGroup key={this.props.name}>
          <Label>
            {this.props.name} - {this.props.mu} -{" "}
            <small>{this.props.description}</small>
          </Label>
          <FormControl
            {...(this.props.output
              ? { plaintext: true, readOnly: true, className: output }
              : {})}
            {...(this.props.calculated
              ? { plaintext: true, readOnly: true, className: calculated }
              : {})}
            {...(this.props.parameter ? { className: parameter } : {})}
            {...(this.props.input ? { className: input } : {})}
            onChange={event => {
              this.setState({ val: event.target.value });
              this.props.handleChange(
                this.props.name,
                Number(event.target.value)
              );
            }}
            type="number"
            value={this.state.val}
            variant="success"
          />
        </FormGroup>
      </div>
    );
  }
}
