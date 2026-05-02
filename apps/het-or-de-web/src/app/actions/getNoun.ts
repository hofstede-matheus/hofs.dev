"use server";
import { JSDOM } from "jsdom";

export const getNoun = async (dutchNoun: string) => {
  const res = await fetch(`https://www.welklidwoord.nl/${dutchNoun}`);
  const html = await res.text();

  const dom = new JSDOM(html);
  const pageDocument = dom.window.document;
  const querySelectorResult = pageDocument.querySelector("#content > h2");
  const article = querySelectorResult?.textContent?.trim();

  return {
    noun: article ?? "This seems to be an invalid dutch noun",
  };
};
