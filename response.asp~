
<%
  '//================================================================================
  '// Declaration of variables
  '//================================================================================
  dim strSerialNumber, strTransactionAmount, strAuthorizationResponseCode
  dim strAuthorizationDeclinedMessage, strAVSResponseCode, strAVSResponseMessage
  dim strCVV2ResponseCode, strCVV2ResponseMessage
  dim strOrderNumber, strReturnCode, strErrorMessage
  dim strsjname, strStreetaddress, strCity, strState, strZipcode, strShipToZip
  dim strAccountnumber, strOrderstring, strComment, strMerchantName
  dim strTransactionDate, strCustomerNumber, strInvoiceNumber, strPurchaseOrderNumber
  dim strItemAmount, strCustomerTax, strShippingAmount

  '//================================================================================
  '// Read in posted variables
  '//================================================================================
  strSerialNumber                    = Request("szSerialNumber")
  strTransactionAmount               = Request("szTransactionAmount")
  strAuthorizationResponseCode       = Request("szAuthorizationResponseCode")
  strAuthorizationDeclinedMessage    = Request("szAuthorizationDeclinedMessage")
  strAVSResponseCode                 = Request("szAVSResponseCode")
  strAVSResponseMessage              = Request("szAVSResponseMessage")
  strCVV2ResponseCode                = Request("szCVV2ResponseCode")
  strCVV2ResponseMessage             = Request("szCVV2ResponseMessage")
  strOrderNumber                     = Request("szOrderNumber")
  strReturnCode	                     = Request("szReturnCode")
  strsjname                          = Request("sjName")
  strStreetaddress                   = Request("Streetaddress")
  strCity                            = Request("City")
  strState                           = Request("State")
  strZipcode                         = Request("Zipcode")
  strShipToZip                       = Request("ShipToZip")
  strTransactionamount               = Request("Transactionamount")
  strOrderstring                     = Request("Orderstring")
  strShiptophone                     = Request("Shiptophone")
  strComment                         = Request("Comment")
  
  strMerchantName                    = Request("MerchantName")
  strTransactionDate                 = Date()
  strCustomerNumber                  = Request("CustomerNumber")
  strInvoiceNumber                   = Request("InvoiceNumber")
  strPurchaseOrderNumber             = Request("PurchaseOrderNumber")
  strCompanyName                     = Request("CompanyName")
  
  strItemAmount                      = Request("ItemAmount")
  strCustomerTax                     = Request("CustomerTax")
  strShippingAmount                  = Request("ShippingAmount")
  
  szIsApproved                       = Request("szIsApproved")
  
  strErrorMessage                    = ""  '--- Displayed error message
  strDiplayType                      = ""  '--- Defines which message type to display
%>
<%
if ( strReturnCode = "1" ) then
 
'--  if ( ((Trim(strAuthorizationResponseCode))="") OR (strAuthorizationResponseCode = "EMPTY") ) then

  if ( szIsApproved = "0" ) then

    if ( instr(strTransactionAmount,"-") > 0 ) then  '--- Check to see if there is a negative sign in the transaction amount filed
      strDisplayType = "BlindCredit" '--- Blind Credit
    else
      strDisplayType = "Declined"    '--- Transaction has failed authorization
    end if
      
  else
    strDisplayType = "Successful"  '--- Transaction is successful
  end if
  
else '--- strReturnCode is not equal to 1
  strDisplayType = "Invalid"
  select case strReturnCode
    case "-35" strErrorMessage = "You have entered an invalid credit card number"
    case "-37" strErrorMessage = "Failed to connect to dial-up service. The system is temporarily unavailable.<br><br>Please try again in a few minutes."
    case "-39" strErrorMessage = "The HTML serial number is empty, the incorrect length, or invalid"
    case "-51" strErrorMessage = "The zipcode is empty, the incorrect length, or invalid"
    case "-52" strErrorMessage = "The ship to zipcode is empty, the incorrect length, or invalid"
    case "-53" strErrorMessage = "The expiration is empty, the incorrect length, or invalid"
    case "-54" strErrorMessage = "The account number date empty, the incorrect length, or invalid"
    case "-55" strErrorMessage = "The streetaddress is empty, the incorrect length, or invalid"
    case "-56" strErrorMessage = "The ship to streetaddress is empty, the incorrect length, or invalid"
    case "-57" strErrorMessage = "The transaction amount is empty, the incorrect length, or invalid"
    case "-58" strErrorMessage = "The name is empty, the incorrect length, or invalid"
    case "-59" strErrorMessage = "The location is empty, the incorrect length, or invalid"
    case "-60" strErrorMessage = "The state is empty, the incorrect length, or invalid"
    case "-61" strErrorMessage = "The ship to state is empty, the incorrect length, or invalid"
    case "-62" strErrorMessage = "The orderstring is empty, the incorrect length, or invalid"
    case "-64" strErrorMessage = "The ship to phone number is invalid"
    case "-65" strErrorMessage = "The name is empty!"
    case "-66" strErrorMessage = "The email is empty!"
    case "-67" strErrorMessage = "The street address is empty!"
    case "-68" strErrorMessage = "The city field is empty!"
    case "-69" strErrorMessage = "The state field is empty!"
    case "-79" strErrorMessage = "The customer name is empty, the incorrect length, or invalid"
    case "-80" strErrorMessage = "The ship to customer name is empty, the incorrect length, or invalid"
    case "-81" strErrorMessage = "The customer location is empty, the incorrect length, or invalid"
    case "-82" strErrorMessage = "The customer state is empty, the incorrect length, or invalid"
    case "-83" strErrorMessage = "The ship to phone number is either empty, has an incorrect length, or invalid"
    case "-84" strErrorMessage = "The order number for this transaction has already been submitted.<br><br>Make sure that you haven't submitted the transaction twice."
    case "-91" strErrorMessage = "The CVV2 field value is invalid!"
    case "-92" strErrorMessage = "The Approval Code is incorrect!"
    case "-93" strErrorMessage = "Blind Credits are not allowed with this account!"
    case "-94" strErrorMessage = "Blind Credit attempt has failed!"
    case "-95" strErrorMessage = "Voice Authorization are not allowed with this account!"
  end Select
end if

'--- The below inserts the decimal point back into the TransactionAmount string after processing
'if InStr(strTransactionAmount,".") then
 ' strTransactionAmount = Left(strTransactionAmount,InStr(strTransactionAmount,".")-1) & Mid(strTransactionAmount,InStr(strTransactionAmount,".")+1,2)
'end if
'strTransactionAmount = FormatCurrency(Left(strTransactionAmount,Len(strTransactionAmount)-2) & "." & Right(strTransactionAmount,2),2)
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<!-- strDisplayType = <%=strDisplayType%>  --  <%=strtransactionamount%>  --  <%=szIsApproved%> -->
<html>
<head>
<title>Reunion Weekend </title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" type="text/css" href="style/pcom2009.css">

<!-- mw -->
<script>
function goBack()
  {
  window.history.back()
  }
</script>
<!-- mw -->


</head>

<body>
<div id="container">
	<div id="header"><a href="http://www.pcom.edu"><img src="images2/trans.gif" border="0" style="margin-left:34px;margin-top:4px"></a></div>
	<div id="mainContainer">
		
		<div id="navigation">
			
			<li><a href="index.html">Home</a></li>
			<li><a href="https://miswebmaster.easycgi.com/alumwknd14/register2.asp">Registration</a></li>
			<li><a href="events.html">Schedule of Events</a></li>
			<li><a href="seminars.html">CME Seminars</a></li>
			<li><a href="hotels.html">Hotel Accommodations</a></li>
			<li><a href="philadelphia.html">Visiting Philadelphia</a></li>
			
		</div>
		

<table width="760" border="0" cellspacing="0" cellpadding="0">
              
              <tr> 
                <td>&nbsp;</td>
                <td valign="top">
				<table width="700" border="0" cellspacing="0" cellpadding="0">
                    <tr> 
                      <td align="center" class="event"><table border="0" cellpadding="0" cellspacing="0">
                          <tr> 
                            <td> 
                              <%
						if (strDisplayType = "Successful") then
						%>
                              <center>
                                <b>Transaction Successfully Authorized<br>
                                <br>
                                Order Information:<br>
                                <br>
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tr> 
                                    <td>Transaction Date:</td>
                                    <td><%=strTransactionDate%></td>
                                  </tr>
                                  <tr> 
                                    <td>Approval Code:</td>
                                    <td><%=strAuthorizationResponseCode%></td>
                                  </tr>
                                  <tr> 
                                    <td>Transaction Amount:</td>
                                    <td><%=strTransactionAmount%></td>
                                  </tr>
                                  <tr> 
                                    <td>Order Number:</td>
                                    <td><%=strOrderNumber%></td>
                                  </tr>
                                  <tr> 
                                    <td>Cardmember Name:</td>
                                    <td><%=strsjname%></td>
                                  </tr>
                                  <tr> 
                                    <td>Street Address:</td>
                                    <td><%=strStreetaddress%></td>
                                  </tr>
                                  <tr> 
                                    <td>City:</td>
                                    <td><%=strCity%></td>
                                  </tr>
                                  <tr> 
                                    <td>State:</td>
                                    <td><%=strstate%></td>
                                  </tr>
                                  <tr> 
                                    <td>Zipcode:</td>
                                    <td><%=strZipcode%></td>
                                  </tr>
                                  <tr> 
                                    <td>AVS Response Message:</td>
                                    <td><%=strAVSResponseMessage%></td>
                                  </tr>
                                </table>
                                <br>
                                Please keep a copy of the following order information 
                                for your records. </b> 
                              </center>
                              <b> 
                              <%
						end if
						'//================================================================================
						'// Declined
						'//================================================================================
						if (strDisplayType = "Declined") then
						%>
                              <br>
                              <br>
                              <center>
                                I'm sorry but your transaction has been <b>Declined</b>.<br>
                                <br>
                                The reason that we received from your Credit-Card 
                                Issuer was: <br>
                                <br>
                                <i><b><%=strAuthorizationDeclinedMessage%></b></i> 
                                <br>
                                Please press the back button and confirm the credit card information<br>
<!--  mw                               <a href="javascript:history.go(-1);">Return to 
                                the Order Form</a><br> -->

<!-- mw  -->                                
                                <!-- <input type="button" value="Back" onclick="goBack()"><br> -->
 <!-- mw -->                               
                                
                              </center>
                              <%
						end if
						'//================================================================================
						'// BlindCredit
						'//================================================================================
						if (strDisplayType = "BlindCredit") then
						%>
                              <br>
                              <br>
                              <center>
                                You have submitted a blind Credit to your Account.<br>
                                <br>
                                Check your register to see the current status 
                                of the transaction.<br>
                                <br>
                                Please press the back button and confirm the credit card information<br>
<!--  mw                               <a href="javascript:history.go(-1);">Return to 
                                the Order Form</a><br> -->

<!-- mw  -->                                
                                <!-- <input type="button" value="Back" onclick="goBack()"><br> -->
 <!-- mw -->             
                              </center>
                              <%
						end if
						'//================================================================================
						'// Invalid Entry
						'//================================================================================
						if (strDisplayType = "Invalid") then
						%>
                              <br>
                              <br>
                              <center>
                                Error: <%=strErrorMessage%><br>
                                <br>
                                The transaction has <b>NOT</b> been completed.<br>
                                <br>
                                Please press the back button and confirm the credit card information<br>
                                
<!--                                 Please <a href="javascript:history.go(-1);" style="color:#0033CC">return 
                                to the order form</a> and make the appropriate 
                                corrections.<br> -->
                                
 <!-- mw  -->                                
                                <!-- <input type="button" value="Back" onclick="goBack()"><br> -->
 <!-- mw -->                                          
                                
                                <br>
                                If the problem persists - contact the merchant. 
                              </center>
                              <%
						end if
						%>
                              <br>
                             
                              </b></td>
                          </tr>
                        </table></td>
                    </tr>
                    
                   
                   
                   
                  </table></td>
                <td>&nbsp;</td>
              </tr>
              
            </table>

<div id="btmCorner"></div>
	<div id="btmPadding"></div>
	
</div>
</body>
</html>
