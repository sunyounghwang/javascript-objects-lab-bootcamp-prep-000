var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}