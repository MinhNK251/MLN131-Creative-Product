"use client";

import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    id: "welcome",
    label: "Giới thiệu",
    hrefs: [
      "#welcome-header",
    ],
  },
  {
    id: "definition",
    label: "Khái niệm",
    hrefs: ["#definition"],
  },
  {
    id: "mission",
    label: "Sứ mệnh lịch sử",
    hrefs: ["#mission"],
  },
  {
    id: "progress",
    label: "Tiến bộ",
    hrefs: ["#progress"],
  },
  {
    id: "opportunities-challenges",
    label: "Cơ hội và thách thức",
    hrefs: ["#opportunities-challenges"],
  },
  // {
  //   id: "conclusion",
  //   label: "Kết luận",
  //   hrefs: ["#conclusion"],
  // },
];

export function SiteHeader() {
  const activeId = useScrollSpy(
    navigation.flatMap((item) => item.hrefs) // Gộp tất cả `href` thành một mảng duy nhất
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const isMobile = window.innerWidth < 768; // Kiểm tra nếu đang ở mobile
      const headerHeight = isMobile ? 370 : 64; // Tăng offset cho mobile
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight + 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Đóng menu sau khi click
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-sm">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between md:justify-around">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-green-500"
            >
              <div className="h-10 w-10 rounded-full bg-navy-blue overflow-hidden">
                <Image
                  className="h-full w-full object-cover"
                  width={40}
                  height={40}
                  alt="Logo"
                  src="/assets/image/logo.jpg"
                />
              </div>
              <span className="font-bold  sm:inline">MLN131 - SE1735 - Team 1</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.hrefs[0]}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                  activeId && item.hrefs.includes(`#${activeId}`)
                    ? "bg-[#2C3E50] text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.hrefs[0]);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.hrefs[0]}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    activeId && item.hrefs.includes(`#${activeId}`)
                      ? "bg-[#2C3E50] text-white"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.hrefs[0]);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
