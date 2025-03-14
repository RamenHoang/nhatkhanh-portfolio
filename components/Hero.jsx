import Link from "next/link";
import { Button } from "./ui/button";
import { PhoneCall, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Language Teacher & Edupreneur
            </div>
            <h1 className="h1 mb-4">Xin chào, mình là Nhật Khanh</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Bằng sự tận tâm và chuyên nghiệp, mình đã giúp hàng ngàn học viên
              đạt được chứng chỉ IELTS quốc tế và tự tin giao tiếp thành công.
              Mình luôn mang đến năng lượng tích cực và sự đam mê trong mỗi buổi
              học, giúp học viên không chỉ học tốt mà còn yêu thích quá trình
              học tiếng Anh.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="https://www.facebook.com/nhat.khanh.nguyen.lee/">
                <Button className="gap-x-2">
                  FaceBook <Send size={18} />
                </Button>
              </Link>
              <Link href="https://zalo.me/0898192633">
                <Button variant="secondary" className="gap-x-2">
                  ZaLo
                  <PhoneCall size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={5}
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={500}
              endCountText="+"
              badgeText="Học viên đạt aim"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[65%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={5}
              endCountText="k"
              badgeText="Học viên thích"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
