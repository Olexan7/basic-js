const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let typeActivity = typeof sampleActivity;
  if (
    typeActivity == "number" ||
    typeActivity == "object" ||
    typeActivity == "undefined" ||
    typeActivity == "symbol" ||
    typeActivity == "null" ||
    typeActivity == "boolean"
  )
    return false;
  sampleActivity = parseFloat(sampleActivity);
  if (
    sampleActivity <= 0 ||
    sampleActivity > 15 ||
    sampleActivity == NaN ||
    sampleActivity == undefined ||
    isNaN(sampleActivity)
  )
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
};
