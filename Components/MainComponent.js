import React from "react";

import css from "./style/Main.module.scss";
import dynamic from "next/dynamic";
import { SectionTop } from "./SectionTop";
import SectionMiddle from "./SectionMiddle";
const SectionStoryBox = dynamic(async () => await import("./SectionStoryBox"), {
  loading: () => <SectionStoryBoxLoader />,
});
const MainComponent = () => {
  return (
    <>
      <div className={css.Main}>
        <SectionTop />
        <SectionMiddle />
        <SectionStoryBox />
      </div>
    </>
  );
};

export default MainComponent;

const SectionStoryBoxLoader = () => {
  return (
    <>
      <div className={"SectionStoryBoxLoader"}>
        <p>Loading...</p>
      </div>
      <style jsx>
        {`
          .SectionStoryBoxLoader {
            display: grid;
            place-content: center;
            min-height: 50vh;
          }
          .SectionStoryBoxLoader p {
            color: #aaa;
          }
        `}
      </style>
    </>
  );
};
