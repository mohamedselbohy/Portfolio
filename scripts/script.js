
let header = document.querySelector(".nav");
let topSection = document.querySelector(".bg");
const navObserver = new IntersectionObserver((entries,obsverver)=>{
    const entry = entries[0];
    if(!entry.isIntersecting)
    {
        header.classList.add("scrolled-nav");
        header.classList.remove("back-nav");
    }
    else
    {
        
        header.classList.remove("scrolled-nav");
        header.classList.add("back-nav");
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
let selector=0
let projects =[
    [
        {
            img:"imgs/encryption.png",
            header:"Aes Encryption",
            link:"https://github.com/mohamedselbohy/AES_encryption-decryption"
        },
        {
            img:"imgs/tic-tac-toe.png",
            header:"tic-tac-toe",
            link:"https://github.com/mohamedselbohy/tic-tac-toe"
        },
        {
            img:"imgs/paint-palette.png",
            header:"Paint for kids",
            link:"https://github.com/mohamedselbohy/project-paint-for-kids-finale"
        },
        {
            img:"imgs/gear.png",
            header:"Process Scheduler",
            link:"https://github.com/mohamedselbohy/Process_Scheduler"
        }

    ],
    
    [
        {
            img:"imgs/encryption.png",
            header:"Aes Encryption",
            link:"https://github.com/mohamedselbohy/AES_encryption-decryption"
        }
],
[
        {
            img:"imgs/tic-tac-toe.png",
            header:"tic-tac-toe",
            link:"https://github.com/mohamedselbohy/tic-tac-toe"
        },
    {
        img:"imgs/gear.png",
        header:"BlogPosts",
        link:"https://github.com/mohamedselbohy/blogposts"
    }
        
    ],
    [
        {
            img:"imgs/paint-palette.png",
            header:"Paint for kids",
            link:"https://github.com/mohamedselbohy/project-paint-for-kids-finale"
        },
        {
            img:"imgs/gear.png",
            header:"Process Scheduler",
            link:"https://github.com/mohamedselbohy/Process_Scheduler"
        }
        
    ]
]
function loadprojects(ind){
    let container = document.querySelector('.projects');
    container.innerHTML='';
    projects[ind].map(proj=>{
        let projectelement = document.createElement('a');
        projectelement.setAttribute('href',proj.link);
        projectelement.setAttribute('target',"_blank");
        projectelement.classList.add('projlink')
        container.appendChild(projectelement);
        let projicon = document.createElement('img');
        projicon.setAttribute('src',proj.img);
        projicon.classList.add('skill-icon');
        projectelement.appendChild(projicon);
        let projhead = document.createElement('h3');
        projhead.innerHTML=proj.header;
        projhead.classList.add('projtitle');
        projectelement.appendChild(projhead);
    })
}

loadprojects(0);
let opts = document.getElementsByClassName('option');
for(let i=0;i<opts.length;i++)
{
    opts[i].addEventListener('click',()=>{
            let selecte=document.querySelector('.selected');
            selecte.classList.remove('selected');
            opts[i].classList.add('selected');
            selector=i;
            loadprojects(i);
    })
}
