import React, {Component} from 'react';
import gql from "graphql-tag";
import { graphql, compose, Query} from 'react-apollo';
import {Link} from 'react-router';
import GET_ALL_SONGS from '../queries/fetchAllSongs';

class SongList extends Component {
  
  onSongDelete(id){
    this.props.mutate({
      variables: {id: id}
    }).then(()=> this.props.data.refetch())
  }

  renderSong(){
    return this.props.data.songs.map(song=>{
      return(
        <li key={song.id} className="collection-item">
          <Link to={`/songs/${song.id}`}>
            {song.title}
          </Link>
          <i className="material-icons"
          onClick={()=> this.onSongDelete(song.id)}
          >delete</i>
        </li>
      )
    })
  }

  render(){
    console.log(this.props)
    {return this.props.data.loading ? <div>Loading...</div> :
      <div>
        <ul className="collection">
          {this.renderSong()}
        </ul>
        <Link to="/songs/new"
        className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    }
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`

export default compose(
  graphql(mutation),
  graphql(GET_ALL_SONGS)
)(SongList);