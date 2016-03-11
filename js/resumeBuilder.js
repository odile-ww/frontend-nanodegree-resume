
// HEADER Objects
var bio = {
    "name": "Silvia Velicu",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "(00359)-876-877-525",
        "email": "odileww@gmail.com",
        "github": "https://github.com/odile-ww",
        "twitter": "@odile_ww",
        "location": "Sofia, Bulgaria"
    },
    "welcomeMessage": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" , 
    "skills": ["HTML", "CSS", "Bootstrap","Javascript", "jQuery", "Python", "communication", "problem-solving", "team-work", "management", "planning & budgeting"],
    "biopic": "images/me.jpg",
    "display" : function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedBioPic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedGitHub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        
        var formattedWelcomeMessage = HTMLwelcomeMsg .replace("%data%", bio.welcomeMessage);        
        $("#summary").append(formattedWelcomeMessage);     
        $("#summary").append(HTMLskillsStart);
        if (bio.skills.length > 0) {
            for (var skill in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
        }
    }
  };

//BODY Objects
var work = {
	"jobs": [{
        "employer": "Ubisoft Sofia",
		"title": "Head of HR & Communications",	
		"location": "Sofia, Bulgaria",
        "dates": "2008 to 2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
        "employer": "Ubisoft Sofia",
		"title": "Operations Manager",
        "location": "Sofia, Bulgaria",
        "dates": "2007 to 2008",	
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
		"employer": "Ubisoft Bucharest",
        "title": "PR Manager",
        "location": "Bucharest, Romania",
        "dates": "2004 to 2006",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
		"employer": "Ubisoft Bucharest",
        "title": "Communications Specialist / Assistant Manager",
        "location": "Bucharest, Romania",
        "dates": "2002 to 2004",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}, {
        "employer": "Softwin LTD",
		"title": "Customer Center Agent",
        "location": "Bucharest, Romania",
		"dates": "2000 to 2002",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	}],
    "display" : function() {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                $(".work-entry:last").append(formattedEmployer  + formattedTitle);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedWorkDates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            } 
        }
    } 
}

var projects = {
	"projectList": [{
		"title": "To-do app",
		"dates": "October - November 2015",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"images": ["https://unsplash.it/300?image=20", 
        "https://unsplash.it/300?image=668"]
	}, {
		"title": "Picture Gallery",
		"dates": "November - December 2015",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"images": ["https://unsplash.it/300?image=237", 
        "https://unsplash.it/300?image=593"]
	}, {
		"title": "Portfolio Site",
		"dates": "December 2015 - January 2016",
		"description": "Sit ex timeam scriptorem, id mei lorem delenit, legimus vivendo ex usu.",
		"images": ["https://unsplash.it/300?image=445", 
        "https://unsplash.it/300?image=180"]
	}],
    "display" : function() {
        for (var project in projects.projectList) {
            if (projects.projectList.hasOwnProperty(project)) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title);
                $(".project-entry:last").append(formattedProjectTitle);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates);
                $(".project-entry:last").append(formattedProjectDates);
                var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects.projectList[project].description);
                $(".project-entry:last").append(formattedProjectDescr);
                if (projects.projectList[project].images.length > 0) {
                    for (var img in projects.projectList[project].images) {
                        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images[img]);
                        $(".project-entry:last").append(formattedprojectImage);
                }
            }

        }  
        }    
    }
} 

var education = {
	"schools": [{
		"name": "Bucharest State University",
        "location": "Bucharest, Romania",
        "degree": "Bachelor of Arts",
		"majors": ["Spanish &#38; French"],
		"dates": "1998 - 2002",
        "url": "http://lls.unibuc.ro/"
		
	}, {
		"name": "Bucharest State University",
        "location": "Bucharest, Romania",
        "degree": "Postgraduate Certificate",
		"majors": ["Public Relations &#38; Media"],
		"dates": "2004 - 2005",
		"url": "http://www.unibuc.ro/facultati/jurnalism/index.php"
	}],
	"onlineCourses": [{
        "title": "Responsive Web Development",
		"school": "Coursera",
		"date": "October - November 2015",
		"url": "https://www.coursera.org/account/accomplishments/records/VJPYVLMG5CR4"
	}, {
         "title": "An Introduction to Interactive Programming in Python (Part 1)",
        "school": "Coursera",
		"date": "November 2015",
		"url": "https://www.coursera.org/account/accomplishments/certificate/NQ4NU56QT"
    }, {
		"title": "Front-End Development Nanodegree",
		"school": "Udacity",
        "date": "In progress",
		"url": "https://www.udacity.com/"
	}],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                $("#education").append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $(".education-entry:last").append(formattedSchoolName + formattedDegree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedSchoolLocation);
                if (education.schools[school].majors.length > 0) {
                    for (var item in education.schools[school].majors) {
                        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[item]);
                        $(".education-entry:last").append(formattedMajor);
                    }
                }              
                var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
                $(".education-entry:last").append(formattedSchoolURL);          
            }  
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(course)) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                $(".education-entry:last").append(formattedOnlineDate);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedOnlineURL);
            }      
        }
    }
}

//Function calls
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);