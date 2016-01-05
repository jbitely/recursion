// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // base cases
  // skip functions and undefined
  if(typeof obj === 'function' || typeof obj === 'undefined'){ // can't stringify functions or undefined
    return null;
  }
  // string case
  if(typeof obj === 'string'){ // double quotes for JSON
    return '\"' + obj + '\"';
  }
  // number, boolean, null cases
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){  // convert to string
    return String(obj);
  }
  // recursive cases
  // array case
  if(Array.isArray(obj)){ // test for array
    var arrContent = []; // container for results
    for(i = 0; i < obj.length; i++){ // iterate and call stringifyJSON on each element, storing result in arrContent
      arrContent.push(stringifyJSON(obj[i]));
    }
    return '[' + arrContent + ']'; // return results with formatting
  }
  // object case
  if(typeof obj === "object"){
    var objContent = []; // container for results
    for(var key in obj){
      if(stringifyJSON(obj[key]) !== null){ // skip functions and undefined
        objContent.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); // iterate and call stringifyJSON on each key:value, storing result in objContent
      }
    }
    return '{' + objContent + '}'; // return results with formatting
  }
};
