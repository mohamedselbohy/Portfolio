let header = document.querySelector(".nav");
let topSection = document.querySelector(".bg");
const navObserver = new IntersectionObserver((entries,obsverver)=>{
    const entry = entries[0];
    if(!entry.isIntersecting)
    {
        header.classList.add("scrolled-nav");
    }
    else
    {
        
        header.classList.remove("scrolled-nav");
    }
},{});
navObserver.observe(topSection);