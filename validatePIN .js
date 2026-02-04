function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      let isDigit = /^\d$/.test(pin[i]);
      if (!isDigit) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

console.log(validatePIN("1236"));
