import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong'

class SongDetails extends Component{
  render(){
  console.log(this.props)

    return(
      <div><h3>Song Details</h3></div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetails);