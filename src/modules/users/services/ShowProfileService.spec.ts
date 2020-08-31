import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updateUser = await showProfileService.execute({
      user_id: user.id,
    });

    expect(updateUser.name).toBe('John Doe');

    expect(updateUser.email).toBe('johndoe@example.com');
  });

  it('should not be able show the profile from non-existing user', async () => {
    await expect(
      showProfileService.execute({
        user_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
