import React from 'react'
import ToyCard from './ToyCard'


class ToyContainer extends React.Component { 
 constructor() { 
   super()
   this.state={ 
     toys:[]
   }
 }
 componentDidMount(){ 
   fetch("http://localhost:3000/toys")
   .then(res => res.json())
   .then(toys => this.setState({ 
     toys: toys
   }))
 }
  render() {
  return(
    <div id="toy-collection">
      {this.state.toys.map(toy => < ToyCard toy={toy}/>)}
    </div>
  );
}
}
export default ToyContainer;
