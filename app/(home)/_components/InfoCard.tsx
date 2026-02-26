import Flex from "@/components/common/Flex";

interface InfoCardProps {
  label: string;
  description: string;
}

export default function InfoCard({ label, description }: InfoCardProps) {
  return (
    <Flex className="flex-col items-baseline gap-2 rounded-xl border border-[#E5E5E5] bg-white px-6 py-4 shadow-sm">
      <h3 className="font-bold text-xl">{label}</h3>
      <p className="text-[#636363]">{description}</p>
    </Flex>
  );
}
