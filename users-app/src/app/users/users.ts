import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { User, UserService } from '../services/user';

@Component({
	selector: 'app-users',
	imports: [NgFor, NgIf],
	templateUrl: './users.html',
	styleUrl: './users.css'
})
export class Users {
	protected readonly searchQuery = signal<string>('');
	protected readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');
	protected readonly selectedEmail = signal<string | null>(null);

	private readonly allUsers = signal<User[]>([]);
	protected readonly filteredUsers = computed(() => {
		const q = this.searchQuery().toLowerCase().trim();
		const f = this.statusFilter();
		return this.allUsers().filter(u => {
			const matchName = q === '' || u.name.toLowerCase().includes(q);
			const matchStatus = f === 'all' || (f === 'active' ? u.active : !u.active);
			return matchName && matchStatus;
		});
	});

	constructor(private readonly userService: UserService) {
		this.allUsers.set(this.userService.getUsers());
	}

	protected onSearch(value: string) {
		this.searchQuery.set(value);
	}

	protected onFilterChange(value: string) {
		if (value === 'active' || value === 'inactive' || value === 'all') {
			this.statusFilter.set(value);
		}
	}

	protected onSelectUser(email: string) {
		this.selectedEmail.set(email);
	}
}
