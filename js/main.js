const arrProject = {
    site: [
        [
            '1',
            '2',
            '3'
        ],
        [
            '../assets/image 3.png',
            'Project1',
            'type1',
            'Funny App'
        ],
        [
            '../assets/image 3.png',
            'Project2',
            'type2',
            'Fintech'
        ],
        [
            '../assets/image 4.png',
            'Project3',
            'type3',
            'Music App'
        ]
    ],
    web:[
        [
            '1',
            '2',
            '3'
        ],
        [
            '../assets/image 4.png',
            'WebProject1',
            'Apptype1',
            'Funny App Web'
        ],
        [
            '../assets/image 4.png',
            'WebProject2',
            'Apptype2',
            'Fintech Web'
        ],
        [
            '../assets/image 3.png',
            'WebProject3',
            'Apptype3',
            'Music App Web'
        ]
    ]
}
let divMain = document.querySelector('.main-project');
let tabMenu = document.querySelectorAll('#select-menu_tab');


window.onload = () =>{
    renderProject(arrProject.site)
}
function renderProject(arrT) {
    divMain.innerHTML = ``
    const siteArray = arrT;
    for (let i = 1; i < siteArray.length; i++) {
        const projectInfo = siteArray[i];
        const image = projectInfo[0];
        const projectName = projectInfo[1];
        const projectType = projectInfo[2];
        const description = projectInfo[3];

        
        let mainPage = document.createElement('div');
        mainPage.className = 'main-project_page';
        divMain.appendChild(mainPage)
        mainPage.innerHTML = `
        <img src="${image}" alt="#">
        <div class="main-project_page-text">
            <div class="main-project_page-textarea">
                <h1>${projectName}</h1>
                <p>${projectType}</p>
            </div>
            <div class="main-project_page-text-btn">
                <h1>${description}</h1>
            </div>
        </div>`
    }
}
for (let item of tabMenu) {
    item.addEventListener('click',(e)=>{
        if(e.target.innerText == 'Site') {
            renderProject(arrProject.site);
            tabMenu[0].className = ``
            tabMenu[0].className = 'select-menu_tab_actived'
            tabMenu[1].className = ``
            tabMenu[1].className = 'select-menu_tab'
        }


        if(e.target.innerText == 'Web Application') {
            renderProject(arrProject.web)
            
            tabMenu[0].className = ``
            tabMenu[0].className = 'select-menu_tab'
            tabMenu[1].className = ``
            tabMenu[1].className = 'select-menu_tab_actived'
        }
    })
}