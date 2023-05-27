const hotels = [
    {
        id: 123,
        hotelName: "Ruby International Hotel",
        rating: 8.3,
        reviewCount: 2393,
        pricePerNight: 308.34,
        imageSrc:
            "https://livedemo00.template-help.com/wt_prod-19522/images/job-portal-4-370x264.jpg",
        update: 9,
        hasFreeCancellation: true,
        includesBreakfast: true,
        isBestSeller: false,
        hasParking: false,
        allowsPets: false,
        hasFitnessCenter: false
    },
    {
        id: 124,
        hotelName: "Hotel Jackson",
        rating: 5.6,
        reviewCount: 40642,
        pricePerNight: 240.0,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",
        update: 22,
        hasFreeCancellation: false,
        includesBreakfast: true,
        isBestSeller: true,
        hasParking: false,
        allowsPets: false,
        hasFitnessCenter: true
    },
    {
        id: 125,
        hotelName: "Atom Suites Hotel",
        rating: 8.7,
        reviewCount: 5301,
        pricePerNight: 314,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-engin-akyurt-2725675-scaled.jpg",
        update: 2,
        hasFreeCancellation: false,
        includesBreakfast: false,
        isBestSeller: true,
        hasParking: true,
        allowsPets: false,
        hasFitnessCenter: true
    },
    {
        id: 126,
        hotelName: "JS Plaza Hotel",
        rating: 7.7,
        reviewCount: 1519,
        pricePerNight: 427,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-pixabay-271619-scaled.jpg",
        update: 14,
        hasFreeCancellation: true,
        includesBreakfast: false,
        isBestSeller: false,
        hasParking: false,
        allowsPets: true,
        hasFitnessCenter: true
    },
    {
        id: 127,
        hotelName: "State Street Hotel",
        rating: 8.5,
        reviewCount: 1271,
        pricePerNight: 289,
        imageSrc:
            "https://livedemo00.template-help.com/wt_prod-19522/images/job-portal-2-370x264.jpg",
        update: 8,
        hasFreeCancellation: true,
        includesBreakfast: false,
        isBestSeller: false,
        hasParking: true,
        allowsPets: false,
        hasFitnessCenter: false
    },
    {
        id: 123,
        hotelName: "Ruby International Hotel",
        rating: 8.3,
        reviewCount: 2393,
        pricePerNight: 308.34,
        imageSrc:
            "https://livedemo00.template-help.com/wt_prod-19522/images/job-portal-4-370x264.jpg",
        update: 9,
        hasFreeCancellation: true,
        includesBreakfast: true,
        isBestSeller: false,
        hasParking: false,
        allowsPets: false,
        hasFitnessCenter: false
    },
    {
        id: 124,
        hotelName: "Hotel Jackson",
        rating: 5.6,
        reviewCount: 40642,
        pricePerNight: 240.0,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",
        update: 22,
        hasFreeCancellation: false,
        includesBreakfast: true,
        isBestSeller: true,
        hasParking: true,
        allowsPets: false,
        hasFitnessCenter: true
    },
    {
        id: 125,
        hotelName: "Atom Suites Hotel",
        rating: 8.7,
        reviewCount: 5301,
        pricePerNight: 314,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-engin-akyurt-2725675-scaled.jpg",
        update: 2,
        hasFreeCancellation: false,
        includesBreakfast: false,
        isBestSeller: true,
        hasParking: false,
        allowsPets: true,
        hasFitnessCenter: true
    },
    {
        id: 127,
        hotelName: "State Street Hotel",
        rating: 8.5,
        reviewCount: 1271,
        pricePerNight: 289,
        imageSrc:
            "https://livedemo00.template-help.com/wt_prod-19522/images/job-portal-2-370x264.jpg",
        update: 8,
        hasFreeCancellation: true,
        includesBreakfast: false,
        isBestSeller: false,
        hasParking: true,
        allowsPets: true,
        hasFitnessCenter: false
    },
    {
        id: 124,
        hotelName: "Hotel Jackson",
        rating: 5.6,
        reviewCount: 40642,
        pricePerNight: 240.0,
        imageSrc:
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",
        update: 22,
        hasFreeCancellation: false,
        includesBreakfast: true,
        isBestSeller: true,
        hasParking: true,
        allowsPets: false,
        hasFitnessCenter: true
    }
];

let hasFreeCancellation = document.getElementsByClassName("hasFreeCancellation");
let includesBreakfast = document.getElementsByClassName("includesBreakfast");
let hasParking = document.getElementsByClassName("hasParking");
let allowsPets = document.getElementsByClassName("allowsPets");
let hasFitnessCenter = document.getElementsByClassName("hasFitnessCenter");
let viewAll = document.getElementById("viewAll");
let listRoom = document.getElementById('list-room')
let checkBoxFilter = document.querySelectorAll(".filter-checkbox");

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function displayHotelFiltered(hotels) {
    hotels.forEach((hotel) => {
        const content = `
    <div class="card mb-3 list-room-item">
        <div class="row g-0 item">
            <div class="col-md-4">
                <img src="${hotel.imageSrc}" class=" card-img rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="card-title item-header">
                        <h3 class="hotel-name">${hotel.hotelName}</h3>
                        <span class="rating">${hotel.rating}</span>
                    </div>
                    <p class="card-text"><small class="text-body-tertiary">${hotel.reviewCount}
                            reviews</small></p>
                    <div class="room-options hasFreeCancellation">Free cancellation</div>
                    <div class="room-options includesBreakfast">Breakfast included</div>
                    <div class="room-options hasParking">Onsite parking</div>
                    <div class="room-options allowsPets">Allows Pets</div>
                    <div class="room-options hasFitnessCenter">Fitness center</div>
                    <div class="room-price pricePerNight">${hotel.pricePerNight}$ <span style="font-size: 20px;
                            color: black;">per night</span></div>
                    <p class="card-text"><small class="text-body-tertiary">Last updated ${hotel.update} mins
                            ago</small>
                    </p>
                    <div class="text-end">
                        <a href="#" class="btn btn-add-to-card">See our rooms</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
        listRoom.innerHTML += content;
    });
    for (let i = 0; i < hotels.length; i++) {
        if (!hotels[i].hasFreeCancellation) {
            hasFreeCancellation[i].style = "display : none"
        }
        if (!hotels[i].includesBreakfast) {
            includesBreakfast[i].style = "display : none"
        }
        if (!hotels[i].hasParking) {
            hasParking[i].style = "display : none"
        }
        if (!hotels[i].allowsPets) {
            allowsPets[i].style = "display : none"
        }
        if (!hotels[i].hasFitnessCenter) {
            hasFitnessCenter[i].style = "display : none"
        }
    }
}
if (viewAll.checked) {
    displayHotelFiltered(hotels);
}
function viewAllRooms() {
    listRoom.innerHTML = ``;
    displayHotelFiltered(hotels);
}
function filterHasFreeCancellation() {
    listRoom.innerHTML = ``;
    const newHotels = [];
    hotels.forEach((hotel) => {
        if (hotel.hasFreeCancellation) {
            newHotels.push(hotel);
        }
    });
    displayHotelFiltered(newHotels);
}
function filterIncludesBreakfast() {
    listRoom.innerHTML = ``;
    const newHotels = [];
    hotels.forEach((hotel) => {
        if (hotel.includesBreakfast) {
            newHotels.push(hotel);
        }
    });
    displayHotelFiltered(newHotels);
}
function filterhasParking() {
    listRoom.innerHTML = ``;
    const newHotels = [];
    hotels.forEach((hotel) => {
        if (hotel.hasParking) {
            newHotels.push(hotel);
        }
    });
    displayHotelFiltered(newHotels);
}
function filterAllowsPets() {
    listRoom.innerHTML = ``;
    const newHotels = [];
    hotels.forEach((hotel) => {
        if (hotel.allowsPets) {
            newHotels.push(hotel);
        }
    });
    displayHotelFiltered(newHotels);
}
function filterHasFitnessCenter() {
    listRoom.innerHTML = ``;
    const newHotels = [];
    hotels.forEach((hotel) => {
        if (hotel.hasFitnessCenter) {
            newHotels.push(hotel);
        }
    });
    displayHotelFiltered(newHotels);
}

let thisPage = 1;
let limit = 3;
let list = document.querySelectorAll('.list-room-item');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}