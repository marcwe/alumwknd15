<!-- 20140318 -->
<% 
if date() > cdate("5/27/2014") then
response.redirect("closed.html")
end if
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Registration</title>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" >
  <script type ="text/javascript">
  




CSStopExecution = false;

		function CSAction(array) {
			return CSAction2(CSAct, array);
		}
		
		function CSAction2(fct, array) {
			var result;
			for (var i=0;i<array.length;i++) {
				if(CSStopExecution) return false;
				var actArray = fct[array[i]];
				var tempArray = new Array;
				for(var j=1;j<actArray.length;j++) {
					if((actArray[j] != null) && (typeof(actArray[j]) == "object") && (actArray[j].length == 2)) {
						if(actArray[j][0] == "VAR") {
							tempArray[j] = CSStateArray[actArray[j][1]];
						}
						else {
							if(actArray[j][0] == "ACT") {
								tempArray[j] = CSAction(new Array(new String(actArray[j][1])));
							}
						else
							tempArray[j] = actArray[j];
						}
					}
					else
						tempArray[j] = actArray[j];
				}
				result = actArray[0](tempArray);
			}
			return result;
		}
		CSAct = new Object;
		CSAg = window.navigator.userAgent; CSBVers = parseInt(CSAg.charAt(CSAg.indexOf("/")+1),10);
		function IsIE() { return CSAg.indexOf("MSIE") > 0;}
		function CSIEStyl(s) { return document.all.tags("div")[s].style; }
		function CSNSStyl(s) { return CSFindElement(s,0); }
		function CSFindElement(n,ly) { if (CSBVers < 4) return document[n];
			var curDoc = ly ? ly.document : document; var elem = curDoc[n];
			if (!elem) { for (var i=0;i<curDoc.layers.length;i++) {
				elem = CSFindElement(n,curDoc.layers[i]); if (elem) return elem; }}
			return elem;
		}
		function CSSetImageURL(action) {
			var img = null;
			if (document.images) {
				if (!IsIE()) img = CSFindElement(action[1],0);
				else img = document.images[action[1]];
				if (img) img.src = action[2];
			}
		}












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
				//objForm.action = "https://www.pcom.edu/asp/sendmail.asp";
				alert('Please call 800 739 3939.  Your transaction amount is '+ objForm.transactionamount2.value);
				return (false);
				
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


function checkCard(objForm){
 if (objForm.accountNumber.value == "" || isNaN(objForm.accountNumber.value))
 {alert('Please enter valid Credit Card Number');
 objForm.accountNumber.focus();
 }
 else{
	objForm.Submit.disabled=false;
 }
}	



  
  
function updatePrice(objForm){

			var total=0;
			var orderstring = '';
			var subtotal=0;
			var transactionamount = '';
			var transactionamount2 = 0;
			
			
//			alert(total);
			
			
			if(objForm.classYear.value.length < 4 || isNaN(objForm.classYear.value)) 
			 {
			 
				alert("Please enter a valid four digit class year.");
				objForm.classYear.focus();
				return false;
		  	 }
			 
//mw			 document.getElementById("message").innerHTML = 'test';
			 
			 document.formRegister.FFBTotal.value = fixInt(objForm.FFBQuantity) * fixInt(objForm.FFBItemCost);
			 
			 
			 if (isCompDinnerDance(document.formRegister.classYear)==true) {
			document.getElementById("message").innerHTML = '? Complimentary Tickets for Class of 1963';
			
				if(fixInt(document.formRegister.FFBQuantity) >= 2){
					document.getElementById("message").innerHTML = '2 Complimentary Tickets for Class of 1963';
					subtotal = (fixInt(document.formRegister.FFBItemCost) *	fixInt(document.formRegister.FFBQuantity));
					total = subtotal - 50;
					document.formRegister.FFBTotal.value = total;
					
					}
					
				if(fixInt(document.formRegister.FFBQuantity) == 1) {
					document.getElementById("message").innerHTML = '1 Complimentary Ticket for Class of 1963';
					subtotal = (fixInt(document.formRegister.FFBItemCost) *	fixInt(document.formRegister.FFBQuantity));
					total =  0;
					document.formRegister.FFBTotal.value = total;
					}	
			
			}
			
			
			if (isCompDinnerDance(document.formRegister.classYear)==false){
						document.getElementById("message").innerHTML = '';
						
						document.formRegister.FFBTotal.value = (fixInt(document.formRegister.FFBItemCost) *	fixInt(document.formRegister.FFBQuantity));
						total = total + fixInt(document.formRegister.FFBTotal);
						

						
						
						
						}
						
			 
			
			document.formRegister.transactionamount2.value = total;  // FFBTotal
			 

			document.formRegister.Total3.value = (fixInt(document.formRegister.Total3ItemCost) * fixInt(document.formRegister.Total3Quantity));
			total = total + fixInt(document.formRegister.Total3);
			document.formRegister.transactionamount2.value = total;  // FFBTotal and Total3



			document.formRegister.RDDTotal.value = (fixInt(document.formRegister.RDDItemCost) * fixInt(document.formRegister.RDDQuantity));
			total = total + fixInt(document.formRegister.RDDTotal);
			document.formRegister.transactionamount2.value = total;  // FFBTotal and Total3 and RDDTotal
			
			


			document.formRegister.CBTotal.value = (fixInt(document.formRegister.CBTotal));
			total = total + fixInt(document.formRegister.CBTotal);
			document.formRegister.transactionamount2.value = total;  // FFBTotal and Total3 and RDDTotal and CB
			
			
			
			orderstring = '';

			orderstring =  document.formRegister.FFBItemNumber.value + '~' + document.formRegister.FFBItemDescription.value + '~' + document.formRegister.FFBItemCost.value + '~' + document.formRegister.FFBQuantity.value + '~N~||';

			orderstring =  orderstring +  document.formRegister.Total3ItemNumber.value + '~' + document.formRegister.Total3ItemDescription.value + '~' + document.formRegister.Total3ItemCost.value + '~' + document.formRegister.Total3Quantity.value + '~N~||';
			
			orderstring =  orderstring +  document.formRegister.ChildItemNumber.value + '~' + document.formRegister.ChildItemDescription.value + '~' + document.formRegister.ChildItemCost.value + '~' + document.formRegister.ChildQuantity.value + '~N~||';
			
			orderstring =  orderstring +  document.formRegister.RDDItemNumber.value + '~' + document.formRegister.RDDItemDescription.value + '~' + document.formRegister.RDDItemCost.value + '~' + document.formRegister.RDDQuantity.value + '~N~||';
			
			orderstring =  orderstring +  document.formRegister.CBItemNumber.value + '~' + document.formRegister.CBItemDescription.value + '~' + document.formRegister.CBTotal.value + '~' + document.formRegister.CBQuantity.value + '~N~||';




//mw   orderstring =  orderstring + objForm.ItemNumber[a].value + '~' + objForm.ItemDescription[a].value + '~' + objForm.ItemCost[a].value + '~' + (fixInt(objForm.Quantity[a])) + '~N~||';

//mw			orderstring = orderstring +  "Description: "+  document.formRegister.FFBItemDescription.value  + "\n" + "Price: " +document.formRegister.FFBItemCost.value  + "\n"+ "Quantity: " + document.formRegister.FFBQuantity.value + "\n" + "Taxable:  N" + "\n";

//mw				orderstring = orderstring +  "Description: "+    + "\n" + "Price: " +  + "\n"+ "Quantity: " +  + "\n" + "Taxable:  N" + "\n";
			
			
			transactionamount = document.formRegister.transactionamount2.value.toString();
//			alert(orderstring + transactionamount2 + total + 'end');
			
//mw debug			alert(total);
//mw debug			alert("total");
//mw debug			alert(orderstring);
//mw debug			alert("orderstring");

			document.formRegister.comment.value = "\r\nClass Year: " + document.formRegister.classYear.value + "\r\nGuests:\r\n" + document.formRegister.guest1.value + "\r\n" + document.formRegister.guest2.value + "\r\n" + document.formRegister.guest3.value + "\r\n" + document.formRegister.guest4.value;
			document.formRegister.transactionamount2.value = total;
			document.formRegister.transactionamount.value = transactionamount + '.00';
//mw debug			alert(document.formRegister.transactionamount.value);
//mw debug			alert("transactionamount");
//mw debug			alert(document.formRegister.comment.value);
//mw debug			alert("comment");
			document.formRegister.orderstring.value = orderstring;		
			//alert(orderstring + total);
	}

  function testorder(objForm){
         alert(objForm.orderstring.value + " " + objForm.transactionamount.value);
  
  }			
			
			
			
			
			
			 
			 
function isCompDinnerDance(objFormItem)
		{
			if(objFormItem.value == "1964") return true;
			/*else {
				var str = objFormItem.value;
				var match = str.match(/19[45][05]/);			
				if (match != null && match != '') return true;
				alert(match);
			}*/
			return false;
		}	
		
	function fixInt(objFormItem) 
		{
			if(isNaN(objFormItem.value))
			{
				return(0);
			}
			return(parseInt(objFormItem.value));
	    }





  
  
  
  
  
  
  
  
  
  </script>
<link rel="stylesheet" type="text/css" href="style/pcom2009.css">


	<style> <!-- span.registerheader { color: #330066; font-size: 11px; font-family: Verdana }
	span.registerheaderbold { color: #330066; font-weight: bold; font-size: 11px; font-family: Verdana }
	span.registerheaderdayname { color: #330066; font-style: italic; font-weight: bold; font-size: 11px; font-family: Verdana }
	span.registertextbold { color: #330066; font-weight: bold; font-size: 11px; font-family: Verdana }
	td.registerstep { color: #330066; font-weight: bold; font-size: 11px; font-family: Verdana }
	td.registertextbold { color: #330066; font-weight: bold; font-size: 11px; font-family: Verdana }
	td.registertextnormal { color: #330066; font-size: 11px; font-family: Verdana }
	--></style>


</head>

<body>
<div id="container">
	<div id="header"></div>
	<div id="mainContainer">
		
			<div id="navigation">
			
			<li><a href="index.html">Home</a></li>
			<li><a href="https://miswebmaster.easycgi.com/alumwknd14/register2.asp">Registration</a></li>
			<li><a href="events.html">Schedule of Events</a></li>
			<li><a href="cme.html">CME Seminars</a></li>
			<li><a href="hotel.html">Hotel Accommodations</a></li>
			<li><a href="phila.html">Visiting Philadelphia</a></li>
			
		</div>        
		
	      <div id="titleEvent"><img src="images2/title-registration.jpg"></div>
	
	<div id="content">
	
  	<form name="formRegister" action="https://www.skipjackic.com/scripts/evolvcc.dll?Authorize"
  																			method="post"> <!--000068625568-->
  		<input type="hidden" name="serialnumber" value="000068625568"> <input type="hidden" name="ordernumber">
  		<input type="hidden" name="transactionamount"> <input type="hidden" name="orderstring">
  		<input type="hidden" name="comment"> <input type="hidden" name="mailto" value="connie@pcom.edu,marcwe@pcom.edu">
  		<input type="hidden" name="mailfrom" value="connie@pcom.edu"> <input type="hidden" name="subject" value="Alumni signed up for Alumni Weekend">
  		<input type="hidden" name="URL" value="http://www.pcom.edu/alumwknd14/noChargeThanks.html">
  		<input type="hidden" name="dateToday" value="<%=Date()%>">
  		
  		<div class="firstTitle">	Please complete the form below to register for Reunion Weekend 2013.</div>
  		<div class="thirdBlueTitle"> A confirmation email will be sent to you upon receipt of your registration.<br>
			<font color="#f99d31">* Indicates required fields</font>    <br/>
      <b>REGISTRATION DEADLINE: Friday, May 24, 2013</b>
      </div>
      
      <div class="secondRedTitle">Step 1: Personal Information </div>
      <div class="thirdBlueTitle">
      <table>
          <tr><td><b>Name: <font color="#f99d31">*</font></b></td><td><input type="text" name="sjname" size="20" > <!-- <input type="radio" name="Comment" value="DO">DO
																									<input type="radio" name="Comment" value="RN">RN --></td></tr>
			   <tr><td><b>Class Year: <font color="#f99d31">*</font></b>&nbsp;(YYYY)</td><td><input type="text" name="classYear" id="classYear" size="4" maxlength="4" onChange="updatePrice(this.form);"></td></tr>
          <tr>
																								<td class="list">
																									<b>Address: <font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<input type="text" name="Streetaddress" size="20" onChange="updatePrice(this.form);" >
																									<br>
																									<input type="text" name="Streetaddress2" size="20" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1" alt="" border="0" /></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>City:&nbsp;<font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<input type="text" name="City" size="20" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>State: <font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<select name="State" size="1">
																										<option value="" selected>
																										<option value="AL">
																										Alabama
																										<option value="AK">
																										Alaska
																										<option value="AZ">
																										Arizona
																										<option value="AR">
																										Arkansas
																										<option value="CA">
																										California
																										<option value="CO">
																										Colorado
																										<option value="CT">
																										Connecticut
																										<option value="DE">
																										Delaware
																										<option value="DC">
																										Dist. of Columbia
																										<option value="FL">
																										Florida
																										<option value="GA">
																										Georgia
																										<option value="GU">
																										Guam
																										<option value="HI">
																										Hawaii
																										<option value="ID">
																										Idaho
																										<option value="IL">
																										Illinois
																										<option value="IN">
																										Indiana
																										<option value="IA">
																										Iowa
																										<option value="KS">
																										Kansas
																										<option value="KY">
																										Kentucky
																										<option value="LA">
																										Louisiana
																										<option value="ME">
																										Maine
																										<option value="MD">
																										Maryland
																										<option value="MA">
																										Massachusetts
																										<option value="MI">
																										Michigan
																										<option value="MN">
																										Minnesota
																										<option value="MS">
																										Mississippi
																										<option value="MO">
																										Missouri
																										<option value="MT">
																										Montana
																										<option value="NE">
																										Nebraska
																										<option value="NV">
																										Nevada
																										<option value="NH">
																										New Hampshire
																										<option value="NJ">
																										New Jersey
																										<option value="NM">
																										New Mexico
																										<option value="NY">
																										New York
																										<option value="NC">
																										North Carolina
																										<option value="ND">
																										North Dakota
																										<option value="OH">
																										Ohio
																										<option value="OK">
																										Oklahoma
																										<option value="OR">
																										Oregon
																										<option value="PA">
																										Pennsylvania
																										<option value="PR">
																										Puerto Rico
																										<option value="RI">
																										Rhode Island
																										<option value="SC">
																										South Carolina
																										<option value="SD">
																										South Dakota
																										<option value="TN">
																										Tennessee
																										<option value="TX">
																										Texas
																										<option value="UT">
																										Utah
																										<option value="VT">
																										Vermont
																										<option value="VA">
																										Virginia
																										<option value="VI">
																										Virgin Islands
																										<option value="WA">
																										Washington
																										<option value="WV">
																										West Virginia
																										<option value="WI">
																										Wisconsin
																										<option value="WY">Wyoming</option>
																									</select>
																								</td>
																							</tr>
									<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Zip: <font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<input type="text" name="Zipcode" size="9" onChange="updatePrice(this.form);" ></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Home Phone:&nbsp;<font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<input type="text" name="Shiptophone" size="12" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Office Phone:</b></td>
																								<td class="list">
																									<input type="text" name="officephone" size="12" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Email Address: <font color="#f99d31">*</font></b></td>
																								<td class="list">
																									<input type="text" name="Email" size="20" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Spouse/Guest Name(s):</b></td>
																								<td class="list">
																									<input type="text" name="guest1" size="20" onChange="updatePrice(this.form);">
																									<br>
																									<input type="text" name="guest2" size="20" onChange="updatePrice(this.form);">
																									<br>
																									<input type="text" name="guest3" size="20" onChange="updatePrice(this.form);">
																									<br>
																									<input type="text" name="guest4" size="20" onChange="updatePrice(this.form);">
																									<br>
																								</td>
																							</tr>
      </table>
      </div>
      <div class="secondRedTitle">Step 2: Event Information</div>
	    <div class="thirdBlueTitle">
	    <table >
                     <tr>
																								<td class="listColumnHeader2"  style="color:#000">
																									<b>Friday, May 30, 2014</b></td>
																								<td class="listColumnHeader2">
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr>
																								<td class="list" colspan=2>
																									<b>Reunion Luncheon for the Classes of 1964, 1959, 1954, 1949, 1944<br /></b>
																								</td>
																								
																								<td class="list">&nbsp;
																								</td>
																								<td class="list">&nbsp;
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr>
																								<td class="listIndent">
																									<input type="hidden" name="FFBItemNumber" value="1"> 
																									<input type="hidden" name="FFBItemDescription" value="Reunion Luncheon for - 1964, 1959, 1954, 1949, 1944">
																									<input type="hidden" name="FFBItemCost" value="25.00"> Adult: $25 per person 
                                                    <div style="COLOR: red" id="message" name="message">
																									</div></td>
																								<td class="listCenter2">
																									<strong>Adults:</strong>
																								</td>
																								<td class="listCenter">
																									<input type="text" size="4" name="FFBQuantity" value="0" onChange="updatePrice(this.form);"
																										onfocus="this.select();"></td>
																								<td class="listCenter">
																									$ <input type="text" size="4" name="FFBTotal" value="0" disabled> .00</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																						<!--	<tr>
																								<td class="listIndent">
																									<i>This goes Children 12 and under are complimentary</i></td>
																								<td class="listCenter2">
																									<strong>Children:</strong>
																								</td>
																								<td class="listCenter">
																									<input type="hidden" name="ItemNumber" value="2">
																									<input type="hidden" name="ItemDescription" value="Reunion Luncheon - Children Complimentary" ID="Hidden5">
																									<input type="hidden" name="ItemCost" value="0" ID="Hidden6">
																									<input name="Quantity" type="text" id="Quantity" value="0" size="4" onChange="updatePrice(this.form);"></td>
																								<td class="listCenter">&nbsp;
																								</td>
																							</tr>   -->
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr><td colspan="4">&nbsp;</td></tr>
																							 <tr>
																								<td class="listColumnHeader2" style="color:#000">
																									<b>Saturday, May 31, 2014</b></td>
																								<td class="listColumnHeader2">
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																							</tr>
																							<tr>
																								<td class="list" colspan=4>
																									<b>Alumni & Family Luncheon and Campus Open House</b></td>
																							</tr>
																							<tr>
																								<td class="listIndent">
																									<input type="hidden" name="Total3ItemNumber" value="2"> 
																									<input type="hidden" name="Total3ItemDescription" value="The PCOM Open House">
																									<input type="hidden" name="Total3ItemCost" value="5.00"> Adult: $5 per person</td>
																								<td class="listCenter2">
																									<strong>Adults:</strong>
																								</td>
																								<td class="listCenter">
																									<input type="text" size="4" name="Total3Quantity" value="0" onChange="updatePrice(this.form);"
																										onfocus="this.select();"></td>
																								<td class="listCenter">
																									$ <input type="text" size="4" name="Total3" value="0" disabled> .00</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr>
																								<td class="listIndent">
																									<i>Children 12 and under are complimentary</i></td>
																								<td class="listCenter2">
																									<strong>Children:</strong>
																								</td>
																								<td class="listCenter">
																									<input type="hidden" name="ChildItemNumber" value="3">
																									<input type="hidden" name="ChildItemDescription" value="The PCOM Open House-Children" ID="Hidden5">
																									<input type="hidden" name="ChildItemCost" value="0" ID="Hidden6">
																									<input name="ChildQuantity" type="text" id="Quantity" value="0" size="4" onChange="updatePrice(this.form);"></td>
																								<td class="listCenter">&nbsp;
																								</td>
																							</tr>
																							<tr><td colspan=4>&nbsp;</td></tr>
																							<tr>
																								<td class="list" colspan=4>
																									<b>Reunion Grand Reception for ALL Reunion Classes<br /></b></td>
																								
																							
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr>
																								<td class="listIndent">
																									<input type="hidden" name="RDDItemNumber" value="4"> <input type="hidden" name="RDDItemDescription" value="Reunion Grand Reception">
																									<input type="hidden" name="RDDItemCost" value="55.00"> Adults: $55 per person<br>
																								
																								</td>
																								<td class="listCenter2">
																									<strong>Adults:</strong>
																								</td>
																								<td class="listCenter">
																									<input type="text" size="4" name="RDDQuantity" value="0" onChange="updatePrice(this.form);"
																										onfocus="this.select();"></td>
																								<td class="listCenter">
																									$ 
																									  <input type="text" size="4" name="RDDTotal" value="0" disabled> 
																								  .00</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr><td colspan="4">&nbsp;</td></tr>
																								<tr>
																								<td class="listColumnHeader2"  style="color:#000">
																									<b>Reunion Giving Program</b></td>
																								<td class="listColumnHeader2">
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																								<td class="listColumnHeader2">&nbsp;
																								</td>
																							</tr>
																							<tr>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																								</td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																								<td>
																									<img src="images/spacer.gif" width="1" height="1"></td>
																							</tr>
																							<tr>
																								<td class="listIndent">
																									<input type="hidden" name="CBItemNumber" value="5"> <input type="hidden" name="CBItemDescription" value="I would like to celebrate my reunion with a gift">
																									<input type="hidden" name="GiftItemCost" value="0"> <input type="hidden" name="CBQuantity" value="1" id="Hidden4">
																									<b>I would like to celebrate my reunion with a gift of:</b></td>
																								<td class="listCenter">
																								</td>
																								<td class="listCenter">
																								</td>
																								<td class="listCenter">
																									$ <input type="text" size="4" name="CBTotal" value="0" onChange="updatePrice(this.form);"
																										onfocus="this.select();"> .00</td>
																							</tr>
																							<tr>
																								<td colspan="4">
																									<img height="5" width="5" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list2" colspan="3" align="right">
																									<b>TOTAL AMOUNT ENCLOSED:</b></td>
																								<td class="listCenter">
																									$ <input type="text" name="transactionamount2" size="4" value="0" disabled> .00</td>
																							</tr>
      </table>
	    </div>
	   <div class="secondRedTitle">Step 3: Payment Information</div>   
	   <div class="thirdBlueTitle">
	   <table>
	   <tr>
																								<td class="listCenter" colspan="4">
																									<table border="0" cellpadding="0" cellspacing="0">
																										<tr>
																											<td>
																												<b>We Accept: </b>
																											</td>
																											<td>
																												<img height="45" width="202" src="images/creditcards.gif"></td>
																										</tr>
																									</table>
																								</td>
																							</tr>
     <tr>
																								<td class="list">
																									<b>Card Number:</b></td>
																								<td class="list" colspan="3">
																									<input type="text" name="accountNumber" onChange="checkCard(this.form); updatePrice(this.form);"  size="30"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Expiration Date:</b></td>
																								<td class="list">
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
																									/
																									<select name="year" size="1">
																										<option value="" selected>
																									
																										
																										
																										<option value="12">12</option>
																											<option value="13">13</option>
																												<option value="14">14</option>
																													<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>	
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
																								</select>
																								</td>
																								<td class="list">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
																									<strong>Security Code:</strong></td>
																								<td class="list">
																									<input type="text" name="SecurityCode" maxlength="4" size="5"></td>
																							</tr>
																							<tr>
																								<td class="list">
																								</td>
																								<td class="list">
																								</td>
																								<td class="listIndent" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;<i>3-digit for Visa/MC; 4-digit for AMEX</i></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
																							<tr>
																								<td class="list">
																									<b>Cardholder's Name:</b></td>
																								<td class="list" colspan="3">
																									<input type="text" name="CardholderName" size="30" onChange="updatePrice(this.form);"></td>
																							</tr>
																							<tr>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																								<td>
																									<img height="1" width="1" border="0" src="images/spacer.gif"></td>
																							</tr>
                                              <tr>
																					<td align="center" colspan="4">    <br/>
																						<input type="button" name="Submit" value="Submit Registration Form" disabled onClick="verifyForm(this.form);"
																							id="Button1"></td>
																				</tr>
                                              
                                              </table>
     </div>
	    
	  </form>
  
  </div>
	 	<div id="btmCorner"></div>
	
			</body>
</HTML>
