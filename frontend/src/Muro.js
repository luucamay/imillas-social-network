import React from 'react';
class Muro extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            Bienvenido <strong>{this.props.user.username}</strong>!
        </div>
    );
    }
  };
  export default Muro;
