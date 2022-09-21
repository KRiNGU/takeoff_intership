export const passwordRules = {
  required: 'This field is required',
  maxLength: {
    value: 64,
    message: 'Password max length is 64',
  },
  minLength: {
    value: 5,
    message: 'Password min length is 5',
  },
};
