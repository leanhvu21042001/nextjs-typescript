import { UserOutlined } from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

export type IconType = "outlined" | "filled" | "two-tone" | "round" | "sharp";

interface IBaseIcon {
  UserBold: (props: AntdIconProps) => JSX.Element;
}
const BaseIcon: IBaseIcon = {
  UserBold: (props: AntdIconProps) => {
    return <UserOutlined {...props} />;
  },
};

export default BaseIcon;

// Usage:
// const Icon = BaseIcon["UserBold"];
// <Icon />;
