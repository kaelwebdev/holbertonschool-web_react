import $ from 'jquery';
import _ from 'lodash';

import '../css/main.css';
import mainImage from '../assets/holberton-logo.jpg';

const img = document.createElement("div");
// img.src = mainImage;
img.style.background = mainImage;
// img.style.backgroundImage = "url('../assets/holberton-logo.jpg')";
img.id = 'logo';

$('body').append(img);
$('#imagen').css("background-image", "url(../assets/holberton-logo.jpg)"); 
$('body').append('<h1>Holberton Dashboard</h1>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 100));
