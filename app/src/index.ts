import {Bye} from './Bye';
import './assets/style/App.css';
import v4 from './assets/image/v4Logo.png';

const hi = 'hchoi won';

const hi1 = () => {
  console.log(hi);
  Bye();

  const tag = window.document.querySelector('#App');

  if(tag) {
    tag.innerHTML = `<img src=${v4} alt="image" />`;
  }
};

hi1();