/**
 * @author : wonseog
 * @date : 2021/03/09
 * @description : 페이지 이동 효과 주는 함수
**/

let $div : HTMLDivElement | null;

const pageTransitionClassList = [
    "transition-0",
    "transition-1",
    "transition-2"
]

const getDivs = () : HTMLDivElement | null => document.querySelector('.page-transition');

const turnOnAndOff = (idx : number)=>{
    $div && (()=>{
        $div.classList.toggle(pageTransitionClassList[idx]);
        $div.style.display = 'block';

        setTimeout(()=>{
            $div && (()=>{
                $div.style.display = 'none';
                $div.classList.toggle(pageTransitionClassList[idx]);
            })()
        },idx === 0 ? 900 : 2300);
    })()
}

export const initialTrantition = () => {
    $div = $div || getDivs();
    $div && turnOnAndOff(0);
}

export const randomTransition = () => {
    $div = $div || getDivs();
    const randomIndex = Math.floor(Math.random()*(pageTransitionClassList.length - 1) + 1);

    $div && turnOnAndOff(randomIndex);
}