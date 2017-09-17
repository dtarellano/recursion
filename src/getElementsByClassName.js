// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  function findClass (element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element)
    }
    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        findClass(element.childNodes[i]);
      }
    }
  }

  findClass(document.body);
  return results;
};
