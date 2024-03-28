const { fromJS, Map } = require('immutable');

function getImmutableObject(object) {
	return fromJS(object);
}

const immutableObj = getImmutableObject(obj);
console.log(immutableObj);
