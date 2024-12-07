import classNames from "classnames";
import { Container } from "../components/Container";
import { StarsIllustration } from "../components/icons/stars";
import { SocialProof } from "../components/sections/SocialProof";
import { Features1 } from "../components/sections/Features1";
import { HomepageHero } from "../components/sections/HomePageHero";
import { Features2 } from "../components/sections/Features2";
import { Product } from "../components/sections/Product";
import { CTA } from "../components/CTA";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <SocialProof />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Product />
      <Features1 />
      <div className="mt-16">
        <CTA />
      </div>
      <div className="pb-16" id="pricing">
        <Features2 />
      </div>
    </>
  );
}
