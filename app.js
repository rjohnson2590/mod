function sayHello(){
	console.log('Hello World!');
}

function superSecret() {
	console.log('Noooooooo you cant do that');
}

module.exports = {
	version: '0.0.1',
	otherName: sayHello,
	yolo: superSecret
};