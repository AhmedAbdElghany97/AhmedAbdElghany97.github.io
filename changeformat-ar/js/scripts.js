var items = [
['\u0627', '\u0640\uFE8D', '\u0640\uFE8E'], /*ا */
['\u0623', '\u0622', '\u0671', '\u0672', '\u0675', '\u0773', '\u0774', '\u0640\uFB51', '\u0640\uFB50', '\u0640\uFD3D', '\u0640\uFD3C','\u0640\uFE84','\u0640\uFE83','\u0640\uFE82','\u0640\uFE81'], /*أ */
['\u0625','\u0673','\u0640\uFE87','\u0640\uFE88'], /*إ */
['\u0628','\u067B','\u067E','\u0755','\u0752','\u08A1','\u08A0','\u08B6'], /*ب   */
['\u062A','\u067C','\u067A'] /*ت   */
];

var itemsDots = [
['\u0628', '\u062A', '\u062B','\u066E'],
['\u062C', '\u062E', '\u062D'],
['\u0630', '\u062F'],
['\u0632', '\u0631'],
['\u0634', '\u0633'],
['\u0636', '\u0635'],
['\u0638', '\u0637'],
['\u063A', '\u0639'],
['\u0641', '\u0642','\u066F'],
['\u0646', '\u0649'],
['\u064A', '\u0649'],
['\u0629', '\u0647']
];

$(document).ready(function() {
	$("#input-button").click(function () {
		var input1 = changeUnicodes($("#input-text").val());
		var input2 = changeUnicodes($("#input-text").val());
		$("#result-area1").empty();
		$("#result-area2").empty();
		$("#result-area1").append(input1);
		$("#result-area2").append(input2);
	});
});
$(document).ready(function() {
	$("#input-button-dots").click(function () {
		var input = removeDots($("#input-text-dots").val());
		$("#result-area-dots").empty();
		$("#result-area-dots").append(input);
	});
});

function changeUnicodes(text){
	var result = '';
	var rLen = true;
	for (var i = 0; i < text.length; i++) {
		for (var r = 0; r < items.length; r++){
			if (items[r].includes(text.charAt(i))){
				var randIndex = getRandomInt(0, items[r].length - 1);
				result = result + items[r][randIndex]; //items[r][randIndex] //test-> items[r][14]
				rLen = false;
				break;
			}
			rLen = true;
		}
		if (rLen == true){
			result = result + text.charAt(i);
			rLen = true;
		}
	}
	return result;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function removeDots(text){
	var result = '';
	var rLen = true;
	for (var i = 0; i < text.length; i++) {
		for (var r = 0; r < itemsDots.length; r++){
			if (itemsDots[r].includes(text.charAt(i))){
				if (text.charAt(i) == '\u0646' && text.charAt(i+1) == ' '){
					result = result + '\u06BA';
					rLen = false;
					break;
				}else if(text.charAt(i) == '\u0646' && text.charAt(i+1) == ''){
					result = result + '\u06BA';
					rLen = false;
					break;
				}
				var lastItem = itemsDots[r].length - 1;
				result = result + itemsDots[r][lastItem];
				rLen = false;
				break;
			}
			rLen = true;
		}
		if (rLen == true){
			result = result + text.charAt(i);
			rLen = true;
		}
	}
	return result;
}

function copyFunction(res_id, btn_id) {
	const text = document.getElementById(res_id).value;
	const textToCopy = text;
	navigator.clipboard.writeText(textToCopy).then(() => {
		document.getElementById(btn_id).style.color = "#000";
		document.getElementById(btn_id).innerHTML = "تمّ النسخ";
		document.getElementById(btn_id).disabled = true;
		var delayInMilliseconds = 1500;
		setTimeout(function() {
			document.getElementById(btn_id).style.color = "#0d6efd";
			document.getElementById(btn_id).innerHTML = "نسخ النص";
			document.getElementById(btn_id).disabled = false;
		}, delayInMilliseconds);
	})
	.catch((error) => {
		 alert("لا يمكن النسخ، من فضلك افتح متصفح آخر، أو قم بتحديد النص ونسخه.");
	})
}
