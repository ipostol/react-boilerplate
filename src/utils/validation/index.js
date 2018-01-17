export const required = value => (value ? undefined : 'Required');

export const vatValidation = (vat) => {

  if (vat && vat.length && !/^[a-zA-Z0-9]+$/.test(vat)) {

    return 'Invalid VAT';

  }

  return undefined;

};

export const nameValidation = (_name) => {

  if (_name) {

    const name = _name.trim();
    const splitName = name.split(' ');

    if (name.length < 4 || splitName.length < 2) {

      return 'Invalid name';

    }

  }

  return undefined;

};

export const emailValidation = (email) => {

  if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {

    return 'Invalid email';

  }

  return undefined;

};

export const passwordValidation = (password) => {

  if (!/[0-9a-zA-Z!@#$%^&*]{8,}/.test(password)) {

    return 'Invalid password';

  }

  return undefined;

};

export const strongPasswordValidation = (password = '') => {

  const errors = [];

  if (password.length < 8) errors.push('length');

  if (!/[!@#$%^&*]/.test(password)) errors.push('spec');

  if (!/[A-Z]/.test(password)) errors.push('upper');

  if (!/[a-z]/.test(password)) errors.push('lower');

  if (!/[0-9]/.test(password)) errors.push('digit');

  return errors.length ? errors : undefined;

};

export const numberValidation = (number) => {


  if (!/^\d+$/.test(number)) {

    return 'Invalid number';

  }

  return undefined;

};

export const postCodeValidation = (postcode) => {

  if (!postcode || postcode.length < 2) {

    return 'Invalid postcode';

  }

  return undefined;

};

export const timeValidation = (time) => {

  if (time && !/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {

    return 'Invalid time, use format hh:mm';

  }

  return undefined;

};

export const urlValidation = (url) => {

  console.log(url);

  if (url && !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(url)) {

    return 'Invalid url';

  }

  return undefined;

};
