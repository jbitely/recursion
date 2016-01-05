// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // In the full JS spec getElementsByClassName can be called on any element, and uses Document.body as its default.
  // HRRB spec only uses Document.body as the base element.
  var matching = []; // store matching elements
  var findMatches = function(target){ // recursive function for finding matching classes
    if(target.classList && target.classList.contains(className)){ // check if element has class(es); if so, check for matches
      matching.push(target); // push target to matching if it contains className
    }
    if(target.childNodes.length){ // check if target has any child nodes, recursively check children for matches
      for(var i = 0; i < target.childNodes.length; i++){ // iterate through child nodes
        findMatches(target.childNodes[i]); // check for matches in current child node
      }
    }
  };

  findMatches(document.body); // search for matches starting with the body
  return matching; // return matching results
};
