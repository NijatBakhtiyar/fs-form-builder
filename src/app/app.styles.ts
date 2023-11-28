import { styled } from "@/themes";

export const StyledAppContainer = styled("div", {
  backgroundColor: "$white200",
  padding: "$24",

  "@laptop": {
    padding: "$40",
    height: "100vh",
    overflow: "hidden",
  },
});

export const StyledLayoutContainer = styled("main", {
  mt: "$24",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$24",

  "@laptop": {
    mt: "$32",
    height: "calc(100vh - 164px)",
    flexDirection: "row",
  },
});
