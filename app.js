function addItem() {
	var div = document.createElement("div");
	div.className = "itemrow";
	div.innerHTML = '<input type="text" class="itemname" placeholder="Item name"> <input type="text" class="itemamount" placeholder="0.00">';
	document.getElementById("items").appendChild(div);
}

function splitBill() {
	var total = document.getElementById("total").value;
	var people = document.getElementById("people").value;
	var tip = document.getElementById("tip").value;

	total = parseFloat(total);
	people = parseInt(people);
	tip = parseFloat(tip);

	// if items are filled in use those instead
	var amounts = document.getElementsByClassName("itemamount");
	var itemSum = 0;
	var hasItems = false;
	for (var i = 0; i < amounts.length; i++) {
		var a = parseFloat(amounts[i].value);
		if (!isNaN(a) && a > 0) {
			itemSum = itemSum + a;
			hasItems = true;
		}
	}
	if (hasItems) {
		total = itemSum;
	}

	var tipAmount = total * (tip / 100);
	var grandTotal = total + tipAmount;
	var perPerson = grandTotal / people;

	var out = "";
	out += "Tip Amount: $" + tipAmount + "<br>";
	out += "Grand Total: $" + grandTotal + "<br>";
	out += "Per Person: $" + perPerson;

	document.getElementById("results").innerHTML = out;
}
