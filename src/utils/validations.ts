import Fields from '../enums/fields';

export const isValidPassword = (password: string) =>
    password.length >= Fields.PASSWORD_MIN_LENGTH && password.length <= Fields.PASSWORD_MAX_LENGTH;

export const isValidPasswordConfirmation = (password: string, passwordConfirmation: string) =>
    password === passwordConfirmation;

export const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
