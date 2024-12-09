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

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Workflow automation
            <br />
            that works for you
          </>
        }
        image="/issues.webp"
        text="Manage tasks effortlessly and watch your business run smoothly."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Projects & subtasks",
            text: "Break complex business operations into manageable workflows",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Smart automation",
            text: "Auto-complete routine tasks and archive completed work",
          },
          {
            icon: WorkflowsIcon,
            title: "Pre-built workflows",
            text: "23 battle-tested templates for common business processes",
          },
          {
            icon: CustomViewsIcon,
            title: "Custom dashboards",
            text: "See exactly what needs your attention right now",
          },
          {
            icon: DiscussionIcon,
            title: "Client management",
            text: "Handle client communication without losing context",
          },
          {
            icon: IssuesIcon,
            title: "Process templates",
            text: "Turn your best workflows into repeatable systems",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Your command center",
            text: "Switch between task lists and workflow views to manage your business from any angle",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Built for you",
            text: "Quickly filter and organize your workflows to focus on what matters most to your business",
          },
        ]}
      />
    </Features>
  );
};
