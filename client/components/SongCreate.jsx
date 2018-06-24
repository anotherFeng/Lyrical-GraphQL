import React, {Component} from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Link, hashHistory} from 'react-router';
import query from '../queries/fetchAllSongs';

class SongCreate extends Component{
  constructor(props){
    super(props);
    this.state = {title: ''};
  }

  onSubmit(event){
    event.preventDefault();
    this.props.mutate({
      variables: {title: this.state.title},
      refetchQueries: [{ query: query }]
      
    }).then(()=> hashHistory.push("/"))   //asyn, so only run when mutate is finished
  } //when we create a new song, the song list doesnt necessary get all the latest songs created rendered

  render(){
    return(
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={event => this.setState({title: event.target.value})} 
          value={this.state.title} type="text"/>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);