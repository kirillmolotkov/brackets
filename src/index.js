module.exports = function check(string, config) {
  const configObject = Object.fromEntries(config);
  const stack = [];

  for (let elem of string) {
    const lastElementStack = stack[stack.length - 1];
    if (configObject[lastElementStack] === elem && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(elem);
    }
  }
  return stack.length === 0;
};
