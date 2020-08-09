import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';

describe('User entity', () => {
  let user: User;

  beforeEach(() => {
    user = new User();
    user.password = 'test-password';
    user.salt = 'test-salt';
    //@ts-ignore
    bcrypt.hash = jest.fn();
  });

  describe('validatePassword', () => {
    it('returns true as password is valid', async () => {
      //@ts-ignore
      bcrypt.hash.mockReturnValue('test-password');
      expect(bcrypt.hash).not.toHaveBeenCalled();
      const result = await user.validatePassword('123');
      expect(bcrypt.hash).toHaveBeenCalledWith('123', 'test-salt');
      expect(result).toBeTruthy();
    });

    it('returns true as password is invalid', async () => {
      //@ts-ignore
      bcrypt.hash.mockReturnValue('wrong-password');
      expect(bcrypt.hash).not.toHaveBeenCalled();
      const result = await user.validatePassword('wrong-password');
      expect(bcrypt.hash).toHaveBeenCalledWith('wrong-password', 'test-salt');
      expect(result).toBeFalsy();
    });
  });
});
