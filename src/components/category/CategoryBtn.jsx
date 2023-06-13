import Image from "next/image";

export default function CategoryBtn({ id, ctgName, ctgImg }) {
  return (
    <div
      key={id}
      className="min-w-max flex flex-col gap-1 md:gap-2 items-center border-b-2 border-transparent active:border-black pb-2 lg:pb-4 cursor-pointer opacity-70 hover:opacity-100"
    >
      <Image
        src={ctgImg}
        alt={ctgName}
        height={25}
        width={25}
        loading="lazy"
        className=""
      />
      <p className="text-xs md:text-sm line-clamp-1">{ctgName}</p>
    </div>
  );
}
