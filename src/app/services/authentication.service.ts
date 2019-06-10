import { Injectable } from '@angular/core';
import { User, SIGN_UP, SIGN_IN } from '../models/user';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private apollo: Apollo) { }

  sign_up(user: User) {
    return this.apollo.mutate({
      mutation: SIGN_UP,
      variables: {
        name: user.name,
        nickname: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      }
    });
  }
  
  sign_in(user: User) {
    return this.apollo.mutate({
      mutation: SIGN_IN,
      variables: {
        email: user.email,
        password: user.password
      }
    });
  }
}