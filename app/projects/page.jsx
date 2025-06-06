"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/đội ngũ giảng viên.png",
    category: "Team Giáo viên cộng sự",
    name: "Đội ngũ giảng viên chuyên nghiệp",
    description:
      "Quy tụ những giáo viên giỏi và giàu kinh nghiệm, giúp học viên đạt kết quả tốt nhất.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/hệ thống cố vấn.png",
    category: "Team Giáo viên cộng sự",
    name: "Hệ thống cố vấn học tập",
    description:
      "Hỗ trợ học viên trong suốt quá trình học, giải đáp thắc mắc và định hướng lộ trình phù hợp.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/giáo trình cập nhật liên tục.png",
    category: "Giáo án khoá học",
    name: "Giáo trình cập nhật liên tục",
    description:
      "Nội dung giảng dạy được biên soạn bài bản, cập nhật theo xu hướng mới nhất.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/bài giảng sinh động và thực tế.png",
    category: "Giáo án khoá học",
    name: "Bài giảng sinh động & thực tế",
    description:
      "Học qua tình huống thực tế, giúp học viên áp dụng kiến thức vào cuộc sống ngay lập tức.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/lộ trình cá nhân hóa.png",
    category: "Lộ trình chi tiết",
    name: "Lộ trình cá nhân hóa",
    description:
      "Thiết kế lộ trình học riêng biệt cho từng học viên, đảm bảo tiến bộ nhanh nhất.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/phương pháp học tập hiệu quả.png",
    category: "Lộ trình chi tiết",
    name: "Phương pháp học hiệu quả",
    description:
      "Kết hợp giảng dạy hiện đại với thực hành liên tục giúp học viên đạt mục tiêu nhanh chóng.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/hỗ trợ học viên liên tục.png",
    category: "Support Học Viên 24/7",
    name: "Hỗ trợ học viên liên tục",
    description:
      "Giải đáp thắc mắc, hỗ trợ ôn tập và luyện tập, đảm bảo học viên không bị gián đoạn việc học.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/cộng đồng học viên năng động.png",
    category: "Support Học Viên 24/7",
    name: "Cộng đồng học viên năng động",
    description:
      "Tham gia các nhóm học tập, giao lưu và thực hành với bạn bè để nâng cao kỹ năng.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
  {
    image: "/work/tài nguyên học phong phú.png",
    category: "Support Học Viên 24/7",
    name: "Tài nguyên học tập phong phú",
    description:
      "Kho tài liệu đa dạng từ bài giảng, bài tập đến đề thi thử giúp học viên tự luyện tập hiệu quả.",
    link: "https://www.facebook.com/ieltsgiaotiepcrown",
    github: "https://www.facebook.com/ieltsgiaotiepcrown",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Thành Tựu của mình
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full flex flex-wrap justify-center gap-4 mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
