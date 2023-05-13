import { useState } from "react";
import type { InvalidValue, StyleProperty } from "@webstudio-is/css-data";
import { TextArea, theme } from "@webstudio-is/design-system";
import type { RenderCategoryProps } from "../../style-sections";

type IntermediateValue = {
  type: "intermediate";
  value: string;
};

const property: StyleProperty = "boxShadow";

export const BoxShadowContent = (
  props: Pick<
    RenderCategoryProps,
    "deleteProperty" | "currentStyle" | "setProperty"
  >
) => {
  const [intermediateValue, setIntermediateValue] = useState<
    IntermediateValue | InvalidValue | undefined
  >(undefined);
  const styleInfo = props.currentStyle[property];
  const styleValue = styleInfo?.value;

  const textAreaValue =
    intermediateValue?.value ??
    (styleValue?.type === "unparsed" ? styleValue.value : undefined);

  const handleChange = (value: string) => {
    setIntermediateValue({
      type: "intermediate",
      value,
    });
  };

  console.log(intermediateValue);

  return (
    <TextArea
      rows={3}
      name="description"
      value={textAreaValue ?? ""}
      css={{ minHeight: theme.spacing[14] }}
      state={intermediateValue?.type === "invalid" ? "invalid" : undefined}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
};
