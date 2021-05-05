/**
 * @author : wonseog
 * @date : 2021/03/09
 * @description : 페이지 이동 효과 주는 함수
 **/

import { getElement } from "./functions";

let $div: HTMLDivElement;

const pageTransitionClassList = [
  "transition-0",
  "transition-1",
  "transition-2",
];

const getDivs = () => getElement(".page-transition") as HTMLDivElement;

const turnOnAndOff = (idx: number) => {
  $div.classList.toggle(pageTransitionClassList[idx]);
  $div.style.display = "block";

  setTimeout(
    function () {
      $div.style.display = "none";
      $div.classList.toggle(pageTransitionClassList[idx]);
    },
    idx === 0 ? 900 : 2300
  );
};

export const initialTrantition = () => {
  $div = $div || getDivs();
  turnOnAndOff(0);
};

export const randomTransition = () => {
  $div = $div || getDivs();
  const randomIndex = Math.floor(
    Math.random() * (pageTransitionClassList.length - 1) + 1
  );

  turnOnAndOff(randomIndex);
};

export default function animatePage() {
  const $div = document.createElement("div");
  $div.className = "page-transition";
  document.body.appendChild($div);

  initialTrantition();
}
