import { styled } from "@/themes";

export const StyledUl = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$16",
});

export const StyledLi = styled("li", {
  borderRadius: "$md",
  border: "1px solid $gray200",
  boxShadow: "$sm",
  padding: "$12 $16",
  display: "flex",
  alignItems: "center",
  gap: "$12",
  cursor: "grab",
});

export const StyledIcon = styled("span", {
  dflex: "center",
  borderRadius: "$md",
  padding: "$8",
});
