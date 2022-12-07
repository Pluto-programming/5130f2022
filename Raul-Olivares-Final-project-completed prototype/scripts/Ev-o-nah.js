
//this['Name'].value, this['currentLocation'].value, this['fromWhere'].value, this['wishLocation'].value, this['familyFrom'].value, this['stayAtLocation'].value, this['residenceType'].value, this['ownOrRent'].value, this['bornWhere'].value, this['dateOfBirth'].value, this['liveWhere'].value, this['wannaLive'].value, this['
//sigOtherBorn'].value, this['liveWithYou'].value, this['shareVehicle'].value, this['yourPortfolio'].value, this['familyPortfolio'].value, this['sigOtherPortfolio'].value,
// this['ownedAnEv'].value, this['haveInsurance'].value, this['leaseOrBuy'].value, 
//this['haveAjob'].value, this['incomeAnnual'].value
// This source code was developed by raul olivares with some use of stackoverflow code ALSO TRYING TO GET THE CODE TO SAVE THE INPUT TO NEW FILE TO USE LATER BUT NOT WORKING 
const submit = (event)=>{
    event.preventDefault()
    let state ={}
    state.name= document.querySelector("#name").value
    state.currentLocation= document.querySelector("#currentlocation").value
    state.fromWhere= document.querySelector("#fromwhere").value
    state.wishLocation= document.querySelector("#wishlocation").value
    state.familyFrom= document.querySelector("#familyfrom").value
    state.stayAtLocation= document.querySelector("#stayatlocation").value
    state.residenceType= document.querySelector("#residencetype").value
    state.bornWhere= document.querySelector("#bornwhere").value
    state.dateOfBirth= document.querySelector("#dateofbirth").value
    state.liveWhere= document.querySelector('#livewhere').value
    console.log(state)
    state.wannaLive= document.querySelector("#wannalive").value
    state.sigOtherBorn= document.querySelector("#sigotherborn").value
    state.liveWithYou= document.querySelector("#livewithyou").value
    state.shareVehicle= document.querySelector("#sharevehicle").value
    state.yourPortfolio= document.querySelector("#yourportfolio").value
    state.familyPortfolio= document.querySelector("#familyportfolio").value
    state.sigOtherPortfolio= document.querySelector("#sigotherportfolio").value
    state.ownedAnEv= document.querySelector("#ownedanev").value
    state.haveInsurance= document.querySelector("#haveinsurance").value
    state.leaseOrBuy= document.querySelector("#leaseorbuy").value
    state.haveAjob= document.querySelector("#haveajob").value
    state.incomeAnnual= document.querySelector("#annualincome").value

    console.log(state)

    localStorage.setItem("detailState",JSON.stringify(state));
    localStorage.setItem("currentState",state.liveWhere);
    localStorage.setItem("currentLocation",state.currentLocation);
    window.location.replace("././dashboard.html")
}















/*
  
  function onStateChange() {
    var state = document.getElementById("“livewhere”").value;
    localStorage.setItem("livewhere", state);
  }
  
  function download(filename, text, text1, text2, text3, text4, text5, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22) {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +
  
    encodeURIComponent(text) + ' ' + encodeURIComponent(text1) + ' ' + encodeURIComponent(text2)+ ' ' + encodeURIComponent(text3) + ' ' + encodeURIComponent(text4)+ ' ' + encodeURIComponent(text5)+ ' ' + encodeURIComponent(text7)+ ' ' + encodeURIComponent(text8) + ' ' + encodeURIComponent(text9) + ' ' + encodeURIComponent(text10)+ ' ' + encodeURIComponent(text11)+ ' ' + encodeURIComponent(text12) + ' ' + encodeURIComponent(text13)+ ' ' + encodeURIComponent(text14)+ ' ' + encodeURIComponent(text15)  + ' ' + encodeURIComponent(text16)+ ' ' + encodeURIComponent(text17)+ ' ' + encodeURIComponent(text18)  + ' ' + encodeURIComponent(text19)+ ' ' + encodeURIComponent(text20)+ ' ' + encodeURIComponent(text21)  + ' ' + encodeURIComponent(text22));
      pom.setAttribute('download', filename);
  
      pom.style.display = 'none';
      document.body.appendChild(pom);
  
      pom.click();
  
      document.body.removeChild(pom);
    }
  
    function addTextHTML()
    {
        document.addtext.name.value = document.addtext.name.value + ".html"
    }
  
    function addTextTXT()
    {
        document.addtext.name.value = document.addtext.name.value + ".txt"
    }
  // Storing data:
  //localStorage.setItem("testJSON", dateOfBirth);
  localStorage.setItem("textvalue",JSON.stringify(currentLocation));
  **/






  window.onload = (event) => {
    console.log("page is fully loaded");
    const select = document.querySelector('#livewhere');

    const form = document.querySelector('#form');
  
    const statesData = [
    {
      stateId: "AL",
      stateName: "Alabama",
    },
    {
      stateId: "AK",
      stateName: "Alaska",
    },
    {
      stateId: "AZ",
      stateName: "Arizona",
    },
    {
      stateId: "AR",
      stateName: "Arkansas",
    },
    {
      stateId: "CA",
      stateName: "California",
    },
    {
      stateId: "CAN",
      stateName: "Canada",
    },
    {
      stateId: "CO",
      stateName: "Colorado",
    },
    {
      stateId: "CT",
      stateName: "Connecticut",
    },
    {
      stateId: "DC",
      stateName: "Washington D.C.",
    },
    {
      stateId: "FL",
      stateName: "Florida",
    },
    {
      stateId: "GA",
      stateName: "Georgia",
    },
    {
      stateId: "IA",
      stateName: "Iowa",
    },
    {
      stateId: "IL",
      stateName: "Illinois",
    },
    {
      stateId: "IN",
      stateName: "Indiana",
    },
    {
      stateId: "KS",
      stateName: "Kansas",
    },
    {
      stateId: "KY",
      stateName: "Kentucky",
    },
    {
      stateId: "LA",
      stateName: "Louisiana",
    },
    {
      stateId: "MA",
      stateName: "Massachusetts",
    },
    {
      stateId: "MD",
      stateName: "Maryland",
    },
    {
      stateId: "ME",
      stateName: "Maine",
    },
    {
      stateId: "MIS",
      stateName: "Mississippi",
    },
    {
      stateId: "MI",
      stateName: "Michigan",
    },
    {
      stateId: "MN",
      stateName: "Minnesota",
    },
    {
      stateId: "NE",
      stateName: "Nebraska",
    },
    {
      stateId: "NV",
      stateName: "Nevada",
    },
    {
      stateId: "NH",
      stateName: "New Hampshire",
    },
    {
      stateId: "NM",
      stateName: "New Mexico",
    },
    {
      stateId: "NJ",
      stateName: "New Jersey",
    },
    {
      stateId: "NY",
      stateName: "New York",
    },
    {
      stateId: "ON",
      stateName: "Ontario",
    },
    {
      stateId: "NC",
      stateName: "North Carolina",
    },
    {
      stateId: "ND",
      stateName: "North Dakota",
    },
    {
      stateId: "OK",
      stateName: "Oklahoma",
    },
    {
      stateId: "OR",
      stateName: "Oregon",
    },
    {
      stateId: "PA",
      stateName: "Pennsylvania",
    },
    {
      stateId: "RI",
      stateName: "Rhode Island",
    },
    {
      stateId: "SC",
      stateName: "South Carolina",
    },
    {
      stateId: "SD",
      stateName: "South Dakota",
    },
    {
      stateId: "TN",
      stateName: "Tennessee",
    },
    {
      stateId: "TX",
      stateName: "Texas",
    },
    {
      stateId: "UT",
      stateName: "Utah",
    },
    {
      stateId: "VE",
      stateName: "Vermont",
    },
    {
      stateId: "VI",
      stateName: "Virginia",
    },
    {
      stateId: "WV",
      stateName: "West Virginia",
    },
    {
      stateId: "WI",
      stateName: "Wisconsin",
    },
    {
      stateId: "WY",
      stateName: "Wyoming",
    },
  ];
  
    statesData.forEach(state => {
      const newOption = document.createElement('option');
      //const optionText = document.createTextNode(state.stateName);
      
      newOption.innerText=state.stateName
      //newOption.value =state.stateId
      newOption.setAttribute('value', state.stateId);
      select.appendChild(newOption);
    });







    form.addEventListener('submit',submit)

  };
