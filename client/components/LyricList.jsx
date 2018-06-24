import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricList extends Component{

  handleLike(lyricId, likes){
    this.props.mutate({
      variables: {id: lyricId},
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric:{
          __typename: 'LyricType',
          id: lyricId,
          likes: likes +1
        }
      }
    })
  }

  renderLyrics(){
    return this.props.lyrics.map(lyric => {
      return(
        <li>
          <div key={lyric.id} className="collection-item">
            {lyric.content}
            <div>
              <i 
              onClick={()=> this.handleLike(lyric.id, lyric.likes)}
              className="material-icons">thumb_up</i>
              {lyric.likes} 
            </div>
          </div>
        </li>
      );
    })
  }

  render(){
    return(
      <ul>
        {this.renderLyrics()}
      </ul>
    )
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`

export default graphql(mutation)(LyricList);