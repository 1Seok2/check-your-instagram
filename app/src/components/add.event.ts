/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 버튼 이벤트, Route 이벤트 등록 모음
 **/

import { linkEvent, searchEvent, updateEvent } from "./event.list";

export const addEvent = async (
  e: Event,
  $App: Element,
  App: (pathname: string) => string
) => {
  e.stopPropagation();

  /* add navigation click event */
  if ((e.target as HTMLAnchorElement).matches("[data-link]")) {
    linkEvent(e);
  }

  if ((e.target as HTMLButtonElement).id === "search-button") {
    /* add GET event for button */
    searchEvent();
  }

  if ((e.target as HTMLButtonElement).id === "update-button") {
    /* add POST event for button */
    updateEvent();
  }
};
