import Button from "@/components/common/Button";
import Flex from "@/components/common/Flex";

interface DownloadCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function DownloadCard({
  title,
  description,
  icon,
}: DownloadCardProps) {
  return (
    <Flex className="flex-col gap-5 rounded-3xl border border-[#E5E5E5] bg-white py-12 shadow-sm">
      <div className="">{icon}</div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="max-w-[255px] text-center text-[#5D5D5D] text-lg">
        {description}
      </p>
      <Button className="font-semibold">Download</Button>
    </Flex>
  );
}
