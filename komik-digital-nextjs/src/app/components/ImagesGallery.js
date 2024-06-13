import Image from "next/image";

export default function ImagesGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[1/2]"
        src="/img/1.jpg"
        width="350"
        height="350"
      ></Image>
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[2/3]"
        src="/img/2.jpg"
        width="300"
        height="300"
      ></Image>
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[3/4]"
        src="/img/3.jpg"
        width="300"
        height="300"
      ></Image>
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[1/2]"
        src="/img/4.jpg"
        width="300"
        height="300"
      ></Image>
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[2/3]"
        src="/img/5.jpg"
        width="300"
        height="300"
      ></Image>
      <Image
        className="bg-white grid-rows-[1/2] grid-cols-[3/4]"
        src="/img/6.jpg"
        width="300"
        height="300"
      ></Image>
    </div>
  );
}
