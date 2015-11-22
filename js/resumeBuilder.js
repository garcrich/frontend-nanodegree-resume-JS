
//Defines contact information and skills
var bio = {
	"name": "Ricky Garcia",
	"role": "eServices Specialist",
	"contacts": {
		"mobile": "208-705-0955",
		"email": "garcrich@outlook.com",
		"github": "garcrich",
		"blog" : "http://bit.ly/1kXT0C9",
		"location": "Pocatello, ID 83202"
	},
	"welcomeMessage": "Thanks for stopping by!",
	"skills": [
	"HTML", "CSS", "JavaScript", "Responsive Web Design", "Advanced Microsoft Office", "CorelDRAW", "Git"
	],
	"bioPic": "images/bioPic.jpg",
	"display": "",
};

bio.display = function () {
//replaces helper.js text with name and title
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//sets Name and title to top of #header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Defines new var that uses helper.js and then replaces text with values set in bio
var formattedContact = HTMLcontactGeneric.replace("%contact%", "LinkedIn").replace("%data%", "https://www.linkedin.com/in/richardgarcia2");
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//sets contact information to bottom of #header
$("#topContacts").append(formattedContact);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);

$("#footerContacts").append(formattedContact);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);

// replaces helper.js text with profile picture and welcome message
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// appends biopic and welcome message to #header
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
};

bio.display();

// if any skills are listed will be appended to #header
bio.skills.display = function () {
		if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill);
	}
};

bio.skills.display();

//Defines work experience
var work = {
		"jobs": [
			{
				"employer": "Idaho Centeral Credit Union",
				"title": "eServices Specialist",
				"location": "4400 Central Way Pocatello ID, US 83202",
				"dates": "April 2014 - Present",
        /*jshint multistr: true */
				"description": "Solving financial concerns by actively listening to inquiries then providing services and solutions addressing needs \
				while simultaneously creating value for both Idaho Central Credit Union and its members. \
				<br> Increasing productivity and efficiency by using advanced features of Microsoft Suite doubling daily completed tasks.\
				<br>Writing correspondence with credit union members via email and real time messaging on a daily basis both in an accurate and timely manner.",
				"url": "https://www.iccu.com"
			},
			{
				"employer": "Self employed",
				"title": "DJ",
				"location": "4969 Sunflower St. Pocatello, ID 83202",
				"dates": "April 2013 - Present",
				"description": "Communicating with clients on a continual basis to ensure that their event is custom tailored to their individual wants and needs.\
				 This includes phone conversations, email correspondence, and in person interviews.\
				 <br> Supplying memorable entertainment experiences through event production specifically providing: PA system, visual enhancement via enhanced lighting, harmonious music matching.\
				 <br> Researching new products and services to provide to increase profits.",
				"url": "https://www.facebook.com/DJ-Ricky-G-122563614485436"
			},
			{
				"employer": "Buffalo Wild Wings",
				"title": "Server",
				"location": "4200 Pole Line Rd, Pocatello, ID 83202",
				"dates": "May 2012 - September 2012",
				"description": "Developed critical thinking skills to provide fast and efficient service.\
				<br>Provided friendly and precise service in order to create a memorable experience for guests.",
				"url": "http://www.buffalowildwings.com"
			}
		]
	};
work.display = function() {
    var job;
  	
		for (job in work.jobs) {
			if (work.length > 0){
			// create new div for work experience
			$("#workExperience").append(HTMLworkStart);
			// concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#",work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formatttedEmployerTitle = formattedEmployer  + formattedTitle;

			$(".work-entry:last").append(formatttedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

var projects = {
		"projects": [
		{
			"title":  "Responsive Portfolio Web Page",
			"dates":  "09/27/2015 - 10/19/2015",
			"description": "Project one of Udacity's Nano Degree program. This will serve as a template and will be updated when other projects have been completed.\
			Website is responsive i.e. will adapt depending on the device that you're using.",
			"images": [
				"images/portfolio.png"
			],
			"url": "https://rawgit.com/garcrich/responsive_portfolio/master/index.html"
		},
		{
			"title":  "Online Resume",
			"dates":  "10/21/2015 - 11/23/2015",
			"description" : "Project Two of Udacity's Nano Degree program. A resume that was created using HTML, CSS, and JavaScript",
			"images": [
				"images/resume.png"
			],
			"url": ""
		}
	]
};

projects.display = function() {
	var project;
	for (project in projects.projects) {
			if(projects.projects[project].images.length > 0){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDescription);

			var image;
			for (image in projects.projects[project].images){
					if(projects.projects[project].images.length > 0){
					 {
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}	
			}
		}
	}
};

projects.display(); 

var education = {
	"schools": [
		{
			"name": "Udacity",
			"majors": ["Front-end Development"],
			"degree": "Nanodegree",
			"dates": "2015-2016",
			"location": " ",
			"url": "https://www.udacity.com"
		},
		{
			"name": "Idaho State University",
			"city": "Pocatello ID, US",
			"degree": "Bachelors",
			"majors": ["Economics"],
			"dates": "2009-2014",
			"location": " 921 S 8th Ave, Pocatello, ID 83201",
			"url": "http://www.isu.edu/"
		}
		
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "9/27/2015 - 10/16/2015",
			"schoolurl": "https://www.udacity.com",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "9/27/2015 - 10/16/2015",
			"schoolurl": "https://www.udacity.com",
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "9/27/2015 - 10/16/2015",
			"schoolurl": "https://www.udacity.com",
			"url": "https://www.udacity.com/course/responsive-images--ud882-nd"
		},
		{
			"title": "Version Control with Git and GitHub",
			"school": "Udacity",
			"dates": "10/17/2015 - 10/26/2015",
			"schoolurl": "https://www.udacity.com",
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775-nd"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "10/27/2015 - 11/23/2015",
			"schoolurl": "https://www.udacity.com",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "10/27/2015 - 11/23/2015",
			"schoolurl": "https://www.udacity.com",
			"url":  "https://www.udacity.com/course/javascript-basics--ud804-nd"
		},
		{
			"title": "Front-end Web Developement",
			"school": "Treehouse",
			"dates": "8/15/2015 - 11/23/2015",
			"schoolurl": "https://teamtreehouse.com/",
			"url":  "https://teamtreehouse.com/tracks/front-end-web-development"
		},
		{
			"title": "Web Design",
			"school": "Treehouse",
			"dates": "8/15/2015 - 11/23/2015",
			"schoolurl": "https://teamtreehouse.com/",
			"url":  "https://teamtreehouse.com/tracks/front-end-web-development"
		}
	]
};

education.display = ( function() {
  	var school;
		for (school in education.schools) {
			if(education.lenth > 0){
			// create new div for school history
			$("#education").append(HTMLschoolStart);
			// concat employer and title
			var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedHTMLschoolName);
			var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedHTMLschoolDegree);
			var formattedHTMLschoolDates = HTMLschoolDegree.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedHTMLschoolDates);
			var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedHTMLschoolLocation);
			var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedHTMLschoolMajor);
		}
	}
});

education.display ();

education.displayOnline = function() {
  var course;
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			if(education.onlineCourses.length > 0){
			// create new div for school history
			$("#education").append(HTMLschoolStart);
			// concat employer and title
			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleAndSchool = formattedHTMLonlineTitle.concat(formattedHTMLonlineSchool);
			$(".education-entry:last").prepend(formattedTitleAndSchool);
			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedHTMLonlineDates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedHTMLonlineURL);		
		}
	}
};

education.displayOnline();

$("#mapDiv").append(googleMap);