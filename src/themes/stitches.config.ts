import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
} from "./tokens";
import { shorthandUtils } from "./utils";

const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    prefix: "FSCode",
    theme: {
      colors,
      fonts: fontFamilies,
      fontSizes,
      fontWeights,
      lineHeights,
      shadows,
      radii,
      space,
      sizes: space,
    },
    media: {
      desktop: "(min-width: 1024px)",
      laptop: "(min-width: 768px)",
      tablet: "(min-width: 640px)",
      largeMobile: "(min-width: 425px)",
      mobile: "(min-width: 0px)",
    },
    utils: shorthandUtils,
  });

export type VariantProps<T extends {}> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;

export type SpacingValue = number | string | Stitches.PropertyValue<"margin" | "padding">;

export { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme };
