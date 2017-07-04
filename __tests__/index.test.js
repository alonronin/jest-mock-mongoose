import mongoose from 'mongoose';

import User from '../src/';

describe('Test User Model', () => {
  it('should validate', () => {
    const user = new User({
      name: 'user',
      email: 'user@email.com'
    });

    return user.validate().then(() => {
      expect(user.toObject()).toHaveProperty('created');
      expect(user.toObject()).toHaveProperty('_id')
    })
  });

  it('should connect', () => {
    expect(typeof mongoose.connect).toBe('function')
  })
});