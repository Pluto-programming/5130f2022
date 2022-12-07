//  This source code was developed by raul olivares with some use of stackoverflow code ALSO TRYING TO GET THE CODE TO SAVE THE INPUT TO NEW FILE TO USE LATER BUT NOT WORKING
let clickedQ = false
let clickedC = false
const qSelect = (e)=>{

  let valu = ""
  console.log(e.target.nextElementSibling)
  if(e.target.querySelector(".quote1")){
    valu = e.target.querySelector(".quote1").textContent
    console.log(parseInt( valu))
  }else if(e.target.classList.contains("quote1")){
    valu = e.target.textContent
    console.log(e.target)
  }else if(e.target.nextElementSibling.classList.contains("quote1")){
    valu=e.target.nextElementSibling.textContent
  }
  console.log(valu)
  clickedQ = true
  localStorage.setItem("selectedq",valu)

}



const downloadFile = ()=>{
  console.log("here")
  let info = ""
  const data =JSON.parse(localStorage.getItem('detailState'))
  for (const [key, value] of Object.entries(data)) {
       info +=`${key}: ${value}\n`
  }

      const file = new File([info], 'personalInfo.txt', {
        type: 'text/plain',
      })

      download(file)
}

const download =(file)=>{
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)

  link.href = url
  link.download = file.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}










const chrg_car = (dataList)=>{

  const quotet1 = document.querySelector('#quotet1');
  const quote1 = document.querySelector('#quote1');
  const quotet2= document.querySelector('#quotet2');
  const quote2 = document.querySelector('#quote2');
  const  quotet3 = document.querySelector('#quotet3');
  const  quote3 = document.querySelector('#quote3');
      quotet1.innerText = dataList[0].station_name
      quotet2.innerText = dataList[1].station_name
      quotet3.innerText = dataList[2].station_name
      
      quote1.innerText = dataList[0].street_address
      quote2.innerText = dataList[1].street_address
      quote3.innerText =dataList[2].street_address

}



const quoute_opt = (dataList)=>{

  const quoteq1 = document.querySelector('#quoteq1');
  const quoteq2 = document.querySelector('#quoteq2');
  const quoteq3= document.querySelector('#quoteq3');

  quoteq1.innerText = dataList.fstquote
  quoteq2.innerText = dataList.sndquote
  quoteq3.innerText = dataList.trdquote
      
      
}





const populate =(e)=>{

  if(!clickedQ){
    window.alert("Select a Quote first")
    return
  }


  clickedC=true

  const financeCont = document.querySelector('#finance');
  const leasedCont = document.querySelector('#leased');
  const paidfullCont = document.querySelector('#paidfull');
  
  let id
  console.log(e.target.parentNode.parentNode, e.target, this.parentNode)
if(e.target.id)
       id = e.target.id
  else if(e.target.parentNode.parentNode.id){
    id = e.target.parentNode.parentNode.id
  }
  else{
    return
  }

const selectedq = parseInt(localStorage.getItem("selectedq"))
  const quote =JSON.parse(localStorage.getItem('quotes'))
  const cars =JSON.parse(localStorage.getItem('cars'))
 chrg_car(quote.data)
  for (let i of cars.cars){
    console.log(i.financedEstimate.toString(), id)
    if (i.id.toString()== id){
      financeCont.textContent= financedEstimate(i.totalAmount, selectedq)//i.financedEstimate
      leasedCont.textContent=leasedEstimate(i.totalAmount,selectedq)//i.leasedEstimate
      paidfullCont.textContent=i.totalAmount + selectedq
     data = [ 
      {financed:financedEstimate(i.totalAmount, selectedq)},
      {leased:leasedEstimate(i.totalAmount,selectedq)},
      {paid:i.totalAmount + selectedq},
      {selectedq}
    ]
      localStorage.setItem('estimate',JSON.stringify({data}))
     // annualcostcont.textContent=//i.annualCost
    //  monthlycostcont.textContent=//i.monthlyCost
    }
              
  }


}

const fetchQuote = async()=>{

    currentlocation = localStorage.getItem('currentLocation')
    console.log(currentlocation)
    
    const url = `https://electric-vehicle-charging-station-and-point.p.rapidapi.com/us/elec.json?orderBy=%22city%22&equalTo=%22${currentlocation}%22&print=%22pretty%22&limitToFirst=3`


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee6a816d71msh23f26f3b8a913d7p1320bfjsn2c5f1e6621e7',
        'X-RapidAPI-Host': 'electric-vehicle-charging-station-and-point.p.rapidapi.com'
      }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    let dataList = []
    for (const [key, value] of Object.entries(data)) {
       let chr_obj={}
      for (const [keyIn, valueIn] of Object.entries(value)) {

         if(keyIn =="station_name")
            chr_obj.station_name = valueIn
         else if(keyIn =="street_address")
            chr_obj.street_address = valueIn
      
      }
      dataList.push(chr_obj)
      
  }
/** paidInFullEstimate: 59955 + selectedInsurance,
        financedEstimate:financedEstimate(59955, selectedInsurance),
        leasedEstimate: leasedEstimate(59955, selectedInsurance),
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12, */
    
    //get only needed info 
    /** 
    const stations = data.station.map(item => {
      return {
        station_name: item.station_name,
        street_address : item.street_address
      }
    })*/
    localStorage.setItem("quotes",JSON.stringify({data:dataList}));

}


const financedEstimate =(totalAmount,selectedInsurance)=>Math.round(((((totalAmount/100)*117.6)/72) + selectedInsurance)*100)/100
const leasedEstimate= (totalAmount,selectedInsurance)=>Math.round((((((totalAmount/100)*117.6)/72)/4)+selectedInsurance)*100)/100



/** 
Tesla model x 2023
price:79,000
BMW i4 eDrive40 2023
price:61,145
Lexus Rz 450e 2023
price:59,955
Toyota bZ4X 2023
price:42,000
Audi Q4 e-tron 2023
49,800


// paidInFullEstimate: totalAmount + 'selected insureance quotes',
        // 'Financed Estimate' : '{((Total amount/100)*117.6)/72}+selected insurance',
        // 'Leased Estimate':  '({((Total amount/100)*117.6)/72}/4)+selected insurance'

        // paidInFullEstimate: 40000,
        // monthlyCost: monthlyCost,
        // annualCost: monthlyCost * 12,
        // image: '',


        <div class="cad">
                  <img src="/assets/images/teslax.jpeg" alt="" class="cars">
                  <div class="overlay">
                  <div class="info">
                    <p>Tesla model x 2023</p>
                    <p>price: $79,000</p>
                  </div>
                  </div>
                  
                </div>

*/



const createCard = (data, container)=>{
    const card = document.createElement('div')
    const overlay= document.createElement('div')
    const carImg= document.createElement('img')
    const info = document.createElement('div')
    const pname = document.createElement('p')
    const pprice = document.createElement('p')
    card.classList.add("cad")
    console.log (data)
    overlay.id = (data.id).toString()

    card.addEventListener('click',populate)

    overlay.classList.add('overlay')
    info.classList.add('info')
    carImg.classList.add('cars')
    let src=`./assets/images/${data.image}` 
    carImg.src = src
    pname.innerText = data.model
    pprice.innerText = data.totalAmount

    info.appendChild(pname)
      info.appendChild(pprice)
    overlay.appendChild(info)
    card.appendChild(carImg)
        card.appendChild(overlay)

    container.appendChild(card)



          
}



const eSelect =(e)=>{

  if (!clickedC || !clickedQ){
    window.alert("Select a Car and A quote")
    return
  }

  let vle = ""
  console.log(e.target)
  if(e.target.classList.contains("eq")){
    vle=e.target.textContent
  }else if( e.target.querySelector(".eq")){
    vle = e.target.querySelector(".eq").textContent

  }else if(e.target.previousElementSibling.classList.contains("eq")){
      vle =e.target.previousElementSibling.textContent
  }
  else{
    return
  }
  const estimate = JSON.parse(localStorage.getItem('estimate'))
  const annualcostcont = document.querySelector('#annualcost');
  const  monthlycostcont = document.querySelector('#monthlycost');
  if (vle=="Financed Estimate"){
    for (let i of estimate.data){
      console.log("here", i)
      if(i.financed){
        monthlycostcont.innerText =Math.round (i.financed*100)/100
        annualcostcont.innerText =Math.round((i.financed *12)*100)/100
      }
   
    }
  }else if(vle=='Leased Estimate'){
    for (let i of estimate.data){
      if(i.leased){
      console.log("here", i)
    monthlycostcont.innerText = Math.round (i.leased*100)/100
    annualcostcont.innerText = Math.round ((i.leased*12)*100)/100
      }
    }
  }else if(vle=='Paid in Full Estimate'){
    for (let i of estimate.data){
    monthlycostcont.innerText =Math.round (i.selectedq*100)/100
    annualcostcont.innerText =Math.round ((i.selectedq *12)*100)/100
    }
  }





}




window.onload = (event) => {
    console.log("page is fully loaded");
    
      document.addEventListener('keypress',e=>{
        if(e.keyCode== 115)
        window.location.replace("./Ev-o-nah.html")
        else if (e.keyCode==100){
          console.log(e.keyCode)
          downloadFile()
        }
        console.log(e.keyCode)

      }
      )
      

    const cads = document.querySelectorAll('.adjustr .cad');
    console.log(cads)
    cads.forEach((cad)=>{
               cad.addEventListener('click',eSelect)
    })


    const cadsE = document.querySelectorAll('.con3-cont .cad');
    console.log(cadsE)
    cadsE.forEach((cadE)=>{
               cadE.addEventListener('click',qSelect)
    })

// make api calls **********
fetchQuote()
const selectedInsurance =0 // get from local storage 
const monthlyCost =550 // monthlycost ??




    const cars = [
      {
        id: 0,
        model: 'Tesla model x 2023',
        totalAmount: 79000, // show total amount to each card
        paidInFullEstimate: 79000 + selectedInsurance,
        financedEstimate:financedEstimate(79000, selectedInsurance),
        leasedEstimate: leasedEstimate(79000, selectedInsurance),
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
        image: 'teslax.jpeg',
      },
      {
        id: 1,
        model: 'BMW i4 eDrive40 2023',
        totalAmount: 61145,
        image: 'bmwi4.jpeg',
        paidInFullEstimate: 61145 + selectedInsurance,
        financedEstimate:financedEstimate(61145, selectedInsurance),
        leasedEstimate: leasedEstimate(61145, selectedInsurance),
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
      },
      {
        id: 2,
        model: 'Lexus Rz 450e 2023',
        totalAmount: 59955,
        image: 'lexus.jpeg',
        paidInFullEstimate: 59955 + selectedInsurance,
        financedEstimate:financedEstimate(59955, selectedInsurance),
        leasedEstimate: leasedEstimate(59955, selectedInsurance),
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
      },
       {
        id: 3,
        model: 'Toyota bZ4X 2023',
        totalAmount: 42000,
        image: 'toyota.jpeg',
        paidInFullEstimate: 42000 + selectedInsurance,
        financedEstimate:financedEstimate(42000, selectedInsurance),
        leasedEstimate: leasedEstimate(42000, selectedInsurance),
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
        },
        {
          id: 4,
          model: 'Audi Q4 e-tron 2023',
          totalAmount: 49800,
          image: 'audi.jpeg',
          paidInFullEstimate: 49800 + selectedInsurance,
          financedEstimate:financedEstimate(49800, selectedInsurance),
          leasedEstimate: leasedEstimate(49800, selectedInsurance),
          monthlyCost: monthlyCost,
          annualCost: monthlyCost * 12,
          }
    ]

    localStorage.setItem("cars",JSON.stringify({cars}));
    for (let i of cars ){
      createCard(i, document.getElementById('con1-cont'))
    }

    







    const select = document.querySelector('#livewhere');



 
    const statesData = [
      {
        stateId: "AL",
        stateName: "Alabama",
        fstquote:300,
        sndquote:250,
        trdquote:230
                
      },
      {
        stateId: "AK",
        stateName: "Alaska",
        fstquote:600,
        sndquote:500,
        trdquote:430
      },
      {
        stateId: "AZ",
        stateName: "Arizona",
        fstquote:550,
        sndquote:430,
        trdquote:280
      },
      {
        stateId: "AR",
        stateName: "Arkansas",
        fstquote:900,
        sndquote:670,
        trdquote:430
      },
      {
        stateId: "CA",
        stateName: "California",
        fstquote:320,
        sndquote:260,
        trdquote:195
      },
      {
        stateId: "CAN",
        stateName: "Canada",
        fstquote:1250,
        sndquote:850,
        trdquote:620
      },
      {
        stateId: "CO",
        stateName: "Colorado",
        fstquote:1050,
        sndquote:900,
        trdquote:760
      },
      {
        stateId: "CT",
        stateName: "Connecticut",
        fstquote:980,
        sndquote:840,
        trdquote:650
      },
      {
        stateId: "DC",
        stateName: "Washington D.C.",
        fstquote:305,
        sndquote:220,
        trdquote:180
      },
      {
        stateId: "FL",
        stateName: "Florida",
        fstquote:355,
        sndquote:280,
        trdquote:240
      },
      {
        stateId: "GA",
        stateName: "Georgia",
        fstquote:1400,
        sndquote:960,
        trdquote:340
      },
      {
        stateId: "IA",
        stateName: "Iowa",
      },
      {
        stateId: "IL",
        stateName: "Illinois",
        fstquote:1350,
        sndquote:1050,
        trdquote:600
      },
      {
        stateId: "IN",
        stateName: "Indiana",
        fstquote:304,
        sndquote:230,
        trdquote:200
      },
      {
        stateId: "KS",
        stateName: "Kansas",
        fstquote:700,
        sndquote:450,
        trdquote:330
      },
      {
        stateId: "KY",
        stateName: "Kentucky",
        fstquote:805,
        sndquote:650,
        trdquote:330
      },
      {
        stateId: "LA",
        stateName: "Louisiana",
        fstquote:1650,
        sndquote:1200,
        trdquote:750
      },
      {
        stateId: "MA",
        stateName: "Massachusetts",
        fstquote:320,
        sndquote:240,
        trdquote:130
      },
      {
        stateId: "MD",
        stateName: "Maryland",
        fstquote:1000,
        sndquote:700,
        trdquote:530
      },
      {
        stateId: "ME",
        stateName: "Maine",
        fstquote:1200,
        sndquote:850,
        trdquote:430
      },
      {
        stateId: "MIS",
        stateName: "Mississippi",
        fstquote:370,
        sndquote:320,
        trdquote:150
      },
      {
        stateId: "MI",
        stateName: "Michigan",
        fstquote:900,
        sndquote:650,
        trdquote:230
      },
      {
        stateId: "MN",
        stateName: "Minnesota",
        fstquote:900,
        sndquote:600,
        trdquote:235
      },
      {
        stateId: "NE",
        stateName: "Nebraska",
        fstquote:300,
        sndquote:260,
        trdquote:210
      },
      {
        stateId: "NV",
        stateName: "Nevada",
        fstquote:1800,
        sndquote:1350,
        trdquote:930
      },
      {
        stateId: "NH",
        stateName: "New Hampshire",
        fstquote:700,
        sndquote:300,
        trdquote:200
      },
      {
        stateId: "NM",
        stateName: "New Mexico",
        fstquote:800,
        sndquote:455,
        trdquote:230
      },
      {
        stateId: "NJ",
        stateName: "New Jersey",
        fstquote:500,
        sndquote:350,
        trdquote:150
      },
      {
        stateId: "NY",
        stateName: "New York",
        fstquote:1500,
        sndquote:1100,
        trdquote:550
      },
      {
        stateId: "ON",
        stateName: "Ontario",
        fstquote:950,
        sndquote:450,
        trdquote:220
      },
      {
        stateId: "NC",
        stateName: "North Carolina",
        fstquote:300,
        sndquote:225,
        trdquote:230
      },
      {
        stateId: "ND",
        stateName: "North Dakota",
        fstquote:1425,
        sndquote:850,
        trdquote:430
      },
      {
        stateId: "OK",
        stateName: "Oklahoma",
        fstquote:370,
        sndquote:230,
        trdquote:180
      },
      {
        stateId: "OR",
        stateName: "Oregon",
        fstquote:950,
        sndquote:650,
        trdquote:450
      },
      {
        stateId: "PA",
        stateName: "Pennsylvania",
        fstquote:390,
        sndquote:220,
        trdquote:190
      },
      {
        stateId: "RI",
        stateName: "Rhode Island",
        fstquote:1555,
        sndquote:1230,
        trdquote:750
      },
      {
        stateId: "SC",
        stateName: "South Carolina",
        fstquote:400,
        sndquote:310,
        trdquote:230
      },
      {
        stateId: "SD",
        stateName: "South Dakota",
        fstquote:700,
        sndquote:500,
        trdquote:290
      },
      {
        stateId: "TN",
        stateName: "Tennessee",
        fstquote:295,
        sndquote:220,
        trdquote:230
      },
      {
        stateId: "TX",
        stateName: "Texas",
        fstquote:1650,
        sndquote:1450,
        trdquote:1050
      },
      {
        stateId: "UT",
        stateName: "Utah",
        fstquote:900,
        sndquote:450,
        trdquote:130
      },
      {
        stateId: "VE",
        stateName: "Vermont",
        fstquote:370,
        sndquote:253,
        trdquote:230
      },
      {
        stateId: "VI",
        stateName: "Virginia",
        fstquote:300,
        sndquote:210,
        trdquote:170
      },
      {
        stateId: "WV",
        stateName: "West Virginia",
        fstquote:500,
        sndquote:258,
        trdquote:215
      },
      {
        stateId: "WI",
        stateName: "Wisconsin",
        fstquote:405,
        sndquote:350,
        trdquote:240
      },
      {
        stateId: "WY",
        stateName: "Wyoming",
        fstquote:1300,
        sndquote:650,
        trdquote:230
      },
    ];
    localStorage.setItem("dataQuote",JSON.stringify({statesData}));
    const currentState =localStorage.getItem('currentState')
    for(let i of statesData){
      if (i.stateId == currentState){
        quoute_opt(i)

      }
    }
    
      






/**


    let estimateInfos = statesData.map(state => {
      const monthlyCost =  Math.floor(Math.random() * 100) + 250;
      return {
        stateId: state.stateId,
        stateName: state.stateName,
        financedEstimate: 200,
        leasedEstimate: 200,
        paidInFullEstimate: 300,
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
      }
    })

    localStorage.setItem('',estimateInfos)
    
   
    //let state = localStorage.getItem("livewhere");
    console.log(estimateInfos)

   
    const currentInfo = estimateInfos.find(item => item.stateId === state);
    console.log("🚀 ~ file: dashboard.html:427 ~ currentInfo", currentInfo);
    document.getElementById('financedEstimate').textContent = currentInfo.financedEstimate;
    document.getElementById('leasedEstimate').textContent = currentInfo.leasedEstimate;
    document.getElementById('paidInFullEstimate').textContent = currentInfo.paidInFullEstimate;
    document.getElementById('monthlyCost').textContent = currentInfo.monthlyCost;
    document.getElementById('annualCost').textContent = currentInfo.annualCost;
    console.log("🚀 ~ file: dashboard.html:413 ~ state", state);

    const monthlyCost =  Math.floor(Math.random() * 100) + 250;
    const CARS = [
      {
        id: 0,
        model: 'BMW',
        totalAmount: 50000, // show total amount to each card
        // paidInFullEstimate: totalAmount + 'selected insureance quotes',
        // 'Financed Estimate' : '{((Total amount/100)*117.6)/72}+selected insurance',
        // 'Leased Estimate':  '({((Total amount/100)*117.6)/72}/4)+selected insurance'

        // paidInFullEstimate: 40000,
        // monthlyCost: monthlyCost,
        // annualCost: monthlyCost * 12,
        // image: '',
      },
      {
        id: 1,
        model: 'Toyota',
        totalAmount: 60000,
        image: '',
        paidInFullEstimate: 40000,
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
      },
      {
        id: 2,
        model: 'Lexus',
        totalAmount: 70000,
        image: '',
        paidInFullEstimate: 40000,
        monthlyCost: monthlyCost,
        annualCost: monthlyCost * 12,
      },
      // {
      //   id: 3,
      //   model: 'Benz',
      //   totalAmount: 40000,
      //   paidInFullEstimate: 40000,
      //   monthlyCost: monthlyCost,
      //   annualCost: monthlyCost * 12,
      // },
    ]
    
    CARS.forEach(car => {
      const cars_container = document.getElementById('vehicles-cards-container');
      $('#vehicles-cards-container').append(`<div class='col-lg-4 col-md-12 col-sm-12'><div class='card bg-section1-dark'><p>${car.model}</p><p class='card-footer-text'>Raul Olivares</p></div></div>`)
    })

    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "ee6a816d71msh23f26f3b8a913d7p1320bfjsn2c5f1e6621e7");
    myHeaders.append("X-RapidAPI-Host", "ev-charging-stations.p.rapidapi.com");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://ev-charging-stations.p.rapidapi.com/get_stations_1km?latitude=40.733&longitude=-74.202&region=us", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    

    const options = {
    method: 'GET',
    headers: {
            'X-RapidAPI-Key': 'ee6a816d71msh23f26f3b8a913d7p1320bfjsn2c5f1e6621e7',
            'X-RapidAPI-Host': 'electric-vehicle-charging-station-and-point.p.rapidapi.com'
        }
    };

  fetch('https://electric-vehicle-charging-station-and-point.p.rapidapi.com/us/elec.json?orderBy=%22city%22&equalTo=%22Sun%20Valley%22&print=%22pretty%22&limitToFirst=3', options)
    .then(response => response.json())
    .then(response => {
      console.log('response1', response);
      const stationsArray = Object.values(response);
      const stations = stationsArray.map(item => {
        return {
          station_name: item.station_name,
          street_address : item.street_address
        }
      })
      console.log("🚀 ~ file: dashboard.html:513 ~ stations ~ stations", stations);

    })
    .catch(err => console.error(err));*/
  };