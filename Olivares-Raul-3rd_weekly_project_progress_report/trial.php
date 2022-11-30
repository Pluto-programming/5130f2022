<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
 <head>
  <title>
   Ev-o-nah page
  </title>
 </head>
 <body>
<!-- This source code was developed by  -->
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
  <p>Do they own or rent: </p>
 <?php echo $_GET["ownOrRent"]; ?><br>
  <p>Where were they born: </p>
 <?php echo $_GET["bornWhere"] ?><br>
<p>What's their date of birth: </p>
 <?php echo $_GET["dateOfBirth"]; ?><br>
  <p>Where do they live: </p>
  <?php echo $_GET["liveWhere"]; ?><br>
<p>Where do they want to live: </p>
  <?php echo $_GET["wannaLive"]; ?><br>
  <p>Where is their significant other from: </p>
  <?php echo $_GET["sigOtherBorn"]; ?><br>
<p>Do they live with them: </p>
<?php echo $_GET["liveWithYou"]; ?><br>
  <p>Do they share a vehicle: </p>
  <?php echo $_GET["shareVehicle"]; ?><br>
  <p>Do they have an investment portfolio: </p>
  <?php echo $_GET["yourPortfolio"]; ?><br>
<p>Does their family have an investment portfolio: </p>
<?php echo $_GET["familyPortfolio"]; ?><br>
  <p>Does their significant other have an investment portfolio: </p>
  <?php echo $_GET["sigOtherPortfolio"]; ?><br>
<p>Have they ever owned an EV: </p>
<?php echo $_GET["ownedAnEv"]; ?><br>
<p>Do they have insurance? </p>
<?php echo $_GET["haveInsurance"]; ?><br>
<p>Do they plan on leasing or buying: </p>
<?php echo $_GET["leaseOrBuy"]; ?><br>
<p>Are they currently employed: </p>
<?php echo $_GET["haveAjob"]; ?><br>
<p>What's your annual income? </p>
<?php echo $_GET["incomeAnnual"]; ?><br>
<label for="myfile">Their uploaded file showing recent paystub or current bank account balance: </label>
<?php echo $_GET["myfile"]; ?><br>
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