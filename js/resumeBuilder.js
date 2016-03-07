
// HEADER Objects
var bio = {
    "name": "Silvia Velicu",
    "role": "Front-End Developer",
    "contacts": {
        "email": "odileww@gmail.com",
        "github": "https://github.com/odile-ww",
        "twitter": "@odile_ww",
        "location": "Sofia, Bulgaria"
    },
    "picture": "images/me.jpg",
    "message": "Hello and Welcome to my Page!",
    "skills": ["communication", "HTML", "CSS", "management"]
    
};

//BODY Objects

var work = {
	"employment": [{
        "employer": "Ubisoft Sofia",
		"position": "Head of HR & Communications",
        "dates": "2008 to 2015",	
		"location": "Sofia, Bulgaria",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
        "employer": "Ubisoft Sofia",
		"position": "Operations Manager",
        "dates": "2007 to 2008",	
		"location": "Sofia, Bulgaria",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
		"employer": "Ubisoft Bucharest",
        "position": "PR Manager",
        "dates": "2004 to 2006",
		"location": "Bucharest, Romania",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
		"employer": "Ubisoft Bucharest",
        "position": "Communications Specialist / Assistant Manager",
        "dates": "2002 to 2004",
		"location": "Bucharest, Romania",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
        "employer": "Softwin LTD",
		"position": "Customer Center Agent",
		"dates": "2000 to 2002",
		"location": "Bucharest, Romania",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}]
}

var projects = {
	"projectList": [{
		"name": "To-do app",
		"dates": "October 2015",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"image": "#"
	}, {
		"name": "Picture Gallery",
		"dates": "November 2015",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"image": "#"
	}, {
		"name": "Portfolio Site",
		"dates": "January 2016",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"image": "#"
	}],
        
} 

var education = {
	"schools": [{
		"name": "Bucharest State University",
		"major": ["Spanish", "French"],
		"graduation": 2002,
		"city": "Bucharest"
	}, {
		"name": "Bucharest State University",
		"major": ["PR and Media"],
		"graduation": 2005,
		"city": "Bucharest"
	}],
	"onlineCourses": [{
        "title": "Responsive Web Development",
		"school": "Coursera",
		"dates": 2015,
		"url": "https://www.coursera.org/learn/responsive-web-design"
	}, {
		"title": "Front-End Development Nanodegree",
		"school": "Udacity",
        "dates": 2016,
		"url": "https://www.udacity.com/"
	}]
}

// Format and display header elements //
bio.display = function() {
    $("#header").append(HTMLskillsStart);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").prepend(formattedBioPic);
        
    if (bio.skills.length > 0) {
        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
}
bio.display();
   
work.display = function() {
    for (var job in work.employment) {
        if (work.employment.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employment[job].employer); 
            var formattedTitle = HTMLworkTitle.replace("%data%", work.employment[job].position);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.employment[job].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.employment[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.employment[job].description);
            $(".work-entry:last").append(formattedDescription);
        } 
    }
} 
work.display();

projects.display = function() {
    for (var project in projects.projectList) {
        if (work.employment.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);
            var formattedName = HTMLprojectTitle.replace("%data%", projects.projectList[project].name);
            $(".project-entry:last").append(formattedName);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects.projectList[project].description);
            $(".project-entry:last").append(formattedProjectDescr);
        }
    }  
}
projects.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].graduation);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
            $(".education-entry:last").append(formattedSchoolLocation);
        }  
    }
     $(".education-entry:last").append(HTMLonlineClasses);
     for (var course in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(course)) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }      
    }
}
education.display();

//Appending the nternationalize button to the page
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);