import React, {Component} from 'react';

export default ({children}) => {
  return <div className="container">{children}</div>
}

// class App extends Component{
//   constructor({children}){
//     super();
//     this.state = {
//       childEl: children
//     }
//   }

//   render(){
//     return(
//       <div className="container">{this.state.childEl}</div>
//     )
//   }
// }

// export default App;