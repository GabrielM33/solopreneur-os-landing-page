"use client";

import { Button } from "./button";

export const CTA = () => {
  return (
    <div className="flex justify-center">
        <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="https://buy.stripe.com/dR6bMFdYp3b6aJiaEF"
      variant="primary"
      size="large"
    >
      <span>Get Instant Access </span>
    </Button>
    </div>
  );
};
