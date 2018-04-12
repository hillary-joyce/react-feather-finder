import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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
  ShuffleArray(a) {
    for(let i = a.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return(a);
    this.setState({ images: a });

  }

  //Method to change the state of a clicked image to clicked

  //Pull out the item in the array that matches the id clicked
  //If the isChanged value === 1, run the lose game function
  //Else, change the value of isChanged to 1
  //Create a substring of the array that includes all the items except this id
  //Join the id string and the array string together
  //Add one to the score
  //ShuffleArray Method

  //Method to restart the game on a loss
  //If score > highScore, reset high score
  //Set score to 0
  //ShuffleArray Method

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {images.map(image => (
          <ImageCard
            id={image.id}
            name={image.name}
            image={image.image}
            ShuffleArray = {ShuffleArray(images)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
