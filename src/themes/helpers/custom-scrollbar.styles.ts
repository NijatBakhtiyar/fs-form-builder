import { css } from "../stitches.config";

export const customScrollbar = css({
  "scrollbar-width": "thin", // for firefox as possible

  /* Foreground, Background */
  "scrollbar-color": "$colors$gray300 transparent",

  "&::-webkit-scrollbar": {
    width: 6 /* vertical scrollbars */,
    height: 6 /* horizontal scrollbars */,
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray300",
    borderRadius: 32,
  },

  "&::-webkit-scrollbar-track ": {
    background: "transparent",
  },
});
