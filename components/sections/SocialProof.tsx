import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";
import Image from "next/image";


export const SocialProof = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Built on
      </span>
      <br/> proven frameworks.
    </p>

    <div className="flex flex-wrap justify-around gap-y-6 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <div className="animate-glow">
        <Image src={"/books/atomic-habits.jpg"} alt="Atomic Habits" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:200ms]">
        <Image src={"/books/e-myth.jpg"} alt="E-Myth" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:400ms]">
        <Image src={"/books/gtd.jpg"} alt="Getting Things Done" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
      <div className="animate-glow [animation-delay:600ms]">
        <Image src={"/books/4-hour.jpg"} alt="Getting Things Done" width={100} height={100} className="rounded-lg shadow-glow" />
      </div>
    </div>
  </>
);

