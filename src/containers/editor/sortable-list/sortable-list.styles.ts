import { customScrollbar, styled } from "@/themes";

export const StyledUl = styled("ul", customScrollbar, {
  display: "flex",
  flexDirection: "column",
  gap: "$24",
  height: "100%",
  overflowY: "auto",
  margin: "-$16",
  padding: "$16",
});

export const StyledLiInner = styled("div", {
  position: "relative",
  cursor: "pointer",
  display: "flex",
  borderRadius: "$sm",
  listStyle: "none",
  gap: "$8",
});

export const StyledFieldContainer = styled("div", {
  position: "relative",
  padding: "$16",
  marginRight: "$32",
  border: "1px dashed transparent",

  variants: {
    isFocused: {
      true: {
        borderRadius: "$md",
        borderColor: "$gray300",
      },
    },
  },
});

export const StyledIconContainer = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$10",
  color: "$gray500",
  height: "100%",
});
