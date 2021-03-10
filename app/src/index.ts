/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
**/

import App from './App';
import {BASE_URL} from './config/url';
import {initialTrantition, randomTransition} from "./components/pageTransition";
import {setState} from "./state/state";

window.addEventListener('DOMContentLoaded', () => {
    /* add div for page transitions */
    (()=> {
        const $div = document.createElement('div');
        $div.className = "page-transition";
        document.body.appendChild($div);

        initialTrantition();
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
        e.stopPropagation();

        /* add navigation click event */
        if((e.target as HTMLAnchorElement).matches("[data-link]")){
            const href : string= (e.target as HTMLAnchorElement).href.split(BASE_URL)[1];
            e.preventDefault();
            setTimeout(()=>{
                $App && ($App.innerHTML = App(href));
            },1200);
            randomTransition();
        }
        /* add POST event for button */
        else if((e.target as HTMLAnchorElement).id === 'update-button') {
            let result: any= null;
            const insta_id = (document.querySelector('#id-input') as HTMLInputElement).value;

            if(insta_id){
                try{
                    result = await (await fetch(BASE_URL + 'update?insta_id=' + insta_id)).json();
                } catch (e){
                    console.log(e);
                } finally {
                    console.log(result);
                    result && $App && (()=>{
                        $App.innerHTML = App('main');
                        setState({insta_id : insta_id});
                    })();
                }
            } else {
                alert('아이디를 입력하세요');
            }
        }
    });
})