import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/banner-home.png"
        width={50}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Banner home"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
