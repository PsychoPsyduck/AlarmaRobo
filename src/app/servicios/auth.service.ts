import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFireAuth,
    private router: Router) { }

  getUserEmail() {  
    return new Promise((resolve, reject) => {
      this.db.onAuthStateChanged(function(user){
        if(user) {
          resolve(user.email)
        }
        else {
          resolve("0")
        }});
    })
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.db.signInWithEmailAndPassword(email, password)
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    })
  }

  logout() {
    this.db.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
