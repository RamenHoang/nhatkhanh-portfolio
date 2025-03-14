import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Hãy để tấm bằng Ielts là bệ phóng giúp bạn tiến xa và đạt nhiều
            thành tựu trong cuộc sống hơn nữa
          </h2>
          <Link href="/contact">
            <Button>Liên hệ ngay</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
