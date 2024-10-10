/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SideMenu from "./SideManu";
import MenuBase from "./MenuBase";
import Menu1 from "./Menu1";
import { useState } from "react";

const container = css`
  position: relative;
  display: grid;
  grid-template:
    "side main" 1fr
    / auto 1fr;
  gap: 1px;
  height: 100vh;
  width: 100vw;
`;

const side = css`
  grid-area: side;
`;

const main = css`
  grid-area: main;
  margin: 0px 0px 0px 0px;
`;

const Top = () => {
	const [menu, setMenu] = useState(<Menu1 />);

	return (
		<div css={container}>
			<div css={side}>
				<SideMenu setMenu={setMenu} />
			</div>
			<div css={main}>
				<MenuBase menu={menu} />
				{/* <Menu1 /> */}
			</div>
		</div>
	);
};

export default Top;
