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

    document.body.addEventListener('click', async (e) => {
        e.stopPropagation();
        if((e.target as HTMLAnchorElement).matches("[data-link]")){
            const href = (e.target as HTMLAnchorElement).href.split(BASE_URL)[1];
            e.preventDefault();
            $App && ($App.innerHTML = App(href));
        } else if((e.target as HTMLAnchorElement).id === 'update-button') {
            let result: any= null;
            const insta_id = (document.querySelector('#id-input') as HTMLInputElement).value;

            if(insta_id){
                try{
                    result = await (await fetch(BASE_URL + 'update?insta_id=' + insta_id)).json();
                } catch (e){
                    console.log(e);
                } finally {
                    console.log(result)
                    result && $App && ($App.innerHTML = App('main'))
                }
            }
        }
    });

    window.addEventListener('popstate', ()=>{
        $App && ($App.innerHTML = App(pathname))
    });

    $App && ($App.innerHTML = App(pathname));
})