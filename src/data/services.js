import { ReactComponent as UiCreativeDesignIcon } from "../lib/icons/Curve.svg";
import { ReactComponent as DesktopApplicationIcon } from "../lib/icons/InformationService.svg";
import { ReactComponent as WebDevelopmentIcon } from "../lib/icons/Monitor.svg";
import { ReactComponent as WireframingServiceIcon } from "../lib/icons/WebProgramming.svg";
import { ReactComponent as StrategyIcon } from "../lib/icons/Strategy.svg";
import { ReactComponent as TranslationIcon } from "../lib/icons/Translation.svg";

export const services = [
  {
    id: 1,
    bgColor: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white",
    servIcon: <UiCreativeDesignIcon className="h-[4.25rem] w-[4.25rem] fill-white"></UiCreativeDesignIcon>,
    servTitle: "UI/UX Creative Design",
    servDesc: "Design creative figma, special brands, Integrate idea and brand, results.",
  },
  {
    id: 2,
    bgColor: "bg-[#f0e1d4]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WebDevelopmentIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WebDevelopmentIcon>,
    servTitle: "Full Stack Development",
    servDesc: "Create full stack projects with JS, PHP, Python frameworks and maintenance successfully and finally",
  },
  {
    id: 3,
    bgColor: "bg-[#d4e4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WireframingServiceIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WireframingServiceIcon>,
    servTitle: "Mobile App Development",
    servDesc: "Design, develop and delopy famous apps including Android and iOS with Kotlin, Java, Flutter and so on.",
  },
  {
    id: 4,
    bgColor: "bg-gray",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <DesktopApplicationIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></DesktopApplicationIcon>,
    servTitle: "Blockchain Development",
    servDesc: "Development chain, minting tokens, Bot dev with smart contract and NFT and so on",
  },
  {
    id: 5,
    bgColor: "bg-[#f0fbfe]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <StrategyIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></StrategyIcon>,
    servTitle: "Strategy & Research",
    servDesc: "Through Market strategy and researching, help to increase of business and success.",
  },
  {
    id: 6,
    bgColor: "bg-[#fef4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <TranslationIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></TranslationIcon>,
    servTitle: "Mern Stack Development",
    servDesc: "Face on React.js, Next.js, Nuext.js Node.js, Laravel, Wordpress and Express.js and MongoDB, MySQL.",
  },
  {
    id: 7,
    bgColor: "bg-[#f0e1d4]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WebDevelopmentIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WebDevelopmentIcon>,
    servTitle: "Integration",
    servDesc: "Create and Integrate App and Backend through RESTfull API.",
  },
  {
    id: 8,
    bgColor: "bg-[#d4e4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WireframingServiceIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WireframingServiceIcon>,
    servTitle: "Research priciple of new chain",
    servDesc: "Coming soon...",
  },
];
