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
let skills = document.getElementsByClassName('skill-box');
selected=[0,0,0];
for(let i=0;i<skills.length;i++)
{
    skills[i].addEventListener('click',()=>{
            for(let j=0;j<skills.length;j++)
            {
                skills[j].classList.remove('clicked-skill-box');
                skills[j].classList.add('unskill-box');
            }
            if(!selected[i]){
            skills[i].classList.add('clicked-skill-box');
            skills[i].classList.remove('unskill-box');
            selected[i]=1;
            selected[i+1]=0;
            selected[i+2]=0;
            selected[i-1]=0;
            selected[i-2]=0;
            }
            else{
                selected[i]=0;
            }
    })
}