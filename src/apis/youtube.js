import axios from "axios";

// Generated at: 
// https://console.developers.google.com/apis/credentials
export const KEY = 'AIzaSyDHfqEUQD31lLAdXYpJRA0fqwMP6ZMYGSs'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
