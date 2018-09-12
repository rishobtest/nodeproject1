(function(){

    var projectList=[{projectName:"Jumpy Jeb", description:"A Unity2D Game", image:"img/androidstudio.png"},
                      {projectName:"Rutgers Health", description:"An Android App", image:"img/androidstudio.png"}
                    {projectName:"This Website", description:"HTML, CSS, and Javascript", image:"img/androidstudio.png"}];

  var list = document.getElementById('project-list');
  for(var i = 0; i < projectList.length; i++){
    var newTitle = document.createElement('h3');
    newTitle.textContent = projectList[i].projectName;
    list.appendChild(newTitle);

    var newBody = document.createElement('h4');
    newBody.textContent = projectList[i].description;
    list.appendChild(newBody);
  }


}());
