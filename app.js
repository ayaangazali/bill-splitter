function splitBill() {
	var total = document.getElementById("total").value;
	var people = document.getElementById("people").value;
	var tip = document.getElementById("tip").value;

	total = parseFloat(total);
	people = parseInt(people);
	tip = parseFloat(tip);

	var tipAmount = total * (tip / 100);
	var grandTotal = total + tipAmount;
	var perPerson = grandTotal / people;

	var out = "";
	out += "Tip Amount: $" + tipAmount + "<br>";
	out += "Grand Total: $" + grandTotal + "<br>";
	out += "Per Person: $" + perPerson;

	document.getElementById("results").innerHTML = out;
}
