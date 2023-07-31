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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
        ],
        [
            '../assets/7.jpg',
            'Paris Website',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
        ],
        [
            '../assets/5.jpg',
            'Travel Website',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
        ],
        [
            '../assets/2.jpg',
            'Music App',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
        ],
        [
            '../assets/3.jpg',
            'Todo List App',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad assumenda, consequatur ab quam, maiores ipsum quod modi corporis consectetur animi, doloremque sint facere fugiat sunt saepe est rerum id!',
            'Live View'
        ]
    ]
}
let divMain = document.querySelector('.main-project');

let loadingText = document.querySelector('.loading-text')
function fadeOut(element, opacity) {
    if (opacity <= 0) {
        document.querySelector('.bio').style.display = 'flex'
        element.style.display = 'none';
    } 
    else {
        element.style.opacity = opacity;
        setTimeout(() => {
            fadeOut(element, opacity - 0.01);
        }, 3);
    }
}
function fadeIn(element, opacity) {
    if (opacity >= 1) {
        element.style.opacity = 1;
        document.querySelector('.bio').style.display = 'none'

        element.style.display = 'flex';
    } else {
        element.style.display = 'flex';
        element.style.opacity = opacity;
        setTimeout(() => {
            fadeIn(element, opacity + 0.01);
        }, 3);
    }
}

window.onload = () =>{
    // loadingPage();
    // setTimeout(() => {
    //     const loadingDiv = document.querySelector('.loading');
    //     fadeOut(loadingDiv, 1);
    // },1500);
    renderProject(arrProject.site)
}
// function loadingPage() {
//     document.querySelector('.bio').style.display = 'none'
//     gsap.to(loadingText , { 
//         duration: 2, 
//         text: "Hi, I'm Hula",
//         ease: 'none'
//     });
// }
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
// Отримуємо усі вкладки та їх дочірні елементи
const tabs = document.querySelectorAll('.main-nav_tab');
const tabTexts = document.querySelectorAll('.main-nav_tab_text');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
        // Видаляємо клас активності з усіх вкладок перед зміною активної вкладки
        for (const tab of tabs) {
            tab.classList.remove('main-nav_tab_active');
        }

        // Видаляємо клас активності з усіх дочірніх елементів перед зміною активної вкладки
        for (const text of tabTexts) {
            text.classList.remove('main-nav_tab_text_active');
        }

        // Додаємо клас активності до поточної вкладки та її дочірнього елемента
        tabs[i].classList.add('main-nav_tab_active');
        tabTexts[i].classList.add('main-nav_tab_text_active');

        // Виконуємо потрібні дії, пов'язані зі зміною вкладки (наприклад, рендер контенту)
        if (e.target.innerText === 'Site') {
            renderProject(arrProject.site);
        } else if (e.target.innerText === 'Web App') {
            renderProject(arrProject.web);
        }
    });
}







// let btnCloseMenu = document.querySelector('.menu-close'),
// menuDiv = document.querySelector('.menu');
// btnCloseMenu.addEventListener('click',()=>{
//     let menuDiv = document.querySelector('.menu');
//         fadeOut(menuDiv, 1);
//         document.querySelector('.bio').style.display = 'flex'
    
//     document.querySelector('.kursor').style.border = '2px solid black'
//     document.querySelector('.kursorChild').style.backgroundColor = 'black'

// })
// let openMenu = document.querySelector('.nav-block_menu')
// openMenu.addEventListener('click',()=>{
//     let menuDiv = document.querySelector('.menu');
//         fadeIn(menuDiv, 0);

// })












