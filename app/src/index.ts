/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
**/
import App from './App';
import {BASE_URL} from './config/url';

window.addEventListener('DOMContentLoaded', () => {
    const $App = document.querySelector('#App');
    const pathname = window.location.pathname.split('/')[1];

    document.body.addEventListener('click', (e) => {
        const target = e.target as HTMLAnchorElement;
        const href = target.href.split(BASE_URL)[1];

        if(target.matches("[data-link]")){
            e.preventDefault();
            $App && ($App.innerHTML = App(href));
        }
    });

    $App && ($App.innerHTML = App(pathname));
})