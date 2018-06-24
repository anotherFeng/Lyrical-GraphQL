import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong'
import {Link } from 'react-router';
import LyricCreate from './LyricCreate.jsx';
import LyricList from './LyricList.jsx';

class SongDetails extends Component{


  render(){
    const { song } = this.props.data;
    if(!song){
      return <div></div>
    }
    return(
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}></LyricList>
        <LyricCreate id={song.id}></LyricCreate>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetails);