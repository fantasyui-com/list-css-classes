var postcss = require('postcss');
var CssSelectorParser = require('css-selector-parser').CssSelectorParser;
var traverse = require('traverse');
var cssSelectorParser = new CssSelectorParser();
cssSelectorParser.registerSelectorPseudos('has');
cssSelectorParser.registerNestingOperators('>', '+', '~');
cssSelectorParser.registerAttrEqualityMods('^', '$', '*', '~');
cssSelectorParser.enableSubstitutes();
module.exports = function(o) {
  let scanner = postcss.plugin('scanner', function(opts) {
    opts = opts || {};
    return function(root, result) {
      let classNames = new Set();

      root.walkRules(rule => {
        try{
          let parsedSelector = cssSelectorParser.parse( rule.selector );

          traverse(parsedSelector).forEach(function (data) {
            if (this.key === 'classNames') data.map(i=>classNames.add(i));
          });
        }catch(e){
          // ignore malformed selectors
        }

      });
      result.classNames = Array.from(classNames);
    };
  });
  return postcss([scanner({})]).process(o.css);
}
