import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const MenuBase = (props: { menu: ReactJSXElement }) => {
  return <div>{props.menu}</div>;
};

export default MenuBase;
