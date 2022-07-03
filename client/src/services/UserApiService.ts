import axios from 'axios';

export class UserApiService {
  static serverUrl = 'http://localhost:3000';
  static getAllUser() {
    // let dataUrl = `${UserApiService.serverUrl}/users`;
    // return axios.get(dataUrl);
  }
  static getUserById() {
    // let dataUrl = `${UserApiService.serverUrl}/users/:id`;
    // return axios.get(dataUrl);
  }
}

//? How to use this apiService ?
//either make custom hook to have clean code
// and then call those hooks in your component
//or use these class methods in your component directly.
