import  'dotenv/config';

export const validUser = {
  username: process.env.TEST_USER ??,
  password: process.env.TEST_PASS ??
};