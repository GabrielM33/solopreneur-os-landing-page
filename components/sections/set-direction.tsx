"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Plan your growth
            <br />
            with confidence
          </>
        }
        image="/roadmap.webp"
        imageSize="large"
        text="Transform your business vision into actionable plans. Track progress, measure results, and adjust your strategy with data-driven insights."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Strategic planning",
            text: "Break down your yearly goals into quarterly action plans",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Growth tracking",
            text: "Monitor key metrics and business health automatically",
          },
          {
            icon: WorkflowsIcon,
            title: "Business roadmaps",
            text: "Visualize your journey from solopreneur to CEO",
          },
          {
            icon: CustomViewsIcon,
            title: "Progress dashboard",
            text: "See your business growth in real-time metrics",
          },
          {
            icon: DiscussionIcon,
            title: "Performance insights",
            text: "Track revenue, time saved, and operational efficiency",
          },
          {
            icon: IssuesIcon,
            title: "Smart notifications",
            text: "Get alerted when key metrics need your attention",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-updates.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Business health updates",
            text: "Get weekly insights on your business performance and growth trajectory",
          },
          {
            image: "/card-roadmaps.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Focus on growth",
            text: "See all your business metrics in one view to identify opportunities and optimize operations",
          },
        ]}
      />
    </Features>
  );
};
