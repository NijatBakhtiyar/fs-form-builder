import { styled } from "@/themes";

export const StyledUl = styled("ul", {
  mb: "$12",
});

export const StyledLi = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: "$8",

  "& + &": {
    marginTop: "$12",
  },
});

export const StyledRemoveBtn = styled("button", {
  color: "$gray500",
});

export const StyledAddBtn = styled("button", {
  dflex: "center",
  backgroundColor: "$white100",
  size: "$36",
  borderRadius: "$md",
  color: "$gray500",
});
