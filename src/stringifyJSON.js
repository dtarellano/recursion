// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // toString did not work with null so i created an if case
  if (obj === null) {
    return "null"
  }
  // will create a wrapping string
  if (typeof obj === "string") {
    return '"' + obj + '"'
  }
  // created sequence to stringify arrays
  if (Array.isArray(obj)) {
    var arrayResults = [];
    if (!obj.length) {
      return '[]';
    }
    for(var i = 0; i < obj.length; i++) {
      arrayResults.push(stringifyJSON(obj[i]))
    }
      return '[' + arrayResults + ']'

  }
  // created sequence to strigify objects
  // also learned about "constructor" to cofirm its its object because typeof will return "object" on an array and an object
  if (obj.constructor === Object) {
    var objResults = [];
    for (var key in obj) {
      if(obj[key] === undefined || typeof obj[key] === 'function') {
        // was trying to figure out how to skip sequences and I came across continue statement
        continue;
      }
      objResults.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
    }
    return '{' + objResults.join() + '}'
  }

  return obj.toString();
};
