const keys = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};

function encryptText() {
	const input = document.getElementById("input").value;
	const output = encrypt(input);
	if (input) {
		document.getElementById("result").style.display = "none";
		document.getElementById("output").style.display = "block";
		document.getElementById("btncopy").style.display = "block";
	} else {
		document.getElementById("result").style.display = "block";
		document.getElementById("output").style.display = "none";
		document.getElementById("btncopy").style.display = "none";
	}
	document.getElementById("output").value = output;
}

function decryptText() {
	const input = document.getElementById("input").value;
	const output = decrypt(input);
	if (input) {
		document.getElementById("result").style.display = "none";
		document.getElementById("output").style.display = "block";
		document.getElementById("btncopy").style.display = "block";
	} else {
		document.getElementById("result").style.display = "block";
		document.getElementById("output").style.display = "none";
		document.getElementById("btncopy").style.display = "none";
	}
	document.getElementById("output").value = output;
}

function encrypt(text) {
	let result = "";

	for (let i = 0; i < text.length; i++) {
		const char = text.charAt(i);

		if (keys[char]) {
			result += keys[char];
		} else {
			result += char;
		}
	}

	return result;
}

function decrypt(text) {
	const keysArray = Object.entries(keys);
	let result = text;
	keysArray.forEach(([key, value]) => {
		const regex = new RegExp(value, "g");
		result = result.replace(regex, key);
	});
	return result;
}

function copy() {
	const output = document.getElementById("output");

	output.select();
	output.setSelectionRange(0, 99999);

	document.execCommand("copy");
}
