import { Injectable } from '@angular/core';

export interface User {
	id: number;
	name: string;
	email: string;
	active: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private readonly users: User[] = [
		{ id: 1, name: 'Alice Johnson', email: 'alice@example.com', active: true },
		{ id: 2, name: 'Bob Smith', email: 'bob@example.com', active: false },
		{ id: 3, name: 'Carlos Diaz', email: 'carlos@example.com', active: true },
		{ id: 4, name: 'Diana Prince', email: 'diana@example.com', active: false },
		{ id: 5, name: 'Elena Petrova', email: 'elena@example.com', active: true }
	];

	getUsers(): User[] {
		return this.users;
	}
}
