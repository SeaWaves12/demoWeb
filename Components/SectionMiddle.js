import React from "react";
import { Share } from "./icons";
import css from "./style/Main.module.scss";

//Here You can Add multiple Google Ads
const SectionMiddle = () => {
  return (
    <div className={css.MainMiddle}>
      <div className={css.MainMiddleHead}>
        <h1>
          The Freeing Power in True Anonymous Confessions <a href="#">#</a>
        </h1>
      </div>
      <div className={css.MainMiddleBox}>
        {LocalData.map((data, index) => {
          return (
            <>
              <div key={index.toString()}>
                <div>
                  <h4>{`${index + 1}. ${data.heading}`}</h4>
                </div>
                <div>
                  <p>{data.para}</p>
                </div>
                <div className={css.MainMiddleBoxBottom}>
                  <span>
                    <Share />
                    <span>1k</span>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SectionMiddle;

const LocalData = [
  {
    heading: `True peace of mind lies on confession. It is the greatest stress
    reliever.`,
    para: `Anonymous confessions encourages individuals to explore
    their deepest thoughts and feelings about upsetting
    experiences.
    It lightens our burden of guilt, fear, and shame making
    us feel the fresh breeze of confidence experiences`,
  },
  {
    heading: `Anonymously
    without anyone knowing`,
    para: `You might share your secret confession with a few friends in a
   moment of weakness and forget about it only to find out that
   your secret confession is no longer a secret. So, it is very
   important to share your hidden and disgraceful truths, aloud,
   into a safe environment. What if you had some way of sharing
   your confessions and getting it off our chest anonymously
   without anyone knowing it was you, but yet there for the world
   to see, then surely you will feel a load lifted off your
   shoulders.`,
  },
  {
    heading: `Secret Confessions`,
    para: `  Vigyaa Anonymous is the best platform for online confessions. It
 gives you the opportunity to confess anonymously and share your
 secret confessions without being judged or labeled. By
 �anonymously� we mean completely anonymous. You don�t have to
 register or login. Even there is no IP tracing. It�s a safe
 place where you can confess anything.`,
  },
  {
    heading: `Write Anonymously`,
    para: ` The intent of anonymous confession is to provide healing for
 your heart and soul as well as to regain your lost self-esteem.
 So what are you waiting for?`,
  },
  {
    heading: ` Read Anonymously  `,
    para: ` It has a great collection of confession stories be it cheating
 confessions, adult confessions, or any other true confessions.
 You can read others anonymous secret confessions and also leave
 your reply, all this without giving up your identity. While some
 of the anonymous confessions can be shocking and unexpected
 sometimes, raw confessions 
   are also extremely romantic, bringing us closer to the people
 as they reveal their true selves. Can't wait to read such raw
 confessions?`,
  },
  {
    heading: `We all make mistakes`,
    para: `None of us is perfect. We all make mistakes. Some of us have
    made bigger mistakes than others. We all at some point in our
    lives have held on, or are still holding on, to some secret
    confessions that we were, or are dying to share. Still,
    irrespective of the seriousness of the mistake, holding on to it
    only gives it more power.`,
  },
];
