import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Flex from "@/components/common/Flex";

interface BlogCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogCard({
  imgSrc,
  imgAlt,
  title,
  date,
  description,
}: BlogCardProps) {
  return (
    <Flex className="justify-between gap-4 rounded-xl bg-white p-5 shadow-sm border border-[#E5E5E5]">
      <div className="shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={160}
          height={90}
          loading="eager"
        />
      </div>

      <div className="min-w-0 flex-1">
        <Flex className="items-start justify-between">
          <div>
            <h3 className="font-baloo-da-2 font-extrabold">{title}</h3>
            <Flex className="items-center gap-2 text-[#8F8F8F]">
              <Calendar size={14} />
              <p className="text-xs">{date}</p>
            </Flex>
          </div>
          <ArrowRight size={16} className="mt-1" />
        </Flex>
        <p className="mt-2 line-clamp-2 text-[#636363] text-sm">
          {description}
        </p>
      </div>
    </Flex>
  );
}
