import React, { Component } from "react";
import axios from "axios";
import loremIpsum from "lorem-ipsum";
import logo from "../../assets/images/react-logo.png";
import "./App.css";

// custom components
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";
import Navbar from "../../components/Navbar/Navbar";

class App extends Component {
  state = {
    posts: null,
    loading: true
  };

  componentDidMount() {
    if (!this.state.posts) {
      const mockUsers = axios
        .get("https://randomuser.me/api?inc=name,picture&results=10")
        .then(response => {
          const posts = this.generatePosts(response.data.results);
          this.setState({ posts: posts, loading: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ posts: [], loading: false });
        });
    }
  }

  generatePosts = userData => {
    const posts = [];

    for (let i = 0; i < userData.length; i++) {
      const actualMinutes = new Date().getMinutes();
      const randomSubtractionMinutes =
        actualMinutes > 1 ? actualMinutes - 1 : actualMinutes;
      const randomMinutes = Math.floor(
        Math.random() * randomSubtractionMinutes
      );

      const postDate =
        new Date().getMinutes() -
        new Date(new Date() - randomMinutes * 60000).getMinutes();

      const post = {
        content:
          loremIpsum({
            count: Math.random() * 100 + 10,
            units: "words"
          }) + ".",
        postDate: postDate,
        author: {
          name: `${userData[i].name.first} ${userData[i].name.last}`,
          picture: userData[i].picture.medium
        }
      };

      posts.push(post);
    }
    return posts;
  };

  render() {
    return (
      <div>
        <Navbar text="RocketBook" />
        {this.state.loading && !this.state.posts ? (
          <Spinner text="Loading..." />
        ) : !this.state.loading && !this.state.posts.length ? (
          <p>something bad occurred :(</p>
        ) : (
          this.state.posts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        )}
      </div>
    );
  }
}

export default App;
