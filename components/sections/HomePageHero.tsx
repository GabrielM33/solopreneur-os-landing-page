import { Button, Highlight } from "../Button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../HeroImage";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
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
      Solopreneur OS
      <br className="hidden md:block" /> 
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
    Transform your business operations into a seamless <br /> system that runs on autopilot.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="https://buy.stripe.com/dR6bMFdYp3b6aJiaEF"
      variant="primary"
      size="large"
    >
        <span>Get Instant Access </span>
    </Button>
    </div>
    <div className="-mt-16">
       <HeroImage />
    </div>
   
  </Hero>
);
