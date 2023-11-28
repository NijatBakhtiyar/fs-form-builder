import { css, styled } from "..";

export const commonCss = css({
  fontFamily: "$sans",

  variants: {
    fw: {
      regular: {
        fw: "$regular",
      },
      medium: {
        fw: "$medium",
      },
      semibold: {
        fw: "$semibold",
      },
      bold: {
        fw: "$bold",
      },
    },
  },
});

export const paragraphCss = css(commonCss, {
  fontSize: "$base",
  lineHeight: "$md",
});

export const Paragraph = styled("p", paragraphCss);
