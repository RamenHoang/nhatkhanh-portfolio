"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "education",
    name: "IELTS & Giao Tiếp Crown",
    description:
      "Dự án cá nhân đầu tiên, tập trung vào các khoá học IELTS và Giao tiếp với học phí tối ưu nhất cho học viên.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown ",
    github: "https://www.facebook.com/ieltsgiaotiepcrown ",
  },
  {
    image: "/work/4.png",
    category: "education",
    name: "Ngoại Ngữ Shinee",
    description:
      "Nối tiếp thành công của IELTS Crown, Ngoại Ngữ Shinee tập trung vào các khoá học cá nhân hoá cho học viên.",
    link: "https://ielts.shinee.vn/ ",
    github: "https://ielts.shinee.vn/ ",
  },
  {
    image: "/work/2.png",
    category: "community",
    name: "Topgiaovien",
    description:
      "Cộng đồng giáo viên tài năng, kết nối học viên với giáo viên, giúp học viên tự chọn giáo viên phù hợp nhất.",
    link: "https://topgiaovien.vn/ ",
    github: "https://topgiaovien.vn/ ",
  },
  {
    image: "/work/1.png",
    category: "community",
    name: "BeShine English Speaking",
    description:
      "Câu lạc bộ nói tiếng Anh dành cho những ai muốn cải thiện kỹ năng giao tiếp, thực hành với người thật, tình huống thật.",
    link: "https://fb.me/e/6R2rluw8a",
    github: "https://fb.me/e/6R2rluw8a",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Dự Án Nổi Bật</h2>
          <p className="subtitle mb-8">
            Khám phá những dự án giáo dục và cộng đồng ấn tượng nhất!
          </p>
          <Link href="/projects">
            <Button>Tất Cả</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
