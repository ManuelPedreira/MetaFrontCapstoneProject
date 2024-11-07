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
    "title title title title"
      "calendar calendar zone zone"
      "calendar calendar name name"
      "calendar calendar surname surname"
      "people hour phone phone"
      ". . . ."
      ". . . ."
      "info info info info"
      ". . . ."
      ". . . ."
      ". button button ."
      `;
};
