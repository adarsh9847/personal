const navtoggle = document.querySelector(".nav-toggle")
const primarynav = document.querySelector(".primary-nav")
const navabout = document.getElementById('nav-about')
const navservice = document.getElementById('nav-service')
const navskill = document.getElementById("nav-skill")
const navproject = document.getElementById("nav-project")
const navcontact = document.getElementById("nav-contact")

navtoggle.addEventListener('click', () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "false"){
        primarynav.setAttribute("data-visible" , true);
        navtoggle.setAttribute("aria-expanded" , true);

    }else if(visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }
    
})

navabout.addEventListener('click' , () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }

})

navservice.addEventListener('click' , () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }

})

navskill.addEventListener('click' , () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }

})

navproject.addEventListener('click' , () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }

})

navcontact.addEventListener('click' , () =>{
    const visibility = primarynav.getAttribute("data-visible");

    if (visibility === "true"){
        primarynav.setAttribute("data-visible" , false);
        navtoggle.setAttribute("aria-expanded" , false);
    }

})

