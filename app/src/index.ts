/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
**/

import App from './App';
import {initialTrantition} from "./components/page.transition";
import {addEvent} from "@src/components/add.event";
import './assets/style/PageTransition.scss';
import './assets/style/PageLoader.scss';

window.addEventListener('DOMContentLoaded', () => {
    /* add div for page transitions */
    (()=> {
        const $div = document.createElement('div');
        $div.className = "page-transition";
        document.body.appendChild($div);

        initialTrantition();
    })();

    (()=> {
        const $div = document.createElement('div');
        $div.className = "page-loader";
        document.body.appendChild($div);
    })();

    const $App = document.querySelector('#App');
    const pathname = window.location.pathname.split('/')[1];

    /* change url */
    window.addEventListener('popstate', ()=>{
        $App && ($App.innerHTML = App(pathname));
    });

    /* initial render */
    $App && ($App.innerHTML = App(pathname));

    document.body.addEventListener('click', async (e) => {
        await addEvent(e, $App, App);
    });
})