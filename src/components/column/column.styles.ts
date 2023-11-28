import { styled } from "@/themes";
import { Paragraph } from "@/themes/typography";

export const StyledContainer = styled("aside", {
  borderRadius: "$md",
  backgroundColor: "$baseWhite",
  border: "1px solid $gray200",
});

export const StyledTitle = styled(Paragraph, {
  fontWeight: "$medium",
  padding: "$16 $28",
  color: "$gray900",
  borderBottom: "1px solid $gray200",
});

export const StyledChildren = styled("section", {
  padding: "$24 $16",
  height: "100%",
});
