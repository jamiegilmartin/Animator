var drawing_root = 'beer/';
var DRAWINGS = [
	drawing_root+'beer1',
	'',
	'',
	'',
	'',
	drawing_root+'beer2',
	'',
	'',
	'',
	'',
	drawing_root+'beer3',
	'',
	'',
	'',
	'',
	drawing_root+'beer4',
	'',
	'',
	'',
	'',
	drawing_root+'beer5',
	'',
	'',
	'',
	'',
	drawing_root+'beer1',
	'',
	'',
	'',
	'',
	drawing_root+'beer2',
	'',
	'',
	'',
	'',
	drawing_root+'beer3',
	'',
	'',
	'',
	'',
	drawing_root+'beer4',
	'',
	'',
	'',
	'',
	drawing_root+'beer5',
	'',
	'',
	'',
	'',
	drawing_root+'beer1',
	'',
	'',
	'',
	'',
	drawing_root+'beer2',
	'',
	'',
	'',
	'',
	drawing_root+'beer3',
	'',
	'',
	'',
	'',
	drawing_root+'beer4',
	'',
	'',
	'',
	'',
	drawing_root+'beer5',
	'',
	'',
	'',
	'',
	drawing_root+'beer1',
	'',
	'',
	'',
	'',
	drawing_root+'beer2',
	'',
	'',
	'',
	'',
	drawing_root+'beer3',
	'',
	'',
	'',
	'',
	drawing_root+'beer4',
	'',
	'',
	'',
	'',
	drawing_root+'beer5',
	'',
	'',
	'',
	'',
	drawing_root+'beer1',
	'',
	'',
	'',
	'',
	drawing_root+'beer2',
	'',
	'',
	'',
	'',
	drawing_root+'beer3',
	'',
	'',
	'',
	'',
	drawing_root+'beer4',
	'',
	'',
	'',
	'',
	drawing_root+'beer5',
	'',
	'',
	'',
	''
];

/*var drawing_root = 'walk/';
var DRAWINGS = [
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	'',
	drawing_root+'w1',
	'',
	'',
	'',
	'',
	drawing_root+'w2',
	'',
	'',
	'',
	'',
	drawing_root+'w3',
	'',
	'',
	'',
	'',
	drawing_root+'w4',
	'',
	'',
	'',
	'',
	drawing_root+'w5',
	'',
	'',
	'',
	''
];*/

/*
// ball
var DRAWINGS = [
	'b1',
	'',
	'b2',
	'',
	'b3',
	'',
	'b4',
	'',
	'b5',
	'',
	'b6',
	'',
	'b7',
	'',
	'b8',
	'',
	'b9',
	'',
	'b10',
	'',
	'b11',
	'',
	'b12',
	'',
	'b13',
	'',
	'',
	'',
	'',
	'',
];
*/