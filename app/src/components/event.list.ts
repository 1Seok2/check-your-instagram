import { randomTransition } from "@src/components/page.transition";
import { renderApp } from "@src/App";
import {
  getElement,
  pendingFetch,
  warningEmptyId,
  fetchByURL,
} from "./functions";

export function linkEvent(e: Event) {
  e.preventDefault();

  const pathname: string = (e.target as HTMLAnchorElement).pathname.split(
    "/"
  )[1];

  setTimeout(() => {
    renderApp(pathname);
  }, 1200);

  randomTransition();
}

export async function searchEvent() {
  const insta_id = (getElement("#id-input") as HTMLInputElement).value;

  pendingFetch();

  if (!insta_id) {
    warningEmptyId();
    return;
  }

  await fetchByURL("search?insta_id=" + insta_id);
}

export async function updateEvent() {
  const insta_id = (getElement("#id-input") as HTMLInputElement).value;

  pendingFetch();

  if (!insta_id) {
    warningEmptyId();
    return;
  }

  await fetchByURL("update?insta_id=" + insta_id);
}
