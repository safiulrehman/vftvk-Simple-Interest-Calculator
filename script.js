function compute()
{

var principal,num_of_year,rate,total,amount;
principal = document.getElementById ("principal").value;
num_of_year = document.getElementById ("years").value;
rate = document.getElementById ("rate").value;

if(principal=='' || rate=='' ||num_of_year==''){
	alert('Please fill the values.');
	document.getElementById("principal").focus();
}
else if(principal <= 0 ){
	alert('Please enter a positive number.');
	document.getElementById("principal").focus();
}
else{
total = parseInt((principal*num_of_year*rate)/100 );
amount = principal*Math.pow((1 +rate/100),num_of_year );

const date = new Date(new Date().setFullYear(new Date().getFullYear() + (+num_of_year)));
let year = date.getFullYear();

document.getElementById ('amnt').innerHTML ="If you deposit "+principal+",<br>";
document.getElementById ('rat').innerHTML ="at an interest rate of : "+rate+"%.<br>";
document.getElementById ('total').innerHTML ="You will receive an amount of "+total+",<br>";
document.getElementById ('nextyear').innerHTML ="in the year "+year;
}
}

function SetDefaultValue() {
var PopulateField = document.getElementById("sliderselect").value="10.50";
}	
window.onload = function(){
    SetDefaultValue();
};


        