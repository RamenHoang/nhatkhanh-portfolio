"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Gia Nghi",
    job: "Foundation Student",
    review:
      "Khóa Foundation đã giúp mình nắm vững kiến thức cơ bản, rất hữu ích!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Hương Giang",
    job: "Advance Student",
    review:
      "Mình đã cải thiện đáng kể kỹ năng với khóa Advance, giảng viên rất tận tâm!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Minh Ngọc",
    job: "Newbie Student",
    review:
      "Lớp học thân thiện, dễ hiểu, rất phù hợp với người mới bắt đầu như mình.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Minh Thư",
    job: "Newbie Student",
    review:
      "Khóa học giúp mình tự tin hơn khi giao tiếp, bài giảng dễ hiểu và thực tế.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Minh Tuấn",
    job: "Newbie Student",
    review:
      "Giảng viên rất nhiệt tình, mình đã học được nhiều kiến thức hữu ích!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Nguyễn Hoa",
    job: "Newbie Student",
    review:
      "Mình rất thích cách giảng dạy, bài tập thực hành giúp nhớ bài lâu hơn.",
  },
  {
    avatar: "/reviews/avatar-7.png",
    name: "Nguyễn Ninh",
    job: "Newbie & Advance Student",
    review: "Mình tham gia cả hai khóa Newbie và Advance, rất đáng đồng tiền!",
  },
  {
    avatar: "/reviews/avatar-8.png",
    name: "Trường Giang",
    job: "Advance Student",
    review:
      "Chương trình học logic, giúp mình cải thiện rõ rệt khả năng tiếng Anh.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
