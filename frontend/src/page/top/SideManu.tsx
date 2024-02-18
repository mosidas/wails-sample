/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const style = css`
  background-color: #f0f0f0;
`;

const manuIcon = css`
  background-color: gray;
`;

const menuButton = css`
  background-color: gray;
  border: 1px solid white;
  height: 100px;
  width: 100px;
  text-align: center;
  vertical-align: middle;
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const SideMenu = (props: {
  setMenu: React.Dispatch<React.SetStateAction<EmotionJSX.Element>>;
}) => {
  return (
    <div css={style}>
      <div css={manuIcon}>
        <button css={menuButton} onClick={() => props.setMenu(<Menu1 />)}>
          menu1
        </button>
      </div>
      <div css={manuIcon}>
        <button css={menuButton} onClick={() => props.setMenu(<Menu2 />)}>
          menu2
        </button>
      </div>
      <div css={manuIcon}>
        <button css={menuButton} onClick={() => props.setMenu(<Menu3 />)}>
          menu3
        </button>
      </div>
      <div css={manuIcon}>
        <button css={menuButton} onClick={() => props.setMenu(<Menu4 />)}>
          menu4
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
