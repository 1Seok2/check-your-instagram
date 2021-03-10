/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 버튼 이벤트, Route 이벤트 등록 모음
**/

import {BASE_URL} from "@src/config/url";
import {randomTransition} from "@src/components/pageTransition";
import {getState, setState} from "@src/store/state";

export const addEvent = async (
    e : Event,
    $App : Element | null,
    App : (pathname : string) => string
) => {
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
    /* add GET event for button */
    else if((e.target as HTMLButtonElement).id === 'search-button') {
        let result: any= null;
        const insta_id = (document.querySelector('#id-input') as HTMLInputElement).value;

        if(insta_id){
            try{
                result = await (await fetch(BASE_URL + 'search?insta_id=' + insta_id)).json();
            } catch (e){
                console.log(e);
            } finally {
                console.log('res!',result);
                result && $App && (()=>{
                    randomTransition();
                    setState({
                        insta_id : insta_id,
                        followers : result.followers,
                        following : result.following
                    });
                    setTimeout(()=>{
                        $App.innerHTML = App('main');
                    },1200)
                })();
            }
        } else {
            alert('아이디를 입력하세요');
        }
    }
    /* add POST event for button */
    else if((e.target as HTMLButtonElement).id === 'update-button') {
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
                    randomTransition();
                    setState({
                        insta_id : insta_id,
                        followers : result.followers,
                        following : result.following
                    });
                    setTimeout(()=>{
                        $App.innerHTML = App('main');
                    },1200)
                })();
            }
        } else {
            alert('아이디를 입력하세요');
        }
    }
}