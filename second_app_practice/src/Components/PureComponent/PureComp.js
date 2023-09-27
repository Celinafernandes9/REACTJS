import React, { PureComponent} from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
        <>
      <div>
        PureComponent 
      </div>
      {/* this will not re-render if name value doesnot change */}
      {/* If the previous value of state or props and new value of state and props is same the component will not rerendered itself. */}
      <h1>Hiii! {this.props.name}</h1>
      </>
    )
  }
}

export default PureComp
