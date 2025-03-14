import { Outfit } from "next/font/google";
import "./globals.css";

// compoenents
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Nhật Khanh - Giáo viên IELTS & Giao tiếp | 5+ năm kinh nghiệm",
  description:
    "Nhật Khanh - Giáo viên IELTS & Giao tiếp với hơn 5 năm kinh nghiệm. Đào tạo cá nhân hóa, giúp học viên đạt band điểm cao và tự tin giao tiếp. Đăng ký ngay!",
  keywords: [
    "giáo viên IELTS",
    "luyện thi IELTS",
    "học giao tiếp tiếng Anh",
    "khóa học IELTS",
    "giáo viên IELTS giỏi",
    "cách học IELTS hiệu quả",
    "học IELTS từ con số 0",
  ],
  author: "Nhật Khanh",
  openGraph: {
    title: "Nhật Khanh - Giáo viên IELTS & Giao tiếp | 5+ năm kinh nghiệm",
    description:
      "Nhật Khanh - Giáo viên IELTS & Giao tiếp với hơn 5 năm kinh nghiệm. Đào tạo cá nhân hóa, giúp học viên đạt band điểm cao và tự tin giao tiếp. Đăng ký ngay!",
    url: "https://nhatkhanhielts.com",
    type: "website",
    image: "/thumbnail.jpg", // Thay bằng ảnh thật
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
