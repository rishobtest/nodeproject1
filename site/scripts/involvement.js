document.onload = firebaseStuff();

var clubList = [];
var workList = [];
var x = true;

function gotData(data){
  var lists = data.val();
  var clubs = lists['clublist'];
  var cindexes = Object.keys(clubs);
  var works = lists['worklist'];
  var windexes = Object.keys(works);

  for(var i = 0; i < cindexes.length; i++){
    var k = cindexes[i];
    var dworkplace = clubs[k].Workplace;
    var ddetails = clubs[k].Details;
    var ddescription = clubs[k].Description;
    var dimages = clubs[k].Image;
    clubList.push({workplace:dworkplace,details:ddetails,description:ddescription,imageLoc:dimages});
  }


  for(var i = 0; i < windexes.length; i++){
    var k = windexes[i];
    var dworkplace = works[k].Workplace;
    var ddetails = works[k].Details;
    var ddescription = works[k].Description;
    var dimages = works[k].Image;
    workList.push({workplace:dworkplace,details:ddetails,description:ddescription,imageLoc:dimages});
  }

  involvement();
}

function firebaseStuff(){
  var config = {
  apiKey: "AIzaSyAYMd4waw5cuFshcYVGLpDXpoDnmy7fqSk",
  authDomain: "portfoliowebsite1.firebaseapp.com",
  databaseURL: "https://portfoliowebsite1.firebaseio.com",
  projectId: "portfoliowebsite1",
  storageBucket: "portfoliowebsite1.appspot.com",
  messagingSenderId: "54309980754"
};
firebase.initializeApp(config);
  var database = firebase.database();
  var ref = database.ref();
  ref.on('value', gotData);


}

function involvement(){

  var htmlworklist = document.getElementById('work-list');

  for(var i = 0; i < workList.length; i++){
    var newBlock = document.createElement('div');
    newBlock.className = "block";

    htmlworklist.appendChild(newBlock);

    var newImage = document.createElement('img');
    newImage.className = "img-left";
    newImage.src = workList[i].imageLoc;
    newBlock.appendChild(newImage);
    var newWorkplace = document.createElement('h3');
    newWorkplace.className = "workplace";
    newWorkplace.textContent = workList[i].workplace;
    newBlock.appendChild(newWorkplace);

    var newPosition = document.createElement('h4');
    newPosition.className = "position";
    newPosition.textContent = workList[i].details;
    newBlock.appendChild(newPosition);

    var newDescription = document.createElement('p');
    newDescription.className = "work";
    newDescription.innerHTML = workList[i].description;
    newBlock.appendChild(newDescription);
  }

  var htmlclublist = document.getElementById('club-list');

  for(var i = 0; i < clubList.length; i++){
    var newBlock = document.createElement('div');
    newBlock.id = "block"+i;
    newBlock.className = "block";

    htmlclublist.appendChild(newBlock);

    var newImage = document.createElement('img');
    newImage.className = "img-left";
    newImage.src = clubList[i].imageLoc;
    newBlock.appendChild(newImage);

    var newWorkplace = document.createElement('h3');
    newWorkplace.className = "workplace";
    newWorkplace.id = "workplace";
    newWorkplace.textContent = clubList[i].workplace;
    newBlock.appendChild(newWorkplace);

    var newPosition = document.createElement('h4');
    newPosition.className = "position";
    newPosition.textContent = clubList[i].details;
    newBlock.appendChild(newPosition);

    var newDescription = document.createElement('p');
    newDescription.className = "work";
    newDescription.innerHTML = clubList[i].description;
    newBlock.appendChild(newDescription);

  }
  return;

}
