import Image from "next/image";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Option from "./InfoCard";

const CAPABILITIES = [
  {
    id: "avro-phonetic",
    label: "Avro Phonetic",
    description:
      "Preview window with smart suggestions for fluid phonetic typing.",
  },
  {
    id: "fixed-layout-support",
    label: "Fixed Layout Support",
    description: "Probhat, Munir Optima, National (Jatiya) layouts built-in.",
  },
  {
    id: "dictionary-for-fixed-layouts",
    label: "Dictionary for Fixed Layouts",
    description:
      "Intelligent suggestions even when using non-phonetic layouts.",
  },
  {
    id: "traditional-kar-joining",
    label: "Traditional Kar Joining",
    description:
      "Supports beautiful literary Bangla ligatures and traditional typography.",
  },
  {
    id: "configuration-tool",
    label: "Configuration Tool",
    description: "Dedicated GUI tool for easy, intuitive customization.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20">
      <Container>
        <Flex className="justify-between">
          <div>
            <Image
              src="https://placehold.co/500x500"
              alt="placeholder"
              height={500}
              width={500}
              loading="eager"
            />
          </div>
          <Flex className="flex-col items-start gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold font-bricolage-grotesque text-4xl">
                Core Typing Capabilities
              </h2>
              <p className="max-w-lg text-[#5D5D5D] text-xl leading-7">
                From phonetic to fixed layouts, OpenBangla covers every way you
                type Bangla.
              </p>
            </div>
            <div className="grid gap-2">
              {CAPABILITIES.map((capability) => (
                <Option
                  key={capability.id}
                  label={capability.label}
                  description={capability.description}
                />
              ))}
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}
