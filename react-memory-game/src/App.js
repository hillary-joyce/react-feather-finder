import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score"
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0
  }
  //Method to randomly shuffle the array of images
  //Uses the Fisher-Yates shuffle algorithm
  ShuffleArray = a => {
    for(let i = a.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({ images: a });

  }

  //Method to change the state of a clicked image to clicked
  handleOnClickEvent = id => {
    //Pull out the item in the array that matches the id clicked
    const selectedImg = this.state.images.filter(image => image.id === id);
    //Create a substring of the array that includes all the items except this id
    const allOtherImg = this.state.images.filter(image => image.id !== id);
    //If the isChanged value === 1, run the lose game function
    if(selectedImg[0].clicked === 1) {
       this.gameOver();
    }
    //Else, change the value of isChanged to 1
    else {
      selectedImg[0].clicked = 1;
    //Join the id string and the array string together
       const allImages = selectedImg.concat(allOtherImg);
    //Add one to the score
       this.setState({score: this.state.score + 1});
       this.setState({images: allImages})
       console.log("score: " + this.state.score);
       console.log("highScore: " + this.state.highScore);
    }
    // //ShuffleArray Method
    this.ShuffleArray(this.state.images);
  };

  //Method to restart the game on a loss
  gameOver = () => {
    //If score > highScore, reset high score
    if(this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score})
    }
    const resetImages = this.state.images.map(image => image.clicked = 0);
    this.setState({images: resetImages});

    //Set score to 0
    this.setState({score: 0})
    //ShuffleArray Method
    this.ShuffleArray(this.state.images);
  }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <div className="container">
        <Title>React Feather Finder</Title>
        <h3>Click on feathers to earn points, but avoid clicking on the same image more than once</h3>
        <Score score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
        {images.map(image => (
          <ImageCard
            key={image.id}
            id={image.id}
            name={image.name}
            image={image.image}
            clicked={image.clicked}
            handleOnClickEvent={this.handleOnClickEvent}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
