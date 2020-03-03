const mergeFn = require("lodash").defaultsDeep;
//const payload = '{"constructor": {"prototype": {"a0": true}}}';

const myDefaultsDeep = payload => {
  mergeFn({}, JSON.parse(payload));
};

module.exports = {
    myDefaultsDeep
}
