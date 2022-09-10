// eslint-disable-next-line no-unused-vars
function clickToSwitch() {
  const switchD = document.getElementById('switch-display');
  if (switchD.style.display === 'block') {
    switchD.style.display = 'none';
  } else {
    switchD.style.display = 'block';
  }
}
const body = document.querySelector('.head-part');
function disableScroll() {
  const xPos = window.scrollX;
  const yPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(xPos, yPos);
  };
}

function enableScroll() {
  window.onscroll = '';
}

const cards = [
  {
    id: 1,
    title: 'Tonic',
    imageM: 'images/tonic-desktop-img.png',
    imageD: 'images/tonic-desktop-img.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  // Work Section 2
  {
    id: 2,
    title: 'Multi-Post Stories',
    imageM: 'images/multi-post-desktop-img.png',
    imageD: 'images/multi-post-desktop-img.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  // Work Section 3
  {
    id: 3,
    title: 'Facebook 360',
    imageM: 'images/facebook-360-desk-img.png',
    imageD: 'images/facebook-360-desk-img.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  // Work Section 4
  {
    id: 4,
    title: 'Uber Navigation',
    imageM: 'images/uber-navigation-desk-img.png',
    imageD: 'images/uber-navigation-desk-img.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
];

const worksCard = cards
  .map((card, index) => `
<section class="grid-container ${index}" id="portfolio">
        <article class="work-sec-card">
            <img
              class="container-image anime go"
              alt="tonic"
              src="${card.imageM}"/>
          <div class="card-details">
            <div class="card-title">
              <h3 class="title ${index}">${card.title}</h3>
              <ul class="flex-items">
                <li class="canopy">CANOPY</li>
                <li>
                  <img src="images/Counter.png" alt="counter" />
                </li>
                <li class="backend">Back End Dev</li>
                <li>
                  <img src="images/Counter.png" alt="counter" />
                </li>
                <li class="year">2015</li>
              </ul>
            </div>
            <p class="card-text">
            ${card.cardDescription}
            </p>
            <div>
              <ul class="btn-container-flex">
              ${card.languages
    .map((lang) => `            
                <li class="btn">
                  <div class="btn-lang">
                    <span>${lang}</span>
                  </div>
                </li>
                `).join('')}
              </ul>
            </div>
            <div class="see-project">
              <button onclick="showPop(${card.id})" type="button" class="p-text btn-onclick" id="see-project-id">See Project</button>
            </div>
          </div>
        </article>
        </section>
        `);

const worksCardHtml = document.querySelector('.grid-container');
worksCardHtml.innerHTML += worksCard;
const modalCard = [
  {
    id: 1,
    title: 'Tonic',
    imageM: 'images/facebook-360-desk-img.png',
    imageD: 'images/tonic-desktop-img.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescriptionD: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    cardDescriptionM: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languagesD: ['github', 'ruby', 'Bootstrap'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://github.com/Joel-100/my-portfolio/tree/deploy-web',
    linkSource: 'https://github.com/Joel-100',
  },
];
const modalCardDisplay = modalCard
  .map(
    (modeCard) => `
<div class="card-portfolio-1">
            <li class="pop-close"><i class="fa fa-times"></i></li>
                <h2 class="title">${modeCard.title}</h2>
                <ul class="flex-items">
                <li class="canopy">CANOPY</li>
                <li>
                  <img src="images/Counter.png" alt="counter" />
                </li>
                <li class="backend">Back End Dev</li>
                <li>
                  <img src="images/Counter.png" alt="counter" />
                </li>
                <li class="year">2015</li>
              </ul>
              <div class="images">
         <img class="forD-1" src="${modeCard.imageD}" alt="Pop Up Desktop" >
      <img class="forM-1" src="${modeCard.imageM}" alt="Pop Up Mobile" >

         </div>    
      
<div>    
  <div class="row">
      <div class="column-left-1">
          <p class="forD-1">
              ${modeCard.cardDescriptionM}
          </p>
          <p class="forM-1">
              ${modeCard.cardDescriptionM}
          </p>

      </div>
      <div class="column-right-1">
          <ul class="modal-1">
              ${modeCard.languagesM
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
          </ul>
          <ul id="miss" class="miss modal-1">
          ${modeCard.languagesD
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
          </ul>
          <hr>
          <ul class="modal-1">
              <li class="modal-3" href="${modeCard.linkLive}">See live <img class="btnimag" src="./images/icon.jpeg"></li>
              <li class="modal-3" href="${modeCard.linkSource}">See Source <i class="fa fa-github"></i></li>
          </ul>
      </div>
  </div>
      </div>
  </div>
`,
  ).join('');

const modalCards = document.getElementById('modal-cards');
modalCards.innerHTML += modalCardDisplay;
const boxModal = document.querySelector('.card-portfolio-1');
const openModal = document.querySelectorAll('.btn-onclick');

openModal.forEach((open) => {
  open.addEventListener('click', () => {
    boxModal.style.display = 'block';
    disableScroll();
  });
});

const popClose = document.querySelector('.pop-close');
popClose.addEventListener('click', () => {
  boxModal.style.display = 'none';
  body.style.filter = 'none';
  enableScroll();
});


const email = document.querySelector('.email');
const submit = document.querySelector('.about-get');
const error = document.querySelector('.errorMSG');



