const convertToCelsius = function(far) {
  let cel = (far - 32) * 5 / 9 * 10;
  cel = Math.round(cel) / 10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  let far = (cel * 9 / 5 + 32) * 10;
  far = Math.round(far) / 10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
