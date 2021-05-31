import React from "react";
import { Edit, Share, Visibility, Menubook, Favorite } from "./icons";
import css from "./style/Main.module.scss";

//I don't Suggest You to Add Google Ads on The Top

const SectionTop = () => {
  return (
    <section className={css.MainTop}>
      <div>
        <div className={css.MainTopSectionHead}>
          <h1>
            Anonymous Confessions <br /> Best Raw Confession Stories
          </h1>
        </div>
        <div className={css.MainTopSectionPara}>
          <p>
            Are you overwhelmed with guilt over a sordid relationship, addiction
            or even a secret facial cosmetic surgery? Are those untold secrets
            haunting you? Make anonymous confessions or read thousands of raw
            confessions left by others.
          </p>
        </div>
        <div className={css.MainTopSectionButton}>
          <button onClick={() => console.log("Button Pressed")}>
            <span>
              <Edit />
            </span>
            Write Anonymously
          </button>
          <button onClick={() => console.log("Button Pressed")}>
            <span>
              <Menubook />
            </span>
            Read Anonymously
          </button>
        </div>
        <div className={css.MainTopSectionPara}>
          <p>Read Raw Confession Stories...</p>
        </div>
      </div>
      <div className={css.MainTopSectionModel}>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/05/08/25/fairy-tale-1077863_960_720.jpg"
          alt="top"
        />
      </div>
    </section>
  );
};

export { SectionTop };
