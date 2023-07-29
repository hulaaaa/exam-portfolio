const arrProject = {
    site: [
        [
            '1',
            '2',
            '3'
        ],
        [
            '../assets/6.jpg',
            'Nike Clone Website',
            'lorem',
            'Develop Web'
        ],
        [
            '../assets/7.jpg',
            'Paris Website',
            'lorem',
            'Develop Web'
        ],
        [
            '../assets/5.jpg',
            'Travel Website',
            'lorem',
            'Develop Web'
        ]
    ],
    web:[
        [
            '1',
            '2',
            '3'
        ],
        [
            '../assets/1.jpg',
            'Weather App',
            'Search weather in your city',
            'Web Application'
        ],
        [
            '../assets/2.jpg',
            'Music App',
            'Listen your favorite music',
            'Web Application'
        ],
        [
            '../assets/3.jpg',
            'Todo List App',
            'Just notation your plan',
            'Web Application'
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


document.querySelector('.nav-block_cv-text').addEventListener('click',()=>{
    alertify.set('notifier','delay', 2);

    alertify.notify('Loading file', 'success');
    fetchFile('../assets/1.jpg')
})
function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    })
}