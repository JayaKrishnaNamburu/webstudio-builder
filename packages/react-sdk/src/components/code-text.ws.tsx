import { CodeTextIcon } from "@webstudio-is/icons/svg";
import {
  defaultStates,
  type PresetStyle,
  type WsComponentMeta,
  type WsComponentPropsMeta,
} from "./component-meta";
import { type defaultTag, displayVarNamespace } from "./code-text";
import { props } from "./__generated__/code-text.props";
import { code } from "../css/normalize";

const presetStyle = {
  code: [
    ...code,
    {
      property: "display",
      value: {
        type: "var",
        value: displayVarNamespace,
        fallbacks: [{ type: "keyword", value: "inline-block" }],
      },
    },
    {
      property: "paddingLeft",
      value: { type: "unit", value: 0.2, unit: "em" },
    },
    {
      property: "paddingRight",
      value: { type: "unit", value: 0.2, unit: "em" },
    },
    {
      property: "backgroundColor",
      value: { type: "rgb", r: 238, g: 238, b: 238, alpha: 1 },
    },
  ],
} satisfies PresetStyle<typeof defaultTag>;

export const meta: WsComponentMeta = {
  category: "general",
  type: "rich-text",
  label: "Code Text",
  icon: CodeTextIcon,
  states: defaultStates,
  presetStyle,
  template: [
    {
      type: "instance",
      component: "CodeText",
      children: [{ type: "text", value: "Code you can edit" }],
    },
  ],
};

export const propsMeta: WsComponentPropsMeta = {
  props,
  initialProps: ["inline", "lang", "meta"],
};
