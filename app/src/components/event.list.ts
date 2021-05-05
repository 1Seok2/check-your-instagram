import { randomTransition } from "@src/components/page.transition";
import renderApp from "@src/App";
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

export async function handleFetchById(url: string, cssSelector: string) {
  const insta_id = (getElement(cssSelector) as HTMLInputElement).value;

  pendingFetch();

  if (!insta_id) {
    warningEmptyId();
    return;
  }

  await fetchByURL(url + insta_id);
}
