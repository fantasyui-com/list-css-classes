var postcss = require('postcss');
module.exports = function(o) {
  let scanner = postcss.plugin('scanner', function(opts) {
    opts = opts || {};
    return function(root, result) {
      result.selectors = {};
      root.walkRules(rule => {
        let ruleSelectors = rule.selector.replace(/\./g, " .").split(/[, >]/).map(i => i.trim()).filter(i => i);
        ruleSelectors.forEach(selector => {
          let selectorParts = selector.split(/:/);
          if (selectorParts[0]) {
            if (selectorParts[0].match(/^\./)) {
              result.selectors[selectorParts[0]] = true;
            }
          }
        });
      });
    };
  });
  return postcss([scanner({})]).process(o.css);
}
