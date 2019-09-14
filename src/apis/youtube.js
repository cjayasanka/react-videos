import axios from "axios";

const KEY = "AIzaSyAShWS8LobvRHxwjs6O3xBgh6-5mjIG99w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
