import { customScrollbar, styled } from "@/themes";

export const StyledUl = styled("ul", customScrollbar, {
  height: "100%",
  overflowY: "auto",
  margin: "-$16",
  padding: "$16",
});

export const StyledLi = styled("li", {
  "& + &": {
    mt: "$16",
  },
});
