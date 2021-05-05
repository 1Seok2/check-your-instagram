/**
 * @author : wonseog
 * @date : 2021/03/09
 * @description : 페이지 이동 효과 주는 함수
 **/

let $div: HTMLDivElement;

const pageTransitionClassList = [
  "transition-0",
  "transition-1",
  "transition-2",
];

const getDivs = (): HTMLDivElement =>
  document.querySelector(".page-transition") as HTMLDivElement;

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
  $div && turnOnAndOff(0);
};

export const randomTransition = () => {
  $div = $div || getDivs();
  const randomIndex = Math.floor(
    Math.random() * (pageTransitionClassList.length - 1) + 1
  );

  $div && turnOnAndOff(randomIndex);
};

export default function animatePage() {
  const $div = document.createElement("div");
  $div.className = "page-transition";
  document.body.appendChild($div);

  initialTrantition();
}
