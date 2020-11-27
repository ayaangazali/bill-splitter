function addItem() {
	var div = document.createElement("div");
	div.className = "itemrow";
	div.innerHTML = '<input type="text" class="itemname" placeholder="Item name"> <input type="text" class="itemamount" placeholder="0.00">';
	document.getElementById("items").appendChild(div);
}

function sumItems() {
	var amounts = document.getElementsByClassName("itemamount");
	var itemSum = 0;
	var count = 0;
	for (var i = 0; i < amounts.length; i++) {
		var a = parseFloat(amounts[i].value);
		if (!isNaN(a) && a > 0) {
			itemSum = itemSum + a;
			count = count + 1;
		}
	}
	return { sum: itemSum, count: count };
}

function splitBill() {
	var total = document.getElementById("total").value;
	var people = document.getElementById("people").value;
	var tip = document.getElementById("tip").value;

	total = parseFloat(total);
	people = parseInt(people);
	tip = parseFloat(tip);

	// if items are filled in use those instead
	var items = sumItems();
	if (items.count > 0) {
		total = items.sum;
	}

	if (isNaN(total) || total <= 0) {
		alert("Please enter a valid total bill amount");
		return;
	}
	if (isNaN(people) || people <= 0) {
		alert("Please enter a valid number of people");
		return;
	}
	if (isNaN(tip) || tip < 0) {
		tip = 0;
	}

	var tipAmount = total * (tip / 100);
	var grandTotal = total + tipAmount;
	var perPerson = grandTotal / people;

	var out = "";
	out += "Tip Amount: $" + tipAmount.toFixed(2) + "<br>";
	out += "Grand Total: $" + grandTotal.toFixed(2) + "<br>";
	out += "Per Person: $" + perPerson.toFixed(2);

	document.getElementById("results").innerHTML = out;
}
