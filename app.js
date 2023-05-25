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
        hasRoomService: false,
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
        hasRoomService: true,
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
        hasRoomService: false,
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
        hasRoomService: false,
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
        hasRoomService: true,
        hasFitnessCenter: false
    }
];

const hasFreeCancellation = document.getElementsByClassName("hasFreeCancellation");
const includesBreakfast = document.getElementsByClassName("includesBreakfast");
const hasParking = document.getElementsByClassName("hasParking");
const allowsPets = document.getElementsByClassName("allowsPets");
const hasFitnessCenter = document.getElementsByClassName("hasFitnessCenter");
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
        <div class="row g-0">
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

function viewAllRooms() {
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