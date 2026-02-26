import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import DownloadCard from "./DownloadCard";
import { Linux, MacOS, Windows } from "./Icons";

const GET_OBK = [
  {
    id: "linux",
    title: "Linux",
    description: "Full Windows 10/11 compatibility",
    icon: <Linux />,
  },

  {
    id: "mac",
    title: "MacOS",
    description: "Runs smoothly on Apple Silicon & Intel",
    icon: <MacOS />,
  },
  {
    id: "windows",
    title: "Windows",
    description: "Native support for all major distributions",
    icon: <Windows />,
  },
];

export function GetObk() {
  return (
    <section className="bg-[#FBFDFC] pt-20 pb-32">
      <Container>
        <Flex className="flex-col gap-2">
          <h2 className="font-bold font-bricolage-grotesque text-4xl">
            Get OpenBangla Keyboard
          </h2>
          <p className="text-[#5D5D5D] text-xl">
            Available on all major platforms. Choose your OS to get started.
          </p>
        </Flex>
        <div className="grid grid-cols-3 gap-6 pt-16">
          {GET_OBK.map((item) => (
            <DownloadCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
