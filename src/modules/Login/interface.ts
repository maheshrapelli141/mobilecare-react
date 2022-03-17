export interface LoginDto  {
    username: string,
    password: string,
    ['forced-login']?: boolean
};