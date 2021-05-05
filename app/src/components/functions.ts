import { BASE_URL } from "@src/config/url";
import { setState } from "@src/store/state";
import { togglePageLoader } from "@src/components/page.loader";
import { randomTransition } from "@src/components/page.transition";
import renderApp from "@src/App";

export function formatNumber(number: number): string {
  if (`${number}`.length > 6) {
    return `${Math.floor(number / 1000000)}m`;
  } else if (`${number}`.length > 3) {
    return `${Math.floor(number / 1000)}k`;
  } else {
    return `${number}`;
  }
}

export function getElement(cssSelector: string) {
  return document.querySelector(cssSelector);
}

export function getElementsAll(cssSelector: string) {
  return document.querySelectorAll(cssSelector);
}

export function getPathname() {
  return window.location.pathname.split("/")[1];
}

export function warningEmptyId() {
  alert("아이디를 입력하세요");
  togglePageLoader(false);
}

export function pendingFetch() {
  togglePageLoader(true);
}

export function successFetch(result: any, pathname: string) {
  randomTransition();
  setState(result);
  setTimeout(() => {
    renderApp(pathname);
    togglePageLoader(false);
  }, 1200);
}

export function failFetch() {
  togglePageLoader(false);
  alert("fail to search");
}

export async function fetchByURL(url: string) {
  const result = await (await fetch(BASE_URL + url)).json();

  console.log("res!", result);

  if (result) {
    successFetch(result, "main");
  } else {
    failFetch();
  }
}
