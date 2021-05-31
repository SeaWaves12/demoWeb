import React from "react";
import { Edit, Share, Visibility, Menubook, Favorite } from "./icons";
import css from "./style/Main.module.scss";

const SectionStoryBox = () => {
  return (
    <section className={css.MainBottom}>
      <div className={css.MainBottomHead}>
        <h1>
          Read More Raw Confessions <a href="#">#</a>
        </h1>
      </div>

      {/* Data from StaticURL  */}
      <div className={css.MainBottomStoryBox}>
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        <StoryBoxItems />
        {/* WithOut Map You Can Add Google Ads Here */}
        <StoryBoxItems />
      </div>
    </section>
  );
};

export default SectionStoryBox;

const StoryBoxItems = () => {
  return (
    <>
      <div className={css.MainBottomStoryBoxItems}>
        <div className={css.MainBottomStoryBoxItemsTop}>
          <h4>Hello World with neeraj</h4> &middot; <span>10min ago</span>
        </div>
        <div className={css.MainBottomStoryBoxItemsMiddle}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            provident mollitia deserunt. Quae voluptatum in minus consectetur
            consequuntur voluptates ratione, nulla magni quibusdam atque
            explicabo nostrum minima, cupiditate hic fuga.
          </p>
        </div>
        <div className={css.MainBottomStoryBoxItemsBottom}>
          <span>
            <Visibility />
            <span>126k</span>
          </span>
          <span>
            <Favorite />
            <span>1k</span>
          </span>
          <span>
            <Share />
            <span>2k</span>
          </span>
        </div>
      </div>
    </>
  );
};
