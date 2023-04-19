import Image from "next/image";

function Item({
  url,
  title,
  date,
  image,
  author,
}: {
  url?: string;
  title: string;
  date: string;
  author: string;
  image: string;
}) {
  return (
    <div className="mb-5 overflow-hidden font-sans text-sm">
      <a href={url} target="_blank" rel="noreferrer" className="group">
        <div className="relative overflow-hidden shadow-sm rounded-xl bg-slate-100">
          <Image
            className="transition-all xl:group-hover:blur-sm xl:group-hover:scale-105"
            src={image}
            alt={title}
            width={1800}
            height={1200}
          ></Image>
        </div>
      </a>
      <div className="flex mt-4">
        <div className="font-bold">{title}</div>
        <div className="ml-auto text-sm opacity-70">
          {date} by {author}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Sci-Fi",
    date: "Jul 13, 2022",
    author: "deadrabbit",
    url: "https://designby.deadrabbit.online",
    image: "/home/sci-fi.png",
  },
  {
    title: "To kill a rabbit",
    date: "Jul 13, 2022",
    author: "deadrabbit",
    url: "https://to-kill-a-rabbit.deadrabbit.online",
    image: "/home/to-kill-a-rabbit.png",
  },
  {
    title: "Typography Vol.03",
    date: "Jul 13, 2022",
    author: "deadrabbit",
    url: "https://designby.deadrabbit.online",
    image: "/home/typography-03.png",
  },
  {
    title: "Generative art",
    date: "Jul 13, 2022",
    author: "deadrabbit",
    url: "",
    image: "/home/generative-art.png",
  },
];

export default function Index() {
  return (
    <div className=" text-[#262523] p-6  xl:p-8 2xl:p-10 min-h-screen selection:bg-black selection:text-white">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="">
            <div className="text-2xl">
              <span className="font-bold">DEADRABBIT</span>
            </div>
          </div>
          <div className="hidden ml-auto space-x-6 text-sm text-black/80 xl:inline-block">
            <a href="">twitter</a>
            <a href="">instagram</a>
            <a href="">bilibili</a>
            <a href="mailto:deadrabbbbit@gmail.com">deadrabbbbit@gmail.com</a>
            <span>en</span>
          </div>
        </div>

        <div className="my-20 md:my-24 xl:my-40 2xl:my-56 text-6xl font-bold uppercase md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px]">
          I create impressive projects
        </div>

        <div className="">
          <div className="flex items-end">
            <div className="text-4xl font-bold">WORK</div>
            <div className="ml-auto">
              <span className="font-bold"> 4</span> items
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
            {data.map((item, index) => {
              return (
                <Item
                  key={index}
                  title={item.title}
                  image={item.image}
                  url={item.url}
                  author={item.author}
                  date={item.date}
                ></Item>
              );
            })}
          </div>
        </div>

        <footer className="mt-10 md:mt-20">
          <div className="grid grid-cols-1 text-sm border-t border-black sm:grid-cols-4">
            <div>
              <div className="mt-5 font-bold">Services</div>
              <div className="mt-2 space-y-2 md:mt-10 md:space-y-5">
                <div>Frontend</div>
                <div>Backend</div>
                <div>fullstack</div>
                <div>UI design</div>
                <div>Data analysis</div>
              </div>
            </div>

            <div>
              <div className="mt-5 font-bold">Tech Stack</div>
              <div className="mt-2 space-y-2 md:mt-10 md:space-y-5">
                <div>React</div>
                <div>Vue</div>
                <div>Nextjs</div>
                <div>Threejs</div>
                <div>GSAP</div>
              </div>
            </div>

            <div>
              <div className="mt-5 font-bold">Social Media</div>
              <div className="mt-2 space-y-2 md:mt-10 md:space-y-5">
                <div>Github</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>Bilibili</div>
              </div>
            </div>

            <div>
              <div className="mt-5 font-bold">Get In Touch</div>
              <div className="mt-2 space-y-2 md:mt-10 md:space-y-5">
                <a href="mailto:deadrabbbbit@gmail.com">
                  Deadrabbbbit@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm">© deadrabbit 2023</div>
        </footer>
      </div>
    </div>
  );
}
