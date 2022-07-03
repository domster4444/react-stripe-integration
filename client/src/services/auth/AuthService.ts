//! CLASSES methods for API CALL for CATEGORIZEs ie. AuthApiService:handles all authApiRequests,ProductApiServices:handles all ProductApiRequest
import axios from 'axios';

export class AuthApiService {
  private static serverURL: string = `https://www.google.com`;
  public static getAllUsers() {
    // let dataUrl: string = `${this.serverURL}/users`;
    // return axios.get(dataUrl);
  }
  public static getUserById(id: string) {
    // let dataUrl: string = `${this.serverURL}/users/${id}`;
    // return axios.get(dataUrl);
  }
}

//?  HOW TO USE THIS API SERVICE ?
//* =>either make custom hook to have clean code & then call those customHook in either contextFileProvider or directly in your component,
//*==>or directly call these methods in whatever contextfileProvider you want or directly call these methods in your component file
