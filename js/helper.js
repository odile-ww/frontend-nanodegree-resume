/*
This file contains all of the helper functions that make resumeBuilder.js possible. 
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1><br>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric =
    '<li class="flex-item"><span class="red-text">%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="red-text">mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="red-text">email</span><span class>%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="red-text">twitter</span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="red-text">github</span><span class>%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="red-text">blog</span><span class>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="red-text">location</span><span>%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';

var HTMLwelcomeMsg = '<div class="welcome-message"><h3>Hello and Welcome to my Page!</h3><p>%data%</p></div>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><strong>%data%</strong></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h4>%data%';
var HTMLworkTitle = ' &#45; %data%</h4>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h3><a>%data%</a></h3>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<br><p>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-pic">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<h4>%data%';
var HTMLschoolDegree = ' &#45; %data%</h4>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<br><strong>Major: %data%</strong>';
var HTMLschoolURL = '<br><a href="#">%data%</a>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<h4>%data%';
var HTMLonlineSchool = ' &#45; %data%</h4>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
Code for The International Name challenge in Lesson 2 - Removed the button from the final version of the resume.

function inName() {
    var finalName = bio.name;
    var names = bio.name.split(' ');
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    finalName = names.join(' ');

    return finalName;
};

$(document).ready(function() {
    $('button').click(function() {
        var iName = inName() || function() {};
        $('#name').html(iName);
    });
});
*/

/*
Code to collect click locations
*/
var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /* 
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js. 
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide: 
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide: 
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});