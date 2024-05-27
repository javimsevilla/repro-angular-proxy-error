import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h2>Users</h2>
    <button (click)="getUsers()">get users</button>
    <ul>
      <li *ngFor="let user of users$ | async">
        {{ user.name }}
      </li>
    </ul>
    <h2>Extra Users</h2>
    <button (click)="getExtraUsers()">get extra users</button>
    <ul>
      <li *ngFor="let extraUser of extraUsers$ | async">
        {{ extraUser.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  http = inject(HttpClient)
  users$: Observable<Array<{ name: string }>> | undefined
  extraUsers$: Observable<Array<{ name: string }>> | undefined

  getUsers() {
    this.users$ = this.http.get<Array<{ name: string }>>('/users')
  }

  getExtraUsers() {
    this.extraUsers$ = this.http.get<Array<{ name: string }>>('/users-extra')
  }
}
