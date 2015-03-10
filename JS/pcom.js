
		function isCompDinnerDance(objFormItem)
		{
			if(objFormItem.value == "1937") return true;
			else {
				var str = objFormItem.value;
				var match = str.match(/19[45][05]/);			
				if (match != null && match != '') return true;
			}
			return false;
		}	
		
		/* ------------- */
	
	
	
		function updatePrice(objForm)
		{
			var total;
			var orderstring = '';
			
			if(objForm.classYear.value.length < 4 || isNaN(objForm.classYear.value)) {
				alert("Please enter a valid four digit class year.");
				objForm.classYear.focus();
				return false;
			}
			
			for(a = 0; a < objForm.Quantity.length; a  )
			{
				/*if(fixInt(objForm.Quantity[a]) > 0) {
					if(a == 2 && (isCompDinnerDance(objForm.classYear) || is2000(objForm.classYear))) {
						if(fixInt(objForm.Quantity[a]) > 2) {
							if (isCompDinnerDance(objForm.classYear)){
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   0   '~'   2   '~N~||';
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   objForm.ItemCost[a].value   '~'   (fixInt(objForm.Quantity[a]) - 2)   '~N~||';
							}
							
							if (is2000(objForm.classYear)){ //class of 2000 gets discount for 2 attendees
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   getDiscountPrice()   '~'   2   '~N~||';
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   objForm.ItemCost[a].value   '~'   (fixInt(objForm.Quantity[a]) - 2)   '~N~||';
							}
						
						} 
						else {
							if (isCompDinnerDance(objForm.classYear)){
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   0   '~'   objForm.Quantity[a].value   '~N~||';
							}
							
							if (is2000(objForm.classYear)){
								orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   getDiscountPrice()   '~'   objForm.Quantity[a].value   '~N~||';
							}	
						}
					} 
					else {
						orderstring = orderstring   objForm.ItemNumber[a].value   '~'   objForm.ItemDescription[a].value   '~'   objForm.ItemCost[a].value   '~'   objForm.Quantity[a].value   '~N~||';
					}
				}*/

				switch(a) {
					case 0:
						objForm.IPATotal.value = fixInt(objForm.Quantity[a]) * fixInt(objForm.ItemCost[a]);
						total = fixInt(objForm.IPATotal);
						break;
					//case 1:
					//	objForm.LOLTotal.value = fixInt(objForm.Quantity[a]) * 16;
					//	total = total   fixInt(objForm.LOLTotal);
					//	break;
					//case 2:
					//	objForm.LOLIPATotal.value = fixInt(objForm.Quantity[a]) * 41;
					//	total = total   fixInt(objForm.LOLIPATotal);
					//	break;
					case 1:
						objForm.FFBTotal.value = fixInt(objForm.Quantity[a]) * fixInt(objForm.ItemCost[a]);
						total = total   fixInt(objForm.FFBTotal);
						break;
					case 2:
						var intRDDSubtotal;
						var intMaxDiscount;
						var intCost = fixInt(objForm.ItemCost[a]);
						if (fixInt(objForm.Quantity[a]) > 2) intMaxDiscount = 2;
						else intMaxDiscount = fixInt(objForm.Quantity[a]);

						intRDDSubtotal = fixInt(objForm.Quantity[a]) * intCost;
						objForm.RDDTotal.value = intRDDSubtotal;
						//if (isCompDinnerDance(objForm.classYear)) {
					//		intRDDSubtotal -= intMaxDiscount * intCost; // Class of 1935,40,45,50,55 gets in free (including a guest)						}
					//		if (intRDDSubtotal < 0) intRDDSubtotal = 0; //Discount can not bring the price below 0!
					//		objForm.RDDTotal.value = intRDDSubtotal;	
					//	}	
						
						//if (is2000(objForm.classYear)) {
						//	intRDDSubtotal -= intMaxDiscount * (intCost-getDiscountPrice()); // Class of 2000 gets discounted price (including a guest)						}
						//	if (intRDDSubtotal < 0) intRDDSubtotal = 0; //Discount can not bring the price below 0!
					//		objForm.RDDTotal.value = intRDDSubtotal;	
					//	}																				
						total = total   fixInt(objForm.RDDTotal);
						break;
					case 3:
						objForm.CBTotal.value = fixInt(objForm.Quantity[a]) * fixInt(objForm.ItemCost[a]);
						total = total   fixInt(objForm.CBTotal);
						break;
					case 4:
						objForm.CBTotal.value = fixInt(objForm.Quantity[a]) * fixInt(objForm.ItemCost[a]);
						total = total   fixInt(objForm.CBTotal);
						break;
					//case 4:
						// Attendees of the champaigne brunch (objForm.Quantity[3]) can go to the Constitution Center at no cost.						var intFISMSubtotal = fixInt(objForm.Quantity[a]) * 4;						var intFISMDiscount = fixInt(objForm.Quantity[3]) * 4;						// Discount if before 5/14.
					/*	if (new Date(formRegister.dateToday.value) <= new Date('5/14/2004')) 
						{ 	intFISMSubtotal -= intFISMDiscount;
							if (intFISMSubtotal < 0) intFISMSubtotal = 0; //Discount can not bring the price below 0!						
						}
						objForm.FISMTotal.value = intFISMSubtotal;						
						total = total   fixInt(objForm.FISMTotal);
						break;*/
					//case 5:
					//	objForm.CBFISMTotal.value = fixInt(objForm.Quantity[a]) * 25;
					//	total = total   fixInt(objForm.CBFISMTotal);
					//	break;
					default:
						alert('Error');
						break;
				}
			}

			objForm.comment.value = "\r\nClass Year: "   objForm.classYear.value   "\r\nStreet Address 2:"   objForm.Streetaddress2.value   "\r\nGuests:\r\n"   objForm.guest1.value   "\r\n"   objForm.guest2.value   "\r\n"   objForm.guest3.value   "\r\n"   objForm.guest4.value;
			objForm.transactionamount2.value = total;
			objForm.transactionamount.value = total   ".00";
			objForm.orderstring.value = orderstring;		
			//alert(orderstring);	
		}

		function fixInt(objFormItem) {
		
			if(isNaN(objFormItem.value)) {
				return(0);
			}
			return(parseInt(objFormItem.value));
		}
		
		
		
		
		
		
		
		
		
			function activate(imgName)
		{
			imgon = eval(imgName   "on.src");
			document[imgName].src = imgon;
		}

		function deactivate(imgName)
		{
			imgoff = eval(imgName   "off.src");
			document[imgName].src = imgoff;
		}

function verifyForm1(objForm){
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
			return true;
}

		function verifyForm(objForm)
		{

			
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

			if(parseInt(objForm.transactionamount2.value) == 0) {
				//User is not buying anything, submit form to another page.
				objForm.action = "https://www.pcom.edu/asp/sendmail.asp";
			}
			objForm.submit();
		}

CSStopExecution = false;

		function CSAction(array) {
			return CSAction2(CSAct, array);
		}
		function CSAction2(fct, array) {
			var result;
			for (var i=0;i<array.length;i  ) {
				if(CSStopExecution) return false;
				var actArray = fct[array[i]];
				var tempArray = new Array;
				for(var j=1;j<actArray.length;j  ) {
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
		CSAg = window.navigator.userAgent; CSBVers = parseInt(CSAg.charAt(CSAg.indexOf("/") 1),10);
		function IsIE() { return CSAg.indexOf("MSIE") > 0;}
		function CSIEStyl(s) { return document.all.tags("div")[s].style; }
		function CSNSStyl(s) { return CSFindElement(s,0); }
		function CSFindElement(n,ly) { if (CSBVers < 4) return document[n];
			var curDoc = ly ? ly.document : document; var elem = curDoc[n];
			if (!elem) { for (var i=0;i<curDoc.layers.length;i  ) {
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
		CSAct[/*CMP*/ 'BA8E53AD10'] = new Array(CSSetImageURL,/*CMP*/ 'pcomhome',/*URL*/ 'images/pcomhome_on.gif');
		CSAct[/*CMP*/ 'BA8E53AD11'] = new Array(CSSetImageURL,/*CMP*/ 'pcomhome',/*URL*/ 'images/pcomhome_off.gif');

		// -->

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_preloadImages() { //v3.0
		  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i  )
		    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j  ].src=a[i];}}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}

		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		    d=parent.frames[n.substring(p 1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i  ) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i  ) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
		  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i =3)
		   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j  ]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i 2];}
		}

		function MM_swapImgRestore() { //v3.0
		  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i  ) x.src=x.oSrc;
		}
		
		
		
		
		
		
		/* ----- For 2002 ---- */
		function is2000(objFormItem) {
			if(objFormItem.value == "2002" ) return true;
			else return false;
		}
		
		function isBelow1957(objFormItem) {
			if(objFormItem.value < "1957" && objFormItem.value > "1930" ) 
			{
			return true};
			else return false;
		}
		
		function getDiscountPrice()
		{
			return ("25.00");
		}
		
		function getOlderDiscountPrice()
		{
			return ("50.00");
		}
		
		function isCompDinnerDance(objFormItem)
		{
			if(objFormItem.value == "1957") return true;
			/*else {
				var str = objFormItem.value;
				var match = str.match(/19[45][05]/);			
				if (match != null && match != '') return true;
				alert(match);
			}*/
			return false;
		}	
		
		function fixInt(objFormItem) {
			if(isNaN(objFormItem.value)) {
				return(0);
			}
			return(parseInt(objFormItem.value));
		}
		/* ------------- */

