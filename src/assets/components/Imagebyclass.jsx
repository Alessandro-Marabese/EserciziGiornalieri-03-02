import { Component } from "react";

class Imagebyclass extends Component {
  render() {
    return <img src={this.props.imageUrl} alt={this.props.altImg} width={500} height={500} />;
  }
}
export default Imagebyclass;
