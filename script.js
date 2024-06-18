const navOpt = document.querySelector(".nav-opt");
const navOpt2 = document.querySelector(".nav-opt2");
const navOpt3 = document.querySelector(".nav-opt3");
const navOpt4 = document.querySelector(".nav-opt4");
const navOpt5 = document.querySelector(".nav-opt5");
const energy = document.querySelector(".energy");
const vehicles = document.querySelector(".vehicles");
const charger = document.querySelector(".charger");
const dicover = document.querySelector(".discover");
const shop = document.querySelector(".shop");
const header = document.querySelector("header");

const navbar = document.querySelector(".navbar2");
const bar = document.getElementById("bar");
const close = document.getElementById("close")
const body = document.querySelector("body")
const collapOpt = document.querySelector(".collap-opt");
const allContent = document.querySelector(".content");
const collapOpt2 = document.querySelector(".collap-opt2");
const collapOpt3 = document.querySelector(".collap-opt3");
const collapOpt4 = document.querySelector(".collap-opt4");
const vehicleCollap = document.querySelector(".vehicles-collap.content");
const energyCollap = document.querySelector(".energy-collap.content");
const chargingCollap = document.querySelector(".charger-collap.content");
const discoverCollap = document.querySelector(".discover-collap.content");


function backArrow(divId) {
    var div = document.getElementById(divId);
    div.classList.remove("active")
    body.classList.remove("active");
}
function closeArrow(divId) {
    var div = document.getElementById(divId);
    div.classList.remove("active")
    navbar.classList.remove("active");
    body.classList.remove("active");
}

function addClass(divId, className) {
    var div = document.getElementById(divId);
    div.classList.add(className);

    if (window.getComputedStyle(vehicleCollap).display === 'flex') {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }
}

   navOpt.addEventListener("mouseover", () => {
        energy.style.top = "-100%";
        vehicles.style.top = "0";
        charger.style.top = "-100%";
        dicover.style.top = "-100%";
        shop.style.top = "-100%";
        header.style.background = "#fff";
        navOpt.classList.add("active")
        navOpt2.classList.remove("active");
        navOpt3.classList.remove("active");
        navOpt4.classList.remove("active");
        navOpt5.classList.remove("active");
    })

    navOpt2.addEventListener("mouseover", () => {
        vehicles.style.top = "-100%";
        energy.style.top = "0";
        dicover.style.top = "-100%";
        charger.style.top = "-100%"
        shop.style.top = "-100%";
        header.style.background = "#fff";
        navOpt2.classList.add("active")
        navOpt.classList.remove("active");
        navOpt3.classList.remove("active");
        navOpt4.classList.remove("active");
        navOpt5.classList.remove("active");
    })
    navOpt3.addEventListener("mouseover", () => {
        vehicles.style.top = "-100%";
        energy.style.top = "-100%";
        charger.style.top = "0";
        dicover.style.top = "-100%";
        shop.style.top = "-100%";
        header.style.background = "#fff";
        navOpt3.classList.add("active")
        navOpt.classList.remove("active");
        navOpt2.classList.remove("active");
        navOpt4.classList.remove("active");
        navOpt5.classList.remove("active");
    });

    navOpt4.addEventListener("mouseover", () => {
        vehicles.style.top = "-100%";
        energy.style.top = "-100%";
        charger.style.top = "-100%";
        dicover.style.top = "0";
        shop.style.top = "-100%";
        header.style.background = "#fff";
        navOpt4.classList.add("active")
        navOpt.classList.remove("active");
        navOpt2.classList.remove("active");
        navOpt3.classList.remove("active");
        navOpt5.classList.remove("active");
    });

    navOpt5.addEventListener("mouseover", () => {
        vehicles.style.top = "-100%";
        energy.style.top = "-100%";
        charger.style.top = "-100%";
        dicover.style.top = "-100%";
        shop.style.top = "0"
        header.style.background = "#fff";
        navOpt5.classList.add("active")
        navOpt.classList.remove("active");
        navOpt2.classList.remove("active");
        navOpt3.classList.remove("active");
        navOpt4.classList.remove("active");
    });


    
    
vehicles.addEventListener("mouseover", () => {
        navOpt.classList.add("active")
        vehicles.style.top = "0";
})
vehicles.addEventListener("mouseout", () => {
    vehicles.style.top = "-100%"
    navOpt.classList.remove("active")
    header.style.background = "transparent";
})


energy.addEventListener("mouseover", () => {
        navOpt2.classList.add("active")
        energy.style.top = "0";
})
energy.addEventListener("mouseout", () => {
    energy.style.top = "-100%"
    navOpt2.classList.remove("active")
    header.style.background = "transparent";
})


charger.addEventListener("mouseover", () => {
        navOpt3.classList.add("active")
        charger.style.top = "0";
});
charger.addEventListener("mouseout", () => {
    charger.style.top = "-100%"
    navOpt3.classList.remove("active")
    header.style.background = "transparent";
});

dicover.addEventListener("mouseover", () => {
        navOpt4.classList.add("active")
        dicover.style.top = "0";
});
dicover.addEventListener("mouseout", () => {
    dicover.style.top = "-100%"
    navOpt4.classList.remove("active")
    header.style.background = "transparent";
});


shop.addEventListener("mouseover", () => {
        navOpt5.classList.add("active")
        shop.style.top = "0";
});
shop.addEventListener("mouseout", () => {
    shop.style.top = "-100%"
    navOpt5.classList.remove("active")
    header.style.background = "transparent";
});


if(bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active")
    })
}
if(close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active")
    })
}
