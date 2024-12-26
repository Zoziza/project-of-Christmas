
let searchIcon = document.getElementById("searchIcon");
let  searchInput = document.getElementById("searchInput");


searchIcon.addEventListener("click", function() {

    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block"; 
    } else {
        searchInput.style.display = "none"; 
    }
});


const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';

const snowflakes = [];const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};


const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
};



const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

animate();


const cardsContainer = document.getElementById('cardsContainer');

const data = [
    {
        image:'https://media.istockphoto.com/id/180703969/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=170667a&w=0&k=20&c=UVP8ir-3wipkh7rnRN6gD4AHFp3gxG7dwrpZHmAdSPE=',
        name: 'Christmas gift',
        price: 120, 
    },
    {
        image: 'https://img.freepik.com/free-psd/close-up-red-santa-hat-isolated_23-2151849368.jpg',
        name: 'hat',
        price: 120, 
    },
    {
        image: 'https://image.made-in-china.com/202f0j00NUVckznylFgH/LED-Family-Xmas-Party-Holiday-Caps-Elastic-Knitted-Beanie-Hat-with-Snowman.webp',
        name: 'cap',
        price: 120, 
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSB_BCHOMsCPHCzDNTpS84EsibrWS7VhQ_g&s',
        name: 'Tree',
        price: 120, 
    },
    {
        image: "https://st2.depositphotos.com/16122460/42308/i/450/depositphotos_423082054-stock-illustration-gingerbread-man-isolated-white-delicious.jpg",
        name: 'cooks',
        price: 120, 
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBLijC0zHBjxOCr9ESD29eiCCX0MLW4Rpkw&s',
        name: 'Gloves',
        price: 120, 
    },
    {
        image: 'https://p.turbosquid.com/ts-thumb/zH/s53Fno/Bi/screenshot036/jpg/1638276108/600x600/fit_q87/285845be653ecd8fb58107f12ab53b9a0f3d0e6c/screenshot036.jpg',
        name: 'toy red',
        price: 120, 
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmREW6ozJHS6WA07gqGf5Ux-DjVkQ5FzmnRw&s',
        name: 'toy',
        price: 120, 
    },
];


data.forEach((item) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('p');
    const cardPrice = document.createElement('span');
    

    cardName.textContent = item.name;
    cardImage.src = item.image;
    cardPrice.textContent = item.price + ' $';

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardPrice);

    card.classList.add('card');

    cardsContainer.appendChild(card);
    
    
});



   
const button =  document.querySelectorAll("#btn")
  button.forEach((button) => {
button.style.backgroundColor = 'red'
button.style.borderLeft = '4px yellow solid'
button.style.borderRight = '4px yellow solid'
button.style.borderBottom = '4px yellow solid'
button.style.padding = '9px'
button.style.borderRadius = '50px'


button.addEventListener('click', function() {
    button.style.backgroundColor = 'black'
button.style.borderLeft = '4px yellow solid'
button.style.borderRight = '4px yellow solid'
button.style.borderBottom = '4px yellow solid'
button.style.padding = '9px'
button.style.borderRadius = '50px'

  })

  });

  const items = [
    {
        imgSrc: 'https://img.freepik.com/premium-photo/winter-warm-jacket-isolated-white-background_564276-3777.jpg',
        title: 'Winter Jacket',
        price: '$99.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM62IXR11AuscDx9oXg_k7fbgum_krfTyoBg&s',
        title: 'Snowman 1',
        price: '$19.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV9OfqHY-X9nVQnZp_TpkQvWS4I1pF4zFYf9wvIl25ilP4usVIB6XFOtD1NcLHoSfhAI&usqp=CAU',
        title: 'Tree and Cat ',
        price: '$24.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7oJSbMo6EUFddgqAQ11kIp58737aVlGa8A&s',
        title: 'Snow Boots',
        price: '$49.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpj3PhSgysxtc_dUWtvrYaaJVDBR-9O1KExhT3LXjj3CCE22KzB80uGssWOcQTmilKj1U&usqp=CAU',
        title: 'Christmas Tree and snowman',
        price: '$149.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-l5748Fi5KAdq9bLBU7u3s2ylkQ3R-DQgaA&s',
        title: 'Winter Sweater',
        price: '$99.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KhEGf4-hJNEhMQr1NIyOzFitrLE5SLqaxg&s',
        title: 'Decorate',
        price: '$99.99'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21MFcabmtcHXwYSfvy132PDacNSbCpUIqyaycUUYMWYcoF270BKekm7r3Y_YWkkTfW1Q&usqp=CAU',
        title: 'Christmas Ball',
        price: '$99.99'
    },
    {
        imgSrc: 'https://kupigobelen.ru/catalogImages/thumbnail/0000014718N_3.jpg',
        title: 'Pillow',
        price: '$99.99'
    },
 
];


const container = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');

    
items.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('carousel-card'); 

   
    const image = document.createElement('img');
    image.src = item.imgSrc;
    image.alt = item.title;
    

    const info = document.createElement('div');
    info.classList.add('card-info');
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    const price = document.createElement('p');
    price.textContent = item.price;


    info.appendChild(title);
    info.appendChild(price);
    card.appendChild(image);
    card.appendChild(info);

    
    carousel.appendChild(card);
});


let index = 0;
const itemsToShow = 1;
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-card');
    const totalSlides = slides.length;

    index += step;
    if (index < 0) {
        index = totalSlides - itemsToShow;
    } else if (index >= totalSlides - itemsToShow + 1) {
        index = 0; 
    }

    
    carousel.style.transform = `translateX(${-index * (100 / itemsToShow)}%)`;
}



document.querySelector('.prev').onclick = function() { moveSlide(-1); };
document.querySelector('.next').onclick = function() { moveSlide(1); };


    window.addEventListener('scroll', function () {
        const header = document.querySelector(".header");
       const logo = document.querySelector(".logo");
       
      if (window.scrollY > 400) {
       header.classList.add('scrolled');
       logo.style.display = 'none';
      }else {
        header.classList.remove('scrolled');
        logo.style.display = 'block'; 
      }
    });

    const arrow = document.querySelector('.arrow');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
            arrow.style.display = 'block'; 
        } else {
            arrow.style.display = 'none'; 
        }
    });



 document.getElementById('subscribe-text').addEventListener('submit', function(event) {
 event.preventDefault();

 const emailInput = document.querySelector("#subscribe-form input").value;

 if(!emailInput.includes('@')) {
     alert('Please enter a valid email address');
     return;
 }
 alert('Thank you!');
 })
   
 