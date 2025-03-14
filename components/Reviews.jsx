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
    name: "Thảo Như",
    job: "Sinh viên",
    review:
      "Dạ em cảm ơn chị, tài liệu đầy đủ dễ nhìn dễ đọc, bài giảng dễ hiểu và thực tế!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Thanh Huyền",
    job: "Sinh viên",
    review:
      "Chị giảng rất nhiệt tình, sửa bài tích cực, giúp em hiểu bài nhanh hơn!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Nguyệt My",
    job: "Học sinh cấp 3",
    review:
      "Em cảm ơn chị rất nhiều, khóa học giúp em cải thiện đáng kể kỹ năng!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Anh Huy",
    job: "Người đi làm",
    review:
      "Ngoài sức mong đợi của em luôn chị, các bạn tutor sửa bài rất kỹ, chấm chữa thoải mái!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Gia Linh",
    job: "Sinh viên",
    review:
      "Khóa học rất hay, chị giảng năng suất, truyền đạt dễ hiểu, sửa bài tích cực!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Khải Linh",
    job: "Sinh viên",
    review:
      "Em cảm ơn chị, bài giảng dễ hiểu, lớp học thân thiện, hỗ trợ tận tình!",
  },
  {
    avatar: "/reviews/avatar-7.png",
    name: "Minh Quân",
    job: "Sinh viên",
    review:
      "Tài liệu đầy đủ, bài tập thực hành giúp nhớ bài lâu hơn, giảng viên rất tận tâm!",
  },
  {
    avatar: "/reviews/avatar-8.png",
    name: "Khánh Ninh",
    job: "Sinh viên",
    review:
      "Mình tham gia cả khóa Newbie và Advance, giảng viên giảng logic, dễ hiểu!",
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
