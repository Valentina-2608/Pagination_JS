
/* Script */


/* Creating new element */

function createTour(elem, elem_image, elem_caption, elem_duration, elem_information){
	let parent = document.getElementById('tours');	
	let new_tour = document.createElement('div');
	new_tour.classList.add('tour_card');
	parent.appendChild(new_tour);
	
	
    /* Add image */
    let tour_image = document.createElement('img');
    tour_image.classList.add('tour_image');
    tour_image.src = elem_image;
    new_tour.appendChild(tour_image);
	
	
	/* Add caption */
    let tour_caption = document.createElement('div');
    tour_caption.classList.add('tour_caption');
    tour_caption.innerHTML = elem_caption;
    new_tour.appendChild(tour_caption);
	
    /* Add duration */
    let tour_duration = document.createElement('div');
    tour_duration.classList.add('tour_duration');
    tour_duration.innerHTML = elem_duration;
    new_tour.appendChild(tour_duration);
	
	/* Add information */
    let tour_information = document.createElement('div');
    tour_information.classList.add('tour_information');
    tour_information.innerHTML = elem_information;
    new_tour.appendChild(tour_information);
	
}	




/* function load */
function load(){
	for(let tour of myTours){
	 	createTour(tour, tour.image, tour.caption, tour.duration, tour.information);
}
}
