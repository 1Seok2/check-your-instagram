/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
 **/

import "./assets/style/PageTransition.scss";
import "./assets/style/PageLoader.scss";

import animatePage from "@src/components/page.transition";
import createLoaderElement from "@src/components/page.loader";
import addEventWithElementByType from "@src/components/add.event";
import { getPathname } from "@src/components/functions";
import { linkEvent } from "@src/components/event.list";

import { renderApp } from "./App";

window.addEventListener("DOMContentLoaded", () => {
  createLoaderElement();
  animatePage();

  const pathname = getPathname();

  addEventWithElementByType(document.body, "click", function (e: Event) {
    /* add navigation click event */
    if ((e.target as HTMLAnchorElement).matches("[data-link]")) {
      linkEvent(e);
    }
  });

  /* change url */
  window.addEventListener("popstate", () => {
    renderApp(pathname);
  });

  /* initial render */
  renderApp(pathname);
});
