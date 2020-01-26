function splitBill() {
	var total = document.getElementById("total").value;
	var people = document.getElementById("people").value;

	total = parseFloat(total);
	people = parseInt(people);

	var perPerson = total / people;

	document.getElementById("results").innerHTML = "Per Person: $" + perPerson;
}
