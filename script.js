
/* Script */


/* Create list of recipes and pagination */


function load(){
    let pagination = document.getElementById('pagination');
    let cardsOnPage = 6;
    let countOfItems = Math.ceil(myTours.length/cardsOnPage);

    let showPage = (function(){
        let active;
            return function(item){
    
             if (active){
                active.classList.remove('active_item');
            }

            active = item;
            item.classList.add('active_item');



            let pageNumber =+item.innerHTML;
            let start = (pageNumber - 1 ) * cardsOnPage;
            let end = start + cardsOnPage;

            let cards = myTours.slice(start, end);
            let parent = document.getElementById('tours');
            parent.innerHTML = '';
            for(let elem of cards){
      
                let new_tour = document.createElement('div');
	            new_tour.classList.add('tour_card');
	            parent.appendChild(new_tour);
	
	
                /* Add image */
                let tour_image = document.createElement('img');
                tour_image.classList.add('tour_image');
                tour_image.src = elem.image;
                new_tour.appendChild(tour_image);
	
	
	            /* Add caption */
                let tour_caption = document.createElement('div');
                tour_caption.classList.add('tour_caption');
                tour_caption.innerHTML = elem.caption;
                new_tour.appendChild(tour_caption);
	
                 /* Add duration */
                let tour_duration = document.createElement('div');
                tour_duration.classList.add('tour_duration');
                tour_duration.innerHTML = elem.duration;
                new_tour.appendChild(tour_duration);
	
	            /* Add information */
                let tour_information = document.createElement('div');
                tour_information.classList.add('tour_information');
                tour_information.innerHTML = elem.information;
                new_tour.appendChild(tour_information);
                
                
         }
       
    };
    
}());


let items = [];

/* pagination's items */
    for(let i = 1; i<= countOfItems; i++){
        let li = document.createElement('li');
        li.innerHTML = i;
        pagination.appendChild(li)
        items.push(li);
    }

    showPage(items[0]);

    for(let item of items){
        item.addEventListener('click', function(){
            showPage(this);
        });
    }
   
}