import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col justify-center items-center mt-24">
        <Image
          width={300}
          height={100}
          src={"/google.png"}
          alt="Google image"
          priority
          style={{
            width: 'auto',
            height: 'auto'
          }}
        />

        <HomeSearch />
      </div>
    </>
  )
}
