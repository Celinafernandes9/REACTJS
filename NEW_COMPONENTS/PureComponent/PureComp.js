import React, { PureComponent} from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
        <>
      <div>
        PureComponent 
      </div>
      <h1>Hiii! {this.props.name}</h1>
      </>
    )
  }
}

export default PureComp
