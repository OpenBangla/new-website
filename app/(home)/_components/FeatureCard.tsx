import Flex from "@/components/common/Flex";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Flex className="flex-col gap-6 rounded-3xl border border-[#06402B]/8 bg-white py-8 shadow-sm">
      <div>{icon}</div>
      <Flex className="max-w-[255px] flex-col items-center gap-5 text-center text-lg">
        <h3 className="font-bold text-[#202020] leading-8">{title}</h3>
        <p className="text-[#5D5D5D] leading-6">{description}</p>
      </Flex>
    </Flex>
  );
}
