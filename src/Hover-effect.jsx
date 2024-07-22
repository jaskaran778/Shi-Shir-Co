import React from 'react';
import HoverEffect from "./components/ui/Card-hover-effect"

export  default function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-16">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Direct Taxation",
    description: "Minimize tax stress, maximize savings. Our CAs handle complex personal & corporate income taxes, ensuring compliance while legally reducing your tax burden.",
    link: "#",
    linkText :"Contact Now"
  },
  {
    title: "Business Advisory",
    description: "Grow your business with expert guidance. Our CAs provide strategic advice on finances, operations, and growth. Make informed decisions & achieve your goals.",
    link: "#",
    linkText :"Contact Now"
  },
  {
    title: "GST Filing",
    description: "Streamline your GST filing with our expert CAs. Our CAs handle everything from returns to record-keeping, with accuracy and minimizing penalties. ",
    link: "#",
    linkText :"Contact Now"
  },
  {
    title: "Corporate Advisory",
    description: "Navigate complex corporate matters with confidence. Our CAs offer comprehensive advisory services for mergers, acquisitions structuring & legal compliance.",
    link: "#",
    linkText :"Contact Now"
  },
  {
    title: "Consulting",
    description: "Unlock your business potential with our expert CA consulting. We offer tailored solutions for financial strategies, risk management, and operational efficiency.",
    link: "#",
    linkText :"Contact Now"
  },
  {
    title: "Audit & Assurance",
    description: "Gain trust and transparency with our CA-led audits & assurance. We provide independent verification of your financial health, boosting investor confidence and mitigating risks.",
    link: "#",
    linkText :"Contact Now"
  },
];
