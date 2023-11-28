// used for debugging margin and padding
// import "@/styles/debug.css";
import { SubmitButton } from "@/components";
import "@/styles/global.css";
import "@/styles/reset.css";

import { StyledAppContainer } from "./app.styles";
import { FormBuilder } from "./form-builder";

export function App() {
  return (
    <StyledAppContainer>
      <SubmitButton />
      <FormBuilder />
    </StyledAppContainer>
  );
}
