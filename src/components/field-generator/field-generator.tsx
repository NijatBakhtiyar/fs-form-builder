import type { CSS } from "@/themes";
import { Box, Stack } from "@/themes/layout";
import { Paragraph } from "@/themes/typography";
import type { ID, Option } from "@/types";
import { Input, InputNumber, Radio, RadioGroup, Select, Textarea, Toggle } from "@uvodohq/planum";

import { ChoiceGroup } from "./choice-group/choice-group";

interface Props {
  value: string | number | boolean;
  element: string;
  label: string;
  options?: Option[];
  placeholder?: string;
  onChange: (value?: ID | string[] | boolean | null) => void;
  visible?: boolean;
  width?: string;
  minLength?: number;
  maxLength?: number;
  css?: CSS;
}

export function FieldGenerator(props: Props) {
  const {
    element,
    label,
    options = [],
    value,
    visible = true,
    width,
    minLength,
    maxLength,
    ...rest
  } = props;

  switch (element) {
    case "number":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <InputNumber
            label={label}
            aria-label={label ?? "Input number element"}
            value={value as number}
            maxLength={maxLength}
            minLength={minLength}
            {...rest}
          />
        </Box>
      );
    case "text":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Input
            label={label}
            aria-label={label ?? "Input text element"}
            value={value as string}
            maxLength={maxLength}
            minLength={minLength}
            {...rest}
          />
        </Box>
      );
    case "toggle":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Toggle
            aria-label={label ?? "Toggler element"}
            isSelected={value as boolean}
            labelTextOn="required"
            labelTextOff="required"
            {...rest}
          />
        </Box>
      );
    case "select":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Select
            label={label}
            aria-label={label ?? "Select element"}
            items={options}
            labelKey="value"
            value={value as string}
            {...rest}
          />
        </Box>
      );
    case "radio":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Paragraph css={{ color: "$black100", fontSize: "$xs", mb: "$8" }}>{label}</Paragraph>
          <RadioGroup
            label={label}
            aria-label={label ?? "Radio element"}
            value={value as string}
            {...rest}
          >
            <Stack y="$12">
              {options.map((option) => (
                <Radio key={option.id} value={option.id}>
                  {option.value}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
      );
    case "choice":
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Paragraph css={{ color: "$black100", fontSize: "$xs", mb: "$8" }}>{label}</Paragraph>
          <ChoiceGroup label={label} options={options} {...rest} />
        </Box>
      );

    default:
      return (
        <Box
          css={{
            width: `calc(12 / ${width} * 100%`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s cubic-bezier(0.65,0.05,0.36,1)",
          }}
        >
          <Textarea
            label={label}
            aria-label={label ?? "Textarea element"}
            value={value as string}
            minLength={minLength}
            maxLength={maxLength}
            {...rest}
            css={{
              resize: "none",
            }}
          />
        </Box>
      );
  }
}
