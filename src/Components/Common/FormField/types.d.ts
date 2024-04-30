import { SizeType } from "antd/es/config-provider/SizeContext";
import { FormItemInputProps } from "antd/es/form/FormItemInput";
import { NamePath } from "antd/es/form/interface";
import { ColProps } from "antd/es/grid";
import { CommonInputProps } from "rc-input/lib/interface";
import { LiteralUnion } from "antd/es/_util/type";


type ColSpanType = number | string;
type FlexType = number | LiteralUnion<'none' | 'auto'>;

export interface ICommonProps extends CommonInputProps {
  placeholder?: string | undefined;
  size?: SizeType;
}

export interface IFormItems {
  fitems: FormItemInputProps & FormItemProps;
  name: NamePath<Values>;
}

export interface IRenderInputProps extends ICommonProps, ColProps, IFormItems {
  col?: ColProps | undefined;
}