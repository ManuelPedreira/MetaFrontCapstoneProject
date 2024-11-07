import { ReservationPageOptions } from ".";

export const getGridArea = (visible?: ReservationPageOptions | "full") => {
  if (visible === "first")
    return `
      "title title"
      "calendar calendar"
      "people hour"
      "zone zone"
      "button button"
    `;
  else if (visible === "last")
    return `
      "title title"
      "details details"
      "name name"
      "surname surname"
      "phone phone"
      "info info"
      "button button"
    `;
  else if (visible === "full")
    return `
    "title title title title title title title title title"
    "calendar calendar calendar calendar . . . . ."
    "calendar calendar calendar calendar . zone zone zone zone"
    "calendar calendar calendar calendar . people people people people"
    "calendar calendar calendar calendar . hour hour hour hour"
    ". . . . . . . . ."
    "name name name surname surname surname phone phone phone"
    "info info info info info info info info info"
    ". . . button button button . . ."
   `;
};
