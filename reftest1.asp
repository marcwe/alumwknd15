<html>
<head>
<title>Registration</title>
<script type ="text/javascript">

function verifyForm(objForm){

	if(objForm.sjname.value.length < 5) {
			alert("Please enter your full name.");
			objForm.sjname.focus();
			return(false);
		}
	
	if(objForm.classYear.value.length < 4 || isNaN(objForm.classYear.value)) {
		alert("Please enter a valid four digit class year.");
		objForm.classYear.focus();
		return(false);
	}
	
	
	if(objForm.Streetaddress.value.length < 4) {
		alert("Please enter a valid Street Address.");
		objForm.Streetaddress.focus();
		return(false);
	}
	if(objForm.City.value.length < 5) {
			alert("Please enter your City.");
			objForm.City.focus();
			return(false);
		}

		if(objForm.State.selectedIndex == 0) {
			alert("Please select a State.");
			objForm.State.focus();
			return(false);
		}

		if(objForm.Zipcode.value.length < 5) {
			alert("Please enter a valid zipcode.");
			objForm.Zipcode.focus();
			return(false);
		}

		if(objForm.Shiptophone.value.length < 10) {
			alert("Please enter a valid home phone Number.");
			objForm.Shiptophone.focus();
			return(false);
		}

		if(objForm.Email.value.length < 5) {
			alert("Please enter a valid Email address.");
			objForm.Email.focus();
			return(false);
		}
		//if(parseInt(objForm.transactionamount2.value) == 0 && !is52(objForm.classYear)) {
			//	alert("You have not selected any events to attend, please do so.");
			//	objForm.Quantity[0].focus();
			//	return(false);
			//}

			if(objForm.accountNumber.value.length < 7 && parseInt(objForm.transactionamount2.value) != 0) {
				alert("Please enter a credit card number.");
				objForm.accountNumber.focus();
				return(false);
			}

			if(objForm.month.selectedIndex == 0 && parseInt(objForm.transactionamount2.value) != 0) {
				alert("Please select a credit card expiration month.");
				objForm.month.focus();
				return(false);
			}

			if(objForm.year.selectedIndex == 0 && parseInt(objForm.transactionamount2.value) != 0) {
				alert("Please select a credit card expiration year.");
				objForm.year.focus();
				return(false);
			}

			if(objForm.transactionamount2.value == 0) 
			{
				//User is not buying anything, submit form to another page.
				//document.formRegister.action = "https://miswebmaster.easycgi.com/asp/sendmail.asp";
				//  mw  alert('Your transaction amount is '+ objForm.transactionamount2.value);
				//mw return (false);
			}
			
			if(objForm.SecurityCode.value.length < 3) {
				alert("Please enter a security code.");
				objForm.SecurityCode.focus();
				return(false);
			}
			
			if(objForm.CardholderName.value=="") {
				alert("Please enter card holder's name.");
				objForm.CardholderName.focus();
				return(false);
			}
		/*	if(objForm.CardholderSignature.value=="") {
				alert("Please enter Cardholder's Signature.");
				objForm.CardholderSignature.focus();
				return(false);
			}*/
			objForm.submit();
}

//function zeroCheck(objFormItem){
		
//		if(objForm.transactionamount2.value == 0) 
			{
				//User is not buying anything, submit form to another page.
//				document.formRegister.action = "https://miswebmaster.easycgi.com/asp/sendmail.asp";
				//alert('Your transaction amount is '+ objForm.transactionamount2.value);
				
//				}else{
//				defAction(url);
//				return (false);
//		}
		
	function defAction(url) {
		document.formRegister.action = "https://www.skipjackic.com/scripts/evolvcc.dll?Authorize";
		}
  
 </script>



 <script>
	window.onload = defAction;
	</script>
</head>









<form name="formRegister" action=""	method="post">



<b>Expiration Date:</b>
	
<select name="month" size="1">
	<option value="" selected>
	<option value="01">
	01
	<option value="02">
	02
	<option value="03">
	03
	<option value="04">
	04
	<option value="05">
	05
	<option value="06">
	06
	<option value="07">
	07
	<option value="08">
	08
	<option value="09">
	09
	<option value="10">
	10
	<option value="11">
	11
	<option value="12">12</option>
</select>

<br>



	<input type="button" name="Submit" value="Submit Registration Form" disabled onClick="verifyForm(this.form);"id="Button1">
	
		</body>
</HTML>
