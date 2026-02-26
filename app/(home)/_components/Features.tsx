import Container from "@/components/common/Container";
import FeatureCard from "./FeatureCard";
import {
  AutoCorrect,
  Dictionary,
  FullyCustomizable,
  LayoutViewer,
  Performance,
  PreferenceMemory,
} from "./Icons";

const FEATURES = [
  {
    id: "high-performance",
    title: "High Performance",
    description:
      "Built with speed and responsiveness in mind for a lag-free typing experience.",
    icon: <Performance />,
  },
  {
    id: "dictionary-based-suggestion",
    title: "Dictionary based suggestion",
    description:
      "Real-time phonetic prediction with correct Bangla spelling suggestions.",
    icon: <Dictionary />,
  },
  {
    id: "auto-correct",
    title: "Auto Correct",
    description:
      "Built with speed and responsiveness in mind for a lag-free typing experience.",
    icon: <AutoCorrect />,
  },
  {
    id: "preference-memory",
    title: "Preference Memory",
    description:
      "Remembers previously selected words and prioritizes them for faster typing.",
    icon: <PreferenceMemory />,
  },
  {
    id: "layout-viewer",
    title: "Layout Viewer",
    description:
      "Built-in image viewer for keyboard layouts so you never lose track of key positions.",
    icon: <LayoutViewer />,
  },
  {
    id: "fully-customizable",
    title: "Fully Customizable",
    description:
      "Configurable settings that stay out of your way while you type.",
    icon: <FullyCustomizable />,
  },
];

export default function Features() {
  return (
    <section className="bg-[#FBFDFC] pt-20 pb-32">
      <Container>
        <h2 className="mx-auto max-w-md text-center font-bold font-bricolage-grotesque text-4xl">
          Everything You Need to Type Bangla
        </h2>
        <div className="grid grid-cols-3 gap-6 pt-16">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
