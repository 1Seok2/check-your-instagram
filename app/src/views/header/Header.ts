/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 헤더
 **/

import "@src/assets/style/Header.scss";

import { renderApp } from "@src/App";
import addEventWithElementByType from "@src/components/add.event";
import { handleFetchById } from "@src/components/event.list";

import { getState } from "@src/store/state";

const Header = (): string => {
  const { insta_id } = getState();

  addEventWithElementByType(document.body, "click", function (e: Event) {
    if ((e.target as HTMLButtonElement).id === "update-button") {
      /* add POST event for button */
      handleFetchById("update?insta_id=", "#id-input");
      renderApp("main");
    }
  });

  return `
    <div class="header">
        <div class="form-container">
            <input type="text" name="insta_id" id="id-input" placeholder="${insta_id}" value="${insta_id}" />
            <button id="update-button">UPDATE</button>
        </div>
    </div>
`;
};

export default Header;
