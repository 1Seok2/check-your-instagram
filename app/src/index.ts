/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
**/
import App from "./App";

window.addEventListener('DOMContentLoaded', () => {
    const $App = document.querySelector('#App');
    let pathname = window.location.pathname.split('/')[1];

    $App && ($App.innerHTML = App(pathname));
})