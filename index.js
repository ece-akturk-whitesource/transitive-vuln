const yaml = require("js-yaml");
const { safeFunc } = require("./safeCode");
const { myDefaultsDeep } = require("./myDefaultsDeep");

const vulnerableFunc = x => {
  yaml.load(x);
};

module.exports = {
  vulnerableFunc,
  safeFunc,
  myDefaultsDeep
};
