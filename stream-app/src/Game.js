import React, { Component } from 'react';
import UserForm from './UserForm.js'
import Prompt from './Prompt.js'
import axios from 'axios'

class Game extends Component {

  constructor() {
    super()
    this.state = {
      scene: 'userFormScene',
      current_player_memes: []
    }

    this.generateMeme = this.generateMeme.bind(this)
  }

  componentDidMount() {
    axios.get('https://api.imgflip.com/get_memes')
      .then((response) => {
      let memes = response.data.data.memes
      this.setState({ current_player_memes: memes})

      console.log("this.state", this.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  generateMeme(meme_data1, meme_data2, meme_data3) {
    let meme_data1_url = meme_data1.url.toString()
    let meme_data2_url = meme_data2.url.toString()
    let meme_data3_url = meme_data3.url.toString()


    return (
      <div className='memeRow'>
        <img src={meme_data1_url} className='meme' alt='n/a'/>
        <img src={meme_data2_url} className='meme' alt='n/a'/>
        <img src={meme_data3_url} className='meme' alt='n/a'/>
      </div>
    )
  }

  changeScene() {

  }

  render() {

    let memes_arr = []

    if (this.state.current_player_memes.length > 0) {
      let memes = this.state.current_player_memes

      for(var i=0; i<memes.length-3; i+=3) {
        memes_arr.push(this.generateMeme(memes[i], memes[i+1], memes[i+2]))
      }
    }

    let allContent = (memes_arr.length > 0) ? memes_arr.map(function(meme) { return meme } ) : null

    return (
      <div className='app'>
        <h1 className='gameTitle'>What do you meme?</h1>

        <UserForm ></UserForm>

        <div id='content'>
          {allContent}
        </div>

      </div>
    )
  }
}

export default Game;
