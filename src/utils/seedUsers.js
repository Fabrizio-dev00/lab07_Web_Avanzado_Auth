import authService from '../services/AuthService.js';
import userRepository from '../repositories/UserRepository.js';

export default async function seedUsers() {
  const existing = await userRepository.getAll();
  if (existing.length === 0) {
    await authService.signUp({
      email: 'admin@auth.com',
      password: 'AdminPassword123!',
      name: 'Admin',
      lastName: 'System',
      phoneNumber: '123456789',
      birthdate: new Date('1990-01-01'),
      url_profile: 'https://via.placeholder.com/150',
      address: 'Central Office',
      roles: ['admin']
    });
    console.log('Seeded admin user: admin@auth.com / AdminPassword123!');
  }
}
