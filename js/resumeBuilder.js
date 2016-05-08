/*
This is empty on purpose! Your code to build the resume will go here.
 */


//////////////////////////
// Object JSON
//////////////////////////
var education = {
  "schools": [{
    "name": "Nova Southeastern University",
    "location": "Fort Lauderdale, FL",
    "degree": "Masters",
    "majors": ["CS"],
    "dates": "2013",
    "url": "http://example.com"
  }, {
    "name": "Eckerd College",
    "location": "Saint Petersburg, FL",
    "degree": "BA",
    "majors": ["CS"],
    "dates": "2003",
    "url": "http://example.com"
  }],
  "onlineCourses": [{
    "title": "javascript Crash Course",
    "school": "Udacity",
    "date": "2014",
    "url": "http://www.udacity.com/course/ud804"
  }],
  "display": ""
};

var work = {
  "jobs": [{
    "employer": "Planet Express",
    "title": "Delivery Boy",
    "location": "wanted to",
    "dates": "January 3000 - Future",
    "description": "Who moved my cheese cheesy feet cauliflower cheese. \
      Queso taleggio when the cheese comes out everybody 's happy airdale \
      ricotta cheese and wine paneer camembert de nomandie.Swiss mozzerella \
      cheese slices feta fromage fais airedale swiss cheesecake.Hard cheese \
      blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
  }, {
    "employer": "Panucci's Pizza",
    "title": "Delivery Boy",
    "location": "wanted to",
    "dates": "1998 - December 31, 1999",
    "description": "Who moved my cheese cheesy feet cauliflower cheese." +
      "Queso taleggio when the cheese comes out everybody 's happy airdale" +
      "ricotta cheese and wine paneer camembert de nomandie.Swiss mozzerella" +
      "cheese slices feta fromage fais airedale swiss cheesecake.Hard cheese" +
      "blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
  }],
  "display": ""
};

var portfolio = {
  "projects": [{
    "title": "Sample Project 1",
    "datesWorked": "2014",
    "description": "Who moved my cheese cheesy feet cauliflower cheese." +
      "Queso taleggio when the cheese comes out everybody 's happy airdale" +
      "ricotta cheese and wine paneer camembert de nomandie.Swiss mozzerella" +
      "cheese slices feta fromage fais airedale swiss cheesecake.Hard cheese" +
      "blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    "images": [
      "images/197x148.gif",
      "images/197x148.gif"
    ]
  }],
  "display": ""
};

var bio = {
  "name": "John Doe",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(650) 555-5555",
    "email": "john@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "San Francisco"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "biopic": "images/fry.jpg",
  "display": ""
};

////////////////////////////
// object display functions
////////////////////////////

// header
header.display = function() {
  var concatContact = HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLgithub.replace("%data%", bio.contacts.github);

  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#name").append(HTMLheaderRole.replace("%data%", bio.role));

  $("#topContacts").append(concatContact);
  $("#contactMethods").append(HTMLlocation.replace("%data%", bio.contacts.location));

  // $("#header").append(HTMLbioPicSection);
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

  $("#header").append(HTMLrightOfBioPic);
  $("#rightOfBioPic").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  $("#rightOfBioPic").append(HTMLskillsStart);

  for (ndx in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[ndx]);
    $("#rightOfBioPic").append(formattedSkill);
  }
}

// work
work.display = function() {
  for (ndx in work.jobs) {
    if (work.jobs.hasOwnProperty(ndx)) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[ndx].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[ndx].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDate = HTMLworkDates.replace("%data%", work.jobs[ndx].dates);
      $(".work-entry:last").append(formattedDate);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[ndx].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

// portfolio
portfolio.display = function() {
  for (ndx in portfolio.projects) {
    if (portfolio.projects.hasOwnProperty(ndx)) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", portfolio.projects[ndx].title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", portfolio.projects[ndx].datesWorked));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", portfolio.projects[ndx].description));

      if (portfolio.projects[ndx].images.length > 0) {
        for (index in portfolio.projects[ndx].images)
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%", portfolio.projects[ndx].images[index]));
      }
    }
  }
}

// education
education.display = function() {
  $("#education").append(HTMLschoolStart);

  for (ndx in education.schools) {
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[ndx].name));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[ndx].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[ndx].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[ndx].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[ndx].majors));
  }
  for (ndx in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineClasses);
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[ndx].title));
    $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[ndx].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[ndx].date));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[ndx].url));
  }
}

////////////////////////////
// display map
////////////////////////////
function displayMap() {
  $("#mapDiv").append(googleMap);

  initializeMap();
}

/////////////////////
// Bio
/////////////////////
header.display();

/////////////////////
// Work Experience
/////////////////////
work.display();

/////////////////////
// Portfolio
/////////////////////
portfolio.display();

/////////////////////
// Education
/////////////////////
education.display();

/////////////////////
// Map
/////////////////////
displayMap();

/////////////////////
// Other
/////////////////////
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY)
});

function locationizer(work_obj) {
  var locationArray = [];

  for (ndx in work_obj.jobs) {

    if (work_obj.jobs.hasOwnProperty(ndx)) {
      locationArray.push(work_obj.jobs[ndx].location);
    }
  }
  return locationArray;
}
