// åpner navbaren
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("div").style.display = "block";
}

// lukker navbaren
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("div").style.display = "none";
}

var rest;
var map2;
// automatisk slideshow
const images = ["pizzakompaniet.jpg", "smak-sans.jpg", "jonasb.jpg", "newagra.jpg"];

var img = "";
for (let i = 0; i < images.length; i++) {
    img +=
        /*html*/
        `
        <a href="#restauranter">
            <div class="slides">
                <img onclick="subside(${i})" class="imgSlides" src="img/food/restaurants/restaurants/${images[i]}" alt="${images[i]}" height="422.6">
            </div>
        </a>`;
}

document.getElementById("carousel").innerHTML = img;


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < images.length; i++) {
        images[i] = images[i].replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    images[slideIndex - 1] += "active";
    setTimeout(showSlides, 3000);
}

// Når brukeren scroller på nettsiden skal stickSearch starte.
window.onscroll = function () {
    stickSearch();
};

// henter searchbaren
var searchphone = document.getElementById("searchPhone");
// Henter ofset posisjonen til searchbaren
var sticky = searchphone.offsetTop;
// Legger til sticky klassen til searchbaren når brukeren når 'scroll posisjonen'.
//Fjerner "sticky" når brukeren forlater 'scroll posisjonen'.
function stickSearch() {
    if (window.pageYOffset >= sticky) {
        searchphone.style.position = "fixed";
        searchphone.style.zIndex = "3";
        searchphone.classList.add("sticky");

    } else {
        searchphone.style.position = "absolute";
        searchphone.classList.remove("sticky");
    }
}

/* Search */

const restrant = ["Pizzakompaniet", "Smak Og Sans Sushi"];
const liste = [];

// k = restrant.indexOf("#");
//
// liste[] = {
//     navn: "",
//     pris: ,
//     restaurant: restrant[k],
//     beskrivelse: "",
//     allergener: "",
// };

var k = restrant.indexOf("Pizzakompaniet"); // Pizzakompaniet sin index

liste[0] = {
    navn: "Sesjon",
    pris: 184,
    restaurant: restrant[k],
    beskrivelse: "Med ost, skinke og champignon",
    allergener: "Melk, hvete, sennep, selleri",
};
liste[1] = {
    navn: "Gangstjenesten",
    pris: 194,
    restaurant: restrant[k],
    beskrivelse: "Med ost, skinke, løk, paprika og champignon",
    allergener: "Melk, hvete, sennep, selleri",
};
liste[2] = {
    navn: "Heimvernet",
    pris: 204,
    restaurant: restrant[k],
    beskrivelse: "Med ost, bacon, løk og purre",
    allergener: "Melk, hvete, sennep, selleri",
};
liste[3] = {
    navn: "På stedet hvil!",
    pris: 204,
    restaurant: restrant[k],
    beskrivelse: "Med ost, kjøttdeig, løk og champignon",
    allergener: "Melk, hvete, sennep, selleri",
};
liste[4] = {
    navn: "Coca Cola - 1,5 L",
    pris: 45,
    restaurant: restrant[k],
};
liste[5] = {
    navn: "Coca-Cola Zero - 1,5 L",
    pris: 45,
    restaurant: restrant[k],
};
liste[6] = {
    navn: "Pepsi Max - 0,5L",
    pris: 35,
    restaurant: restrant[k],
};
liste[7] = {
    navn: "Pepsi Max - 1,5 L",
    pris: 45,
    restaurant: restrant[k],
};

k = restrant.indexOf("Smak Og Sans Sushi"); // Smak og Sans Sushi sin index

liste[8] = {
    navn: "Smak & Sant salat",
    pris: 89,
    restaurant: restrant[k],
    beskrivelse: "Sjøtang salat og scampi",
    allergener: "SK, SE",
};
liste[9] = {
    navn: "Hjemmelaget vårruller",
    pris: 45,
    restaurant: restrant[k],
    beskrivelse: "Med scampi og grønnsaker. 2 stk.",
    allergener: "G",
};
liste[10] = {
    navn: "Hjemmelaget vegetar vårruller",
    pris: 45,
    restaurant: restrant[k],
    beskrivelse: "Med grønnsaker og tofu",
    allergener: "G",
};
liste[11] = {
    navn: "Misosuppe",
    pris: 49,
    restaurant: restrant[k],
    beskrivelse: "Vegetar & tofu",
    allergener: "SE",
};
liste[12] = {
    navn: "Coca-Cola",
    pris: 33,
    restaurant: restrant[k],
};
liste[13] = {
    navn: "Coca-Cola Zero",
    pris: 33,
    restaurant: restrant[k],
};
liste[14] = {
    navn: "Sprite",
    pris: 33,
    restaurant: restrant[k],
};
liste[15] = {
    navn: "Fanta",
    pris: 33,
    restaurant: restrant[k],
};

var searchResult = document.getElementById("searchResults");
var product = "";
for (let i = 0; i < liste.length; i++) {
    product +=
        /*html*/
        `
        <a class="searchLink" href="#restauranter" onclick="closeTab()">
            <div class="produkt" onclick="subside(${restrant.indexOf(liste[i].restaurant)})">
                <p class="heading">
                    ${liste[i].navn}
                    <p class="place">
                        Gå til ${liste[i].restaurant}
                    </p>
                </p>
                <p class="price">
                    ${liste[i].pris} kr
                </p>
            </div>
        </a>`;
}
searchResult.innerHTML = product;

function visSok() {
    searchResult.style.display = "block";
}

$(document).ready(function () {
    $(".searchbar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#searchResults .produkt").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

var container = $("#searchResults");
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        container.hide();
    }
});
$(document).mouseup(function (e) {
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

function closeTab() {
    container.hide();
}

function subside(restaurant) {
  tall = 0;
  document.getElementById("results").innerHTML ='<div id="btnDiv">' +
                                              '<input type="button" class="restCategoryButtons" id="menu" value="Meny">' +
                                              '<input type="button" class="restCategoryButtons" id="info" value="Informasjon">' +
                                              '</div>' +
                                              '<div id="menyInfoUtskrift"></div>' +
                                              '<div id="addresse">' +
                                                '<div id="logoAddresse"></div>' +
                                                '<input type="button" value="Vis på kart" id="openMap">' +
                                                '<a href="#kart"><div id="map"></div></a>' +
                                              '</div>';
    rest = restaurant;
    document.getElementById("openMap").onclick = getMap;
    document.getElementById("menu").onclick = skrivUtMeny;
    document.getElementById("info").onclick = skrivUtInfo;
    initMap();
    skrivUt();
    skrivUtMeny();
}



function skrivUtMeny() {
    document.getElementById("menu").style.backgroundColor = "rgb(245, 243, 243)";
    document.getElementById("menu").style.color = "black";

    document.getElementById("info").style.backgroundColor = "#f7951d80";
    document.getElementById("info").style.color = "white";

    document.getElementById("menyInfoUtskrift").innerHTML = /*html*/ `<div id="accordion-options"></div>`;

    var categories = ["Drikker", "Forrett", "Hovedrett", "Dessert"];

    var option = "";

    for (let i = 0; i < categories.length; i++) {
        option +=
            /*html*/
            `
        <button class="accordion">${categories[i]}</button>
        <div class="panel">
            <p>Lorem ipsum dolor sit amet</p>
        </div>`;
    }
    document.getElementById("accordion-options").innerHTML = option;
    /* Accordion dropdown*/
    var acc = document.getElementsByClassName("accordion");
    var nr;

    for (nr = 0; nr < acc.length; nr++) {
        acc[nr].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

}


const despriction = [
    /*Pizzakompaniet*/
    `
'Flott service, rask levering og nydelig pizza :-)' - Gunnar fra Porsgrunn. 
Lovordene er mange og det ser ut som om folk i Porsgrunn ikke kan få nok av denne pizzeriaen.
Ønsker du fersk pizza eller andre smakfulle retter levert på døren?
Bestill online fra Pizzakompaniet og få din favorittmat levert i løpet av kort tid!
Pizzakompaniet leverer til store deler av Porsgrunns området.
Her bestiller du pizzafristelser som f.eks Kruttønna med ost, marinert biff, paprika, mais, løk, jalapenos og hot chili.
Liker du pizzaen din noe mildere, så kan du evt bestille den mer tradisjonelle Sesjon med skinke, ost og champignon.
Uansett hvordan du liker pizzaen din, så vil du nok kunne finne en favoritt i Pizzakompaniet sin velfylte og varierte pizzameny.
Bestill online nå og få maten levert på døren innen kort tid!


Storgata 125, Porsgrunn, 3915`,

    /*Smak & Sans Sushi */
    `
Med hovedsaklig Norske råvarer og Japanske mattradisjoner tilbyr vi sanserike matopplevelser.
Smak & Sans Sushi har holdt på siden 2009 og leter stadig etter nye internasjonale sushi varianter.
Vi skal alltid fornye oss ved å gi deg en NY Smak og Sans opplevelse!
    
Storgata 145, Porsgrunn, 3915`,
    `Vi har ikke noe info om denne restauranten
    `,
    `Vi har ikke noe info om denne restauranten for øyeblikket`,
];


function skrivUtInfo() {
    document.getElementById("info").style.backgroundColor = "rgb(245, 243, 243)";
    document.getElementById("info").style.color = "black";

    document.getElementById("menu").style.backgroundColor = "#f7951d80";
    document.getElementById("menu").style.color = "white";

    document.getElementById("menyInfoUtskrift").innerText = despriction[rest];
}

const restaurant = [];

restaurant[0] = {
    navn: "Pizzakompaniet",
    logo: "logo_PizzaKompaniet.jpg",
    addresse: "<br>Storgata 125<br> 3915 Porsgrunn<br> Norge",
};
restaurant[2] = {
    navn: "Jonas B",
    logo: "logo_JonasB.jpg",
    addresse: "<br>Friisebrygga 2 <br>3921 Porsgrunn <br>Norge",
};
restaurant[3] = {
    navn: "New Agra",
    logo: "logo_NewAgra.jpg",
    addresse: "<br>Kverndalsgata 3A<br>3717 Skien<br>Norge",
};
restaurant[1] = {
    navn: "Sans og Smak Sushi",
    logo: "logo_SansOgSmak.jpg",
    addresse: "<br>Storgata 146<br>3915 Porsgrunn<br>Norge",
};

function skrivUt() {
    document.getElementById("logoAddresse").innerHTML =
        /*html*/
        `<h1>${restaurant[rest].navn}</h1>
        <img id='logo' src='img/logo_restaurant/${restaurant[rest].logo}'>
        <div id='addresseDiv>'>${restaurant[rest].addresse}</div>`;
}



const coordinates = [];
coordinates[0] = [59.138895, 9.651111]; //Pizzakompaniet
coordinates[2] = [59.139741, 9.646615]; //Jonas B
coordinates[1] = [59.140516, 9.654086]; //Sans og Smak Sushi
coordinates[3] = [59.210440, 9.607431]; //New Agra

var cords;

function getMap() {
    cords = {
        lat: coordinates[rest][0],
        lng: coordinates[rest][1],
    };
    map2.panTo(cords);
    map2.setZoom(16);
    /*
    tall++;
    if(tall % 2 === 0) {
        map.style.visibility = "hidden";
        document.getElementById("openMap").value="Åpne kart";
        document.getElementById("map").style.height = "0px";
    } else{
        map.style.visibility = "visible";
        document.getElementById("openMap").value="Lukk kart";
        document.getElementById("map").style.height = "400px";
    }*/
}



function initMap() {
    // liste som inneholder koordinatene til alle restaurantene oppgitt i bredde- og lengdegrader
    var dominos = {
        lat: coordinates[rest][0],
        lng: coordinates[rest][1],
    }; //Koordinater i breddegrad og lengdegrad
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            center: dominos,
        });
    var marker = new google.maps.Marker({
        position: dominos,
        map: map,
    });
    google.maps.event.addListener(marker, 'click', function () {
        map.panTo(this.getPosition());
        map.setZoom(16);
    });
}



function initMap2() {
    // liste som inneholder koordinatene til alle restaurantene oppgitt i bredde- og lengdegrader


    var pizza = {
        lat: 59.138895,
        lng: 9.651111,
    }; //Koordinater i breddegrad og lengdegrad
    // The map, centered at Uluru
    map2 = new google.maps.Map(
        document.getElementById('mapBig'), {
            zoom: 10,
            center: pizza,
        });

    // The marker, positioned at Uluru
    for (let i = 0; i < coordinates.length; i++) {
        var uluru = {
            lat: coordinates[i][0],
            lng: coordinates[i][1],
        };
        var marker2 = new google.maps.Marker({
            position: uluru,
            map: map2,
        });
        google.maps.event.addListener(marker2, 'click', function () {
            map2.panTo(this.getPosition()); //map2
            map2.setZoom(16);
        });
    }
    //var marker = new google.maps.Marker({position: uluru, map: map});
    //var marker = new google.maps.Marker({position: dominos, map: map});

    var infoWindow;
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Du er her.');
            infoWindow.open(map2);
            map2.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map2.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map2.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map2);
    }
}