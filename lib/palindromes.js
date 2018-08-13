module.exports = str => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");
  if (reverseStr === lowRegStr) {
    return true;
  } else if (reverseStr !== lowRegStr) {
    return false;
  }
};
