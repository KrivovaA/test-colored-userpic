import React from 'react';

export default class ColoredUserpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.colors
    };
  }

  handleMouseOver = () => {
    this.setState({colors: this.props.hoverColors})
  };
  handleMouseOut = () => {
    this.setState({colors: this.props.colors})
  };
  render() {
    let { size, src, margin, backgroundColor, colorWidth } = this.props;
    let { colors } = this.state;
    let styleDiv = {
      width: size + margin/2 + colorWidth,
      height: size + margin/2 + colorWidth,
      border: `double ${colorWidth}px transparent`,
      borderRadius: '50%',
      backgroundImage: `linear-gradient(white, white), radial-gradient(circle at left, ${colors[0]},${colors[1]})`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
    };
    let styleImg = {
      width: size,
      height: size,
      border: `${margin}px solid ${backgroundColor}`,
      borderRadius: '50%', };
    return (
      <div style={styleDiv}>
        <img
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          src={src}
          alt=''
          style={styleImg}
          />
      </div>
    );
  }
}
