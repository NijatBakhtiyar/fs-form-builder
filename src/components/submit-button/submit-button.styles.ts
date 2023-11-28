import { styled } from "@/themes";

export const StyledButton = styled("button", {
  dflex: "center",
  backgroundColor: "$success100",
  borderRadius: "$sm",
  padding: "$14 $20",
  gap: "$8",
  color: "$baseWhite",
  fontWeight: "$semibold",
});

export const StyledButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  alignItems: "center",
});
