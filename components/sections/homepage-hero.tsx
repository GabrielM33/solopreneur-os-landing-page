import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
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
    Transform your business operations into seamless <br /> workflows that run on autopilot.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="https://buy.stripe.com/dR6bMFdYp3b6aJiaEF"
      variant="primary"
      size="large"
    >
        <span>Get Instant Access </span>
    </Button>
    <div className="-mt-16">
       <HeroImage />
    </div>
   
  </Hero>
);
