import Flex from "@/components/common/Flex";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Flex className="shadow-sm border border-[#06402B]/8 py-8 rounded-3xl bg-white flex-col gap-6">
      <div>{icon}</div>
      <Flex className="flex-col items-center text-center text-lg max-w-[255px] gap-5">
        <h3 className="font-bold leading-8 text-[#202020]">{title}</h3>
        <p className="text-[#5D5D5D] leading-6">{description}</p>
      </Flex>
    </Flex>
  );
}
