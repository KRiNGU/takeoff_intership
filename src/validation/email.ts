export const emailRules = {
  required: 'This field is required',
  pattern: {
    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: 'Enter an email address in the format e.g. user@mail.com',
  },
};
