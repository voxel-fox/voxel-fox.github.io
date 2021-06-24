import React from "react";

import Avatar from "components/svgs/Avatar";
import CornerMark from "components/svgs/CornerMark";
import IconGitHub from "components/svgs/IconGitHub";
import Logo from "components/svgs/Logo";
import VoxelFox from "components/svgs/VoxelFox";

import DarkModeToggle from "components/DarkModeToggle";

import Global from "styles/global";
import NormalizeCSS from "styles/normalize";
import * as S from "styles/utils";

const HomePage = () => (
  <>
    <NormalizeCSS />
    <Global />
    <DarkModeToggle />
    <div css={[S.flex, S.flexCol, S.centerAll, S.pt5vh]}>
      <CornerMark css={[S.absolute, S.top0, S.right0, S.vw20]} />
      <h1 css={[S.flex, S.flexCol, S.centerAll, S.m0]}>
        <Logo css={[S.vw15, S.mb10]} />
        <VoxelFox css={S.vw30} />
      </h1>
      <div>
        <p css={[S.text2xl, S.center]}>Making things on the internet.</p>
        <p css={[S.baseList, S.grid]}>
          <a
            css={[S.flex, S.centerAll]}
            href="https://github.com/voxel-fox"
            title="GitHub Voxel Fox"
          >
            <IconGitHub css={S.w60px} />
            <span css={S.text5xl} aria-hidden="true">
              +
            </span>
            <Logo
              outline={"currentColor"}
              bg="transparent"
              color="transparent"
              css={S.w60px}
            />
          </a>
          <a
            css={[S.flex, S.centerAll]}
            href="https://github.com/kara-todd"
            title="GitHub Kara Todd"
          >
            <IconGitHub css={S.w60px} />
            <span css={S.text5xl} aria-hidden="true">
              +
            </span>
            <Avatar css={S.w60px} />
          </a>
        </p>
      </div>
    </div>
  </>
);

export default HomePage;
