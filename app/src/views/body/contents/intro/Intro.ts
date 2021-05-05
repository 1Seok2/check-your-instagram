/**
 * @author wonseog
 * @date 2021-03-09
 * @description id 입력하는 메인 화면
 *              조회 / 업데이트
 **/

import Title from "@src/components/Title";
import "@src/assets/style/Intro.scss";
import addEventWithElementByType from "@src/components/add.event";
import { handleFetchById } from "@src/components/event.list";

const Intro = (): string => {
  addEventWithElementByType(document.body, "click", function (e: Event) {
    if ((e.target as HTMLButtonElement).id === "search-button") {
      /* add GET event for button */
      handleFetchById("search?insta_id=", "#id-input");
    }
  });

  return `<div class="intro">
        <label for="id-input">   
            ${Title("SEARCH INSTAGRAM").Large}
            <input 
                id="id-input" 
                type="text" 
                name="insta_id" 
                placeholder="INSTAGRAM NICKNAME"
            />
            <button id="search-button">SEARCH</button>
        </label>
    </div>`;
};

export default Intro;
