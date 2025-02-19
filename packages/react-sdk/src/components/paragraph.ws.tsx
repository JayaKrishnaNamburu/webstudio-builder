import { TextAlignLeftIcon } from "@webstudio-is/icons/svg";
import { p } from "../css/normalize";
import {
  defaultStates,
  type PresetStyle,
  type WsComponentMeta,
  type WsComponentPropsMeta,
} from "./component-meta";
import type { defaultTag } from "./paragraph";
import { props } from "./__generated__/paragraph.props";

const presetStyle = {
  p,
} satisfies PresetStyle<typeof defaultTag>;

export const meta: WsComponentMeta = {
  category: "typography",
  type: "rich-text",
  label: "Paragraph",
  icon: TextAlignLeftIcon,
  states: defaultStates,
  presetStyle,
  template: [
    {
      type: "instance",
      component: "Paragraph",
      children: [{ type: "text", value: "Pragraph you can edit" }],
    },
  ],
};

export const propsMeta: WsComponentPropsMeta = {
  props,
};
