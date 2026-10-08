import { SocialMedias } from './SocialMedias';
import { Bird } from './svgs/Bird';
import Cloud from './svgs/Cloud';
import EiffelTower from './svgs/EiffelTower';

const Intro = () => (
  <section className="relative h-screen bg-[linear-gradient(transparent_90%,var(--color-accent)_0)] text-black">
    <div className="flex">
      <div className="mx-[10%] mt-[4%]">
        <h1 className="mt-[0.67em] mb-[1.8rem] text-[4rem] font-semibold max-[414px]:text-[3rem]">
          Hey there!
        </h1>
        <p className="mb-6 max-w-[800px] text-[1.5rem] leading-[1.5em] font-light">
          I'm Emilien, Frontend developer based in London, mainly working with
          React and React Native environments. I enjoy working on on both the
          "front of the front" and "back of the front".
        </p>
        <SocialMedias />
      </div>
      <Cloud first />
      <Cloud />
      <div className="absolute top-1/2 z-[3] animate-bird-flight will-change-transform max-[414px]:hidden">
        <Bird />
      </div>
      <div className="absolute right-[10%] bottom-[32%] max-[414px]:right-[3%] max-[414px]:bottom-[10%]">
        <EiffelTower />
      </div>
    </div>
  </section>
);

export default Intro;
