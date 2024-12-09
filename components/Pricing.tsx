import { Container } from "../components/container";
import { Features } from "../components/features";
import classNames from "classnames";


interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}


const pricingTiers: PricingTier[] = [
    {
      title: "Essential ",
      monthlyPrice: 37,
      buttonText: "Start Saving Time Now",
      popular: false,
      inverse: true,
      features: [
        "Complete operating system for solopreneurs",
        "23+ ready-to-use workflow templates",
        "Save 10+ hours every week",
      ],
    },
    {
      title: "Pro Automation",
      monthlyPrice: 47,
      buttonText: "Unlock Pro Features",
      popular: true,
      inverse: false,
      features: [
        "Everything in Essential, plus:",
        "Powerful automation triggers",
        "Premium SOPs and templates",
      ],
    },
  ];

  

interface PricingCardsProps {
    tiers: PricingTier[];
  }
  
  
  export const Pricing = () => {
      const PricingCards = ({ tiers }: PricingCardsProps) => {
          return (
            <Container>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.title}
                    className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14 flex flex-col items-center justify-center"
                  >
                    <h3 className="text-2xl text-white md:text-4xl mb-6">
                      {tier.title}
                    </h3>
                    <div className="text-center mb-4 text-xl md:text-2xl text-primary-text">
                      ${tier.monthlyPrice} <span className="text-sm">Lifetime Access</span>
                    </div>
                    <div className="mt-2 text-left w-full max-w-[90%]">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-center mt-3">
                          <svg
                            className="w-5 h-5 mr-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-primary-text text-base md:text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className={`mt-8 px-8 py-3 rounded-full text-white text-base md:text-lg ${tier.popular ? 'bg-blue-500' : 'bg-gray-700'} hover:opacity-90 transition-opacity`}>
                      {tier.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </Container>
          );
        };
  
  
    return (
      <div className="text-center">
        <Features color="0,225,244" colorDark="31,49,64">
          <h2 className="text-gradient mb-11 translate-y-[40%] pt-[12rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl [.is-visible_&]:translate-y-0">
              Pricing
          </h2>
          <PricingCards tiers={pricingTiers} />
        </Features>
      </div>
    );
  }
  