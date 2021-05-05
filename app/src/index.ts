/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 현재 pathname을 파악 후 App으로 전달
 **/

import App, { renderApp } from "./App";
import animatePage from "./components/page.transition";
import { addEvent } from "@src/components/add.event";
import "./assets/style/PageTransition.scss";
import "./assets/style/PageLoader.scss";
import createLoaderElement from "./components/page.loader";
import { getElement, getPathname } from "./components/functions";

window.addEventListener("DOMContentLoaded", () => {
  createLoaderElement();
  animatePage();

  const $App = getElement("#App") as HTMLDivElement;
  const pathname = getPathname();

  document.body.addEventListener("click", async (e) => {
    await addEvent(e, $App, App);
  });

  /* change url */
  window.addEventListener("popstate", () => {
    renderApp(pathname);
  });

  /* initial render */
  renderApp(pathname);
});
