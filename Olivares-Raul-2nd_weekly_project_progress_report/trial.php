<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
 <head>
  <title>
   Ev-o-nah page
  </title>
 </head>
 <body>
<!-- This source code was developed by Raul Olivares -->
  <h1>
  <p style="font-size:10vw; color:red"> User Form!
</p>
<p id="demo"></p>
  </h1>
<form>
<p> Their current location is:</p>
<?php echo $_GET["currentLocation"]; ?><br>
<p>They are from:</p>
<?php echo $_GET["fromWhere"]; ?><br>
 <p>They want to be: </p>
 <?php echo $_GET["wishLocation"]; ?><br>
  <p>Their family is from: </p>
 <?php echo $_GET["familyFrom"]; ?><br>
  <p>How long will they stay at their current location: </p>
 <?php echo $_GET["stayAtLocation"]; ?><br>
  <p>The type of residence they have:</p>
  <<?php echo $_GET["residenceType"]; ?><br>
  <p>Do they own or rent? </p>
 <?php echo $_GET["ownOrRent"]; ?><br>
  <p>Where were they born? </p>
 <?php echo $_GET["bornWhere"] ?><br>
<p>What's their date of birth? </p>
 <?php echo $_GET["dateOfBirth"]; ?><br>
  <label for=“livewhere”>Where do you live? </label>
  <input type="text" id=“livewhere” name="liveWhere"><br><br>
<label for=“wannalive”>What's do you want to live? </label>
  <input type="text" id=“wannalive” name=“wannaLive”><br><br>
  <label for=“sigotherborn”>Where is your significant other from? </label>
  <input type="text" id=“sigottherborn” name=“sigOtherBorn”><br><br>
<label for=“livewithyou”>Do they live with you? </label>
  <input type="text" id=“livewithyou” name=“liveWithYou”><br><br>
  <label for=“sharevehicle”>Do y'all share a vehicle? </label>
  <input type="text" id=“sharevehicle” name=“shareVehicle”><br><br>
  <label for=“yourportfolio”>Do you have an investment portfolio? </label>
  <input type="text" id=“yourportfolio” name=“yourPortfolio”><br><br>
<label for=“familyportfolio”>Does your family have an investment portfolio? </label>
  <input type="text" id=“familyportfolio” name=“familyPortfolio”><br><br>
  <label for=“sigotherportfolio”>Does your significant other have an investment portfolio? </label>
  <input type="text" id=“sigotherportfolio” name=“sigOtherPortfolio”><br><br>
<label for=“ownedanev”>Have you ever owned an EV? </label>
  <input type="text" id=“ownedanev” name=“ownedAnEv”><br><br>
<label for=“haveinsurance”>Do you have insurance? </label>
  <input type="text" id=“haveinsurance” name=“haveInsurance”><br><br>
<label for=“leaseorbuy”>Do you plan on leasing or buying </label>
  <input type="text" id=“leaseorbuy” name=“leaseOrBuy”><br><br>
<label for=“haveajob”>Are you currently employed? </label>
  <input type="text" id=“haveajob” name=“haveAjob”><br><br>
<label for=“annualincome”>What's your annual income? </label>
  <input type="text" id=“annualincome” name=“incomeAnnual”><br><br>
<label for="myfile">Upload a file showing recent paystub or current bank account balance:</label>
<input type="file" id="myfile" name="myfile">
</form>
<p id="demo"></p>
</body>
<script>
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
const para = window.location.search;
let params = (new URL(document.location)).searchParams;
let name = params.get("currentLocation");
document.getElementById("demo").innerHTML = JSON.parse(localStorage.getItem("textvalue"));
jim = console.log(para.get('currentLocation');
</script>
</html>