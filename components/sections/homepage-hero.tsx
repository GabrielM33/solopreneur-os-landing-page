import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";

export const HomepageHero = () => {
  return (
    <Hero>
      <div className="py-16">
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          href="/"
          variant="secondary"
          size="small"
        >
          <span>Save 30% - Launch Offer</span>{" "}
        </Button>
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] font-semibold">
          SolopreneurOS
          <br className="hidden md:block" />
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] pb-10">
          Transform your business operations into a seamless <br /> system that runs on autopilot.
        </HeroSubtitle>
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] -pb-10"
          href="#pricing"
          variant="primary"
          size="large"
        >
          <span>Get Instant Access </span>
        </Button>
      </div>
      <div className="-mt-16 -pb-36">
        <HeroImage />
      </div>
    </Hero>
  );
};

