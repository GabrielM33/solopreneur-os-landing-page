"use client";

import { Features } from "@/components/Features";
import { Container } from "../Container";
import classNames from "classnames";

interface PricingFeature {
  title: string;
  text: string;
  image: string;
  imageClassName: string;
}

interface PricingCardsProps {
  features: PricingFeature[];
}

export const Pricing = () => {
    const PricingCards = ({ features }: PricingCardsProps) => {
        return (
          <Container>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              {features.map(({ title, text, image, imageClassName }) => (
                <div
                  key={title}
                  className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
                >
                  <h3 className="mb-2 text-2xl text-white">{title}</h3>
                  <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
                  <img
                    className={classNames("absolute max-w-none", imageClassName)}
                    src={image}
                  />
                </div>
              ))}
            </div>
          </Container>
        );
      };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12">
        Simple Pricing, Powerful Results
      </h2>
      <Features color="0,225,244" colorDark="31,49,64">
        <PricingCards
          features={[
            {
              image: "",
              imageClassName: "",
              title: "Essential Plan - $37",
              text: "Perfect for getting started\n\n" +
                    "Complete operating system for solopreneurs\n" +
                    "23+ ready-to-use workflow templates\n" +
                    "Save 10+ hours every week\n" +
                    "Free 1:1 onboarding call\n" +
                    "Join our community of founders\n" +
                    "100% money-back guarantee\n\n" +
                    "[ Get Started → ]",
            },
            {
              image: "",
              imageClassName: "",
              title: "Pro Automation - $47",
              text: "Best value for serious founders\n\n" +
                    "Everything in Essential, plus:\n" +
                    "Powerful automation triggers\n" +
                    "AI-powered task automation (save 20+ hours/week)\n" +
                    "Premium SOPs and templates\n" +
                    "VIP support & lifetime updates\n" +
                    "Private mastermind access\n\n" +
                    "[ Get Pro Access → ]",
            },
          ]}
        />
      </Features>
    </div>
  );
}
