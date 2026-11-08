import { useEffect, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "calendar"
  | "call"
  | "car"
  | "check"
  | "chevron"
  | "clock"
  | "filter"
  | "gear"
  | "location"
  | "mail"
  | "menu"
  | "message"
  | "oil"
  | "shield"
  | "spark"
  | "store"
  | "x";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: <path d="m14 7-5 5 5 5M9 12h10M5 5v14" />,
  calendar: (
    <>
      <path d="M8 2v4M16 2v4M3 9h18" />
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
    </>
  ),
  call: (
    <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z" />
  ),
  car: (
    <>
      <path d="m5 17-2-2v-4l2-2 2-4h10l2 4 2 2v4l-2 2" />
      <path d="M7 17h10M6 13h.01M18 13h.01M5 9h14M6 17v2M18 17v2" />
    </>
  ),
  check: <path d="m20 6-11 11-5-5" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6h16M7 12h10M10 18h4" />
      <circle cx="8" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="12" cy="18" r="2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.09 14H3v-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.09V3h4v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.91 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 21 15Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  oil: (
    <>
      <path d="m8 3 8 8v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7l3-4Z" />
      <path d="M5 8h7M8 3v5M13 15h.01" />
      <path d="M19 8s2 2.2 2 3.5a2 2 0 0 1-4 0C17 10.2 19 8 19 8Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  spark: (
    <path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
  ),
  store: (
    <>
      <path d="M4 10v10h16V10M3 4h18l-1 6a3 3 0 0 1-4 1 3 3 0 0 1-4 0 3 3 0 0 1-4 0 3 3 0 0 1-4-1L3 4Z" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}

type SocialIconName = "instagram" | "rubika" | "telegram" | "whatsapp";

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "rubika") {
    return (
      <span
        aria-hidden="true"
        className="size-5 bg-current"
        style={{
          mask: "url('/icons/Rubika.svg') center / contain no-repeat",
          WebkitMask: "url('/icons/Rubika.svg') center / contain no-repeat",
        }}
      />
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      {name === "instagram" && (
        <>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </>
      )}
      {name === "telegram" && (
        <path d="M22.4 3.2 19 20.1c-.25 1.2-.95 1.5-1.92.94l-5.3-3.9-2.56 2.46c-.28.28-.52.52-1.06.52l.38-5.4 9.84-8.9c.43-.38-.1-.6-.67-.22L5.54 13.2.3 11.56c-1.14-.36-1.16-1.14.24-1.7L21.04 2c.95-.35 1.78.23 1.36 1.2Z" />
      )}
      {name === "whatsapp" && (
        <path d="M12 2a9.8 9.8 0 0 0-8.42 14.82L2.3 22l5.32-1.4A9.8 9.8 0 1 0 12 2Zm0 2a7.8 7.8 0 0 1 0 15.6 7.7 7.7 0 0 1-3.9-1.05l-.66-.39-2.56.67.69-2.49-.43-.69A7.8 7.8 0 0 1 12 4Zm-3.1 3.4c-.2 0-.52.08-.8.39-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.08 3.33 5.15 4.54 2.55 1 3.07.8 3.62.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.59-.36-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.68-.51Z" />
      )}
    </svg>
  );
}

const services = [
  {
    icon: "calendar" as IconName,
    number: "۰۱",
    title: "سرویس دوره‌ای خودرو",
    text: "بازبینی و سرویس کامل خودروهای ایرانی، خارجی و منطقه آزاد طبق کیلومتر و استاندارد سازنده.",
  },
  {
    icon: "gear" as IconName,
    number: "۰۲",
    title: "تعویض روغن گیربکس اتوماتیک",
    text: "تعویض کامل روغن گیربکس‌های AT، CVT و DCT با دستگاه‌های پیشرفته و روغن استاندارد.",
    featured: true,
  },
  {
    icon: "oil" as IconName,
    number: "۰۳",
    title: "تعویض روغن موتور و فیلتر",
    text: "انتخاب گرید مناسب، تعویض اصولی روغن موتور و انواع فیلتر با محصول اصل و قیمت شفاف.",
  },
];

const products = [
  { label: "روغن موتور", sub: "ایرانی و خارجی", icon: "oil" as IconName },
  { label: "روغن گیربکس", sub: "ATF، CVT و DCT", icon: "gear" as IconName },
  { label: "فیلترهای خودرو", sub: "روغن، هوا و کابین", icon: "filter" as IconName },
  { label: "ضدیخ و مکمل", sub: "محافظت چهار فصل", icon: "spark" as IconName },
];

const faqs = [
  {
    q: "تعویض روغن گیربکس اتوماتیک با دستگاه چقدر زمان می‌برد؟",
    a: "بسته به مدل خودرو و نوع گیربکس معمولاً بین ۴۵ تا ۹۰ دقیقه زمان نیاز دارد. قبل از شروع، وضعیت روغن و اتصالات توسط کارشناس بررسی می‌شود.",
  },
  {
    q: "چطور زمان سرویس بعدی خودرو را فراموش نکنیم؟",
    a: "پس از ثبت مشخصات خودرو، سیستم هوشمند آفاقی بر اساس کیلومتر و سوابق سرویس، موعد بعدی را برای شما یادآوری می‌کند.",
  },
  {
    q: "آیا خودروهای خارجی و منطقه آزاد هم پذیرش می‌شوند؟",
    a: "بله، سرویس دوره‌ای انواع خودروهای ایرانی، خارجی و منطقه آزاد با روانکار و فیلتر متناسب با مشخصات سازنده انجام می‌شود.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1791425318454-bd945c35c8af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800";
const engineImage = "/img/whyUs.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (menuOpen || currentY < 100) {
        setHeaderVisible(true);
      } else if (currentY > lastScrollY.current) {
        setHeaderVisible(false);
      } else if (currentY < lastScrollY.current) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#0B0606] text-[#F6F3F8]">
      <header
        className={`sticky top-0 z-50 transition-[transform,opacity] duration-300 ease-in-out ${
          headerVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="bg-[#0B0606] text-white">
          <div className="container-shell flex min-h-10 items-center justify-between gap-4 py-2 text-[11px] sm:text-xs">
            <p className="flex items-center gap-2 text-white/70">
              <Icon name="clock" size={15} />
              شنبه تا پنجشنبه، ۸ صبح تا ۹ شب
            </p>
            <div className="flex items-center gap-4">
              <a
                className="hidden items-center gap-2 text-white/70 transition hover:text-white sm:flex"
                href="tel:09144413979"
              >
                <Icon name="call" size={15} />
                مشاوره رایگان
              </a>

              <a
                className="hidden items-center gap-2 text-white/70 transition hover:text-white sm:flex"
                href="tel:04433821430"
              >
                <Icon name="call" size={15} />
                رزرو نوبت سرویس
              </a>


              <a
                className="flex items-center gap-2 text-white/70 transition hover:text-white"
                href="https://balad.ir/p/%25D8%25B3%25D9%2588%25D9%25BE%25D8%25B1-%25D8%25B3%25D8%25B1%25D9%2588%25DB%258C%25D8%25B3-%25D8%25A2%25D9%2581%25D8%25A7%25D9%2582%25DB%258C-uromia_car-servicing-5k29DGccAyMJzN#15/37.56043/45.04746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="location" size={15} />
                آدرس ما در نقشه
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-white/8 bg-[#1F150A]">
          <div className="container-shell flex h-[78px] items-center justify-between gap-6">
            <a
              className="group order-last flex shrink-0 items-center gap-3 lg:order-first"
              href="#top"
              aria-label="سوپر سرویس آفاقی"
            >
              <span className="grid size-12 place-items-center transition group-hover:rotate-3">
                <img
                  src="/icons/logo.svg"
                  alt="سوپر سرویس آفاقی"
                  className="h-[100 px] w-[100 px] object-contain"
                />
              </span>
              <span>
                <strong className="block text-lg font-black leading-5">سوپر سرویس آفاقی</strong>
                <small className="text-[10px] font-bold tracking-[.16em] text-white/45">
                  AFAGI SUPER SERVICE
                </small>
              </span>
            </a>

            <nav
              aria-label="ناوبری اصلی"
              className="hidden items-center gap-7 text-[13px] font-bold lg:flex"
            >
              <a className="nav-link active" href="#top">
                صفحه اصلی
              </a>
              <a className="nav-link" href="#services">
                خدمات
              </a>
              <a className="nav-link" href="#products">
                محصولات
              </a>
              <a className="nav-link" href="#why-us">
                چرا آفاقی؟
              </a>
              <a className="nav-link" href="#guides">
                راهنمای خودرو
              </a>
              <a className="nav-link" href="#contact">
                تماس با ما
              </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="text-left leading-tight" dir="ltr">
                <span className="block text-[10px] text-white/45">مشاوره و پاسخگویی</span>
                <a className="font-black tracking-wide" href="tel:+989144413979">
                  ۰۹۱۴ ۴۴۱ ۳۹۷۹
                </a>
              </div>
              <a
                className="grid size-11 place-items-center rounded-full bg-[#1F150A] text-[#DE120C] transition hover:bg-[#DE120C] hover:text-white"
                href="tel:+989144413979"
                aria-label="تماس با سوپر سرویس آفاقی"
              >
                <Icon name="call" size={20} />
              </a>
            </div>

            <button
              className="order-first grid size-11 place-items-center rounded-lg border border-white/10 lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="باز کردن منو"
              aria-expanded={menuOpen}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#1F150A]/55 transition-opacity lg:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[70] w-[86%] max-w-sm bg-[#1F150A] p-6 shadow-2xl transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="منوی موبایل"
      >
        <div className="mb-10 flex items-center justify-between">
          <strong>سوپر سرویس آفاقی</strong>
          <button
            className="grid size-10 place-items-center rounded-lg bg-[#1F150A]/5"
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            <Icon name="x" />
          </button>
        </div>
        <nav className="flex flex-col text-base font-bold">
          {[
            ["صفحه اصلی", "#top"],
            ["خدمات خودرو", "#services"],
            ["محصولات", "#products"],
            ["چرا آفاقی؟", "#why-us"],
            ["راهنمای خودرو", "#guides"],
            ["تماس با ما", "#contact"],
          ].map(([label, href]) => (
            <a className="border-b border-white/8 py-4" href={href} onClick={closeMenu} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn-primary mt-8 w-full" href="tel:+989144413979">
          <Icon name="call" size={19} />
          تماس سریع: ۰۹۱۴۴۴۱۳۹۷۹
        </a>
      </aside>

      <main id="top">
        <section className="hero-section relative isolate min-h-[680px] overflow-hidden bg-[#0B0606] text-white lg:min-h-[720px]">
          <video
            src="/video/afagi_hero_video.mp4"
            poster={heroImage}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,6,6,.15),rgba(11,6,6,.82)_58%,rgba(11,6,6,.96))]" />
          <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="container-shell flex min-h-[680px] items-center py-20 lg:min-h-[720px]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1F150A]/10 px-4 py-2 text-xs font-bold backdrop-blur">
                <span className="size-2 rounded-full bg-[#E9C427] shadow-[0_0_0_5px_rgba(233,196,39,.13)]" />
                بیش از چهار دهه تجربه از سال ۱۳۶۰
              </div>
              <h1 className="hero-title leading-[1.35] lg:leading-[1.25]">
                مراقبت حرفه‌ای از خودرو،
                <span className="highlight-red mt-1 block">آرامش خیال در جاده</span>
              </h1>
              <p className="hero-subtitle mt-6 max-w-xl leading-8">
                بهترین سوپر سرویس ارومیه برای سرویس دوره‌ای، تعویض روغن موتور و تعویض روغن گیربکس
                اتوماتیک با دستگاه‌های پیشرفته و محصولات اصل.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="tel:+984433821430">
                  <Icon name="calendar" size={19} />
                  رزرو نوبت سرویس
                </a>
                <a className="btn-ghost" href="#services">
                  مشاهده خدمات
                  <Icon name="arrow" size={19} />
                </a>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-x-reverse divide-white/15 border-t border-white/15 pt-6">
                <div>
                  <strong className="block text-xl font-black sm:text-2xl">+۴۴ سال</strong>
                  <span className="text-[10px] text-white/50 sm:text-xs">تجربه تخصصی</span>
                </div>
                <div className="pr-5">
                  <strong className="block text-xl font-black sm:text-2xl">۳ نسل</strong>
                  <span className="text-[10px] text-white/50 sm:text-xs">اعتماد مشتریان</span>
                </div>
                <div className="pr-5">
                  <strong className="block text-xl font-black sm:text-2xl">۱۰۰٪</strong>
                  <span className="text-[10px] text-white/50 sm:text-xs">اصالت کالا</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-badge-box absolute bottom-0 left-0 hidden w-[38%] items-center gap-4 lg:flex">
            <span className="grid size-12 place-items-center rounded-full bg-[#1F150A] text-white">
              <Icon name="location" size={22} />
            </span>
            <div>
              <span className="block text-xs text-white/55">مراجعه حضوری در ارومیه</span>
              <strong className="text-sm">تقاطع مدرس، ۵۰۰ متری استاد شهریار</strong>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-8 sm:-mt-12">
          <div className="container-shell">
            <div className="grid overflow-hidden rounded-2xl bg-[#1F150A] shadow-[0_18px_50px_rgba(0,0,0,.12)] sm:grid-cols-3">
              {[
                ["call", "مشاوره رایگان", "۰۹۱۴۴۴۱۳۹۷۹", "tel:+989144413979"],
                ["calendar", "رزرو نوبت سرویس", "۰۴۴ ۳۳۸۲ ۱۴۳۰", "tel:+984433821430"],
                [
                  "location",
                  "مسیریابی تا آفاقی",
                  "مشاهده روی نقشه بلد",
                  "https://balad.ir/p/%D8%B3%D9%88%D9%BE%D8%B1-%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-%D8%A2%D9%81%D8%A7%D9%82%DB%8C-uromia_car-servicing-5k29DGccAyMJzN#15/37.56043/45.04746",
                ],
              ].map(([icon, label, value, href], index) => (
                <a
                  className={`group flex items-center gap-4 p-6 transition hover:bg-[#1F150A] sm:p-7 ${index < 2 ? "border-b border-white/8 sm:border-b-0 sm:border-l" : ""}`}
                  href={href}
                  target={index === 2 ? "_blank" : undefined}
                  rel={index === 2 ? "noreferrer" : undefined}
                  key={label}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#1F150A] text-[#DE120C] transition group-hover:bg-[#DE120C] group-hover:text-white">
                    <Icon name={icon as IconName} size={22} />
                  </span>
                  <span>
                    <small className="block text-[11px] text-white/45">{label}</small>
                    <strong className="mt-1 block text-sm">{value}</strong>
                  </span>
                  <Icon name="chevron" size={17} className="mr-auto text-white/25" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space" id="services">
          <div className="container-shell">
            <SectionHeading
              eyebrow="خدمات تخصصی خودرو"
              title="هر آنچه خودروی شما نیاز دارد"
              text="خدمات فنی دقیق، تجهیزات به‌روز و روانکارهای استاندارد برای حفظ عملکرد و افزایش عمر خودرو"
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  className={`service-card group relative overflow-hidden rounded-2xl border p-7 transition duration-300 sm:p-8 ${
                    service.featured
                      ? "border-[#DE120C] bg-[#0B0606] text-white shadow-[0_16px_35px_rgba(0,0,0,.15)]"
                      : "border-white/8 bg-[#1F150A] hover:-translate-y-1 hover:border-[#DE120C]/35 hover:shadow-xl"
                  }`}
                  key={service.title}
                >
                  <span
                    className={`absolute -left-1 -top-5 text-8xl font-black ${service.featured ? "text-white/[.04]" : "text-white/[.035]"}`}
                  >
                    {service.number}
                  </span>
                  <div
                    className={`relative mb-7 grid size-16 place-items-center rounded-2xl ${
                      service.featured ? "bg-[#DE120C] text-white" : "bg-[#1F150A] text-[#DE120C]"
                    }`}
                  >
                    <Icon name={service.icon} size={30} />
                  </div>
                  <h3 className="relative text-xl font-black">{service.title}</h3>
                  <p
                    className={`relative mt-4 text-sm leading-7 ${service.featured ? "text-white/60" : "text-white/55"}`}
                  >
                    {service.text}
                  </p>
                  <a
                    className={`relative mt-7 inline-flex items-center gap-2 text-xs font-black ${service.featured ? "text-[#E9C427]" : "text-[#DE120C]"}`}
                    href="tel:+984433821430"
                  >
                    دریافت مشاوره
                    <Icon name="arrow" size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#0B0606] text-white" id="why-us">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[430px] lg:min-h-[650px]">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={engineImage}
                alt="بازبینی تخصصی موتور خودرو"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            </div>
            <div className="flex items-center px-6 py-16 sm:px-12 lg:px-[10%]">
              <div className="max-w-xl">
                <span className="section-eyebrow section-eyebrow-dark">چرا سوپر سرویس آفاقی؟</span>
                <h2 className="mt-4 text-3xl font-black leading-[1.55] sm:text-4xl">
                  تجربه قدیمی، خدمات به روش امروز
                </h2>
                <p className="mt-5 text-sm leading-8 text-white/55">
                  از سال ۱۳۶۰ کنار رانندگان ارومیه‌ای هستیم؛ امروز همان اعتبار را با تجهیزات مدرن،
                  محصول اصل و پرونده هوشمند خودرو ادامه می‌دهیم.
                </p>
                <div className="mt-9 space-y-4">
                  {[
                    ["سیستم هوشمند یادآوری کیلومتر", "اعلام زمان سرویس بعدی متناسب با کارکرد خودرو"],
                    [
                      "فایل سوابق اختصاصی هر خودرو",
                      "ثبت سرویس‌ها برای تصمیم‌گیری دقیق‌تر در مراجعات بعدی",
                    ],
                    ["مرکز تخصصی روانکارهای اصل", "تنوع کامل روغن موتور و روانساز ایرانی و خارجی"],
                    ["شفافیت قبل از شروع کار", "اعلام نوع روغن، حجم مورد نیاز و هزینه پیش از سرویس"],
                  ].map(([title, text]) => (
                    <div className="flex gap-4" key={title}>
                      <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#E9C427] text-black">
                        <Icon name="check" size={14} />
                      </span>
                      <div>
                        <strong className="block text-sm">{title}</strong>
                        <span className="mt-1 block text-xs leading-6 text-white/45">{text}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-[#1F150A]/5 p-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#E9C427] text-black">
                      <Icon name="shield" size={23} />
                    </span>
                    <div>
                      <strong className="block text-sm">سرویس مستند و مطمئن</strong>
                      <span className="text-xs text-white/55">سوابق هر خودرو همیشه در دسترس</span>
                    </div>
                  </div>
                </div>
                <a className="btn-primary mt-10" href="tel:+989144413979">
                  مشاوره با کارشناس
                  <Icon name="call" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#110A0A]" id="products">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                align="right"
                eyebrow="فروشگاه تخصصی روانکار"
                title="محصول اصل برای هر خودرو"
                text="بزرگترین مرکز فروش انواع روغن موتور و روانسازهای ایرانی و خارجی در سطح استان"
              />
              <a
                className="inline-flex items-center gap-2 text-sm font-black text-[#DE120C]"
                href="tel:+989144413979"
              >
                استعلام موجودی و قیمت
                <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {products.map((product, index) => (
                <a
                  className="product-card group relative min-h-56 overflow-hidden rounded-2xl border border-white/8 bg-[#1F150A] p-6 transition hover:-translate-y-1 hover:shadow-xl sm:min-h-64 sm:p-7"
                  href="tel:+989144413979"
                  key={product.label}
                >
                  <span className="absolute -bottom-8 -left-6 text-[8rem] font-black text-white/[.025]">
                    ۰{index + 1}
                  </span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#110A0A] text-[#DE120C] transition group-hover:bg-[#DE120C] group-hover:text-white">
                    <Icon name={product.icon} size={27} />
                  </span>
                  <div className="absolute right-6 bottom-6 left-6">
                    <h3 className="font-black sm:text-lg">{product.label}</h3>
                    <p className="mt-1 text-[11px] text-white/45 sm:text-xs">{product.sub}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#DE120C]">
                      استعلام قیمت
                      <Icon name="chevron" size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#E9C427] p-7 text-[#0B0606] md:flex-row md:items-center md:p-9">
              <div className="flex items-center gap-5">
                <span className="hidden size-14 place-items-center rounded-full bg-[#1F150A] text-white sm:grid">
                  <Icon name="store" size={25} />
                </span>
                <div>
                  <h3 className="text-lg font-black">برای انتخاب روغن مناسب خودرو تردید دارید؟</h3>
                  <p className="mt-1 text-xs leading-6 text-[#0B0606]/70">
                    مدل خودرو و کیلومتر کارکرد را اعلام کنید؛ کارشناسان ما راهنمایی‌تان می‌کنند.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1F150A] px-6 py-3.5 text-xs font-black text-white transition hover:bg-[#110A0A]"
                href="https://wa.me/989394413979"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="message" size={18} />
                مشاوره در واتساپ
              </a>
            </div>
          </div>
        </section>

        <section className="section-space" id="guides">
          <div className="container-shell">
            <SectionHeading
              eyebrow="مجله و راهنمای نگهداری"
              title="دانستنی‌های کاربردی خودرو"
              text="پاسخ‌های ساده و دقیق برای نگهداری بهتر و جلوگیری از هزینه‌های سنگین"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "گیربکس اتوماتیک",
                  "علائم خرابی گیربکس CVT چیست و چه زمانی باید مراجعه کنیم؟",
                  "۷ دقیقه مطالعه",
                ],
                ["سرویس دوره‌ای", "چک‌لیست کامل سرویس دوره‌ای خودرو در ارومیه", "۶ دقیقه مطالعه"],
                ["تعویض روغن", "هزینه تعویض روغن موتور و فیلتر در سال ۱۴۰۵", "۵ دقیقه مطالعه"],
              ].map(([tag, title, time], index) => (
                <article
                  className="group overflow-hidden rounded-2xl border border-white/8 bg-[#1F150A]"
                  key={title}
                >
                  <div
                    className={`relative h-44 overflow-hidden ${index === 1 ? "bg-[#E9C427]" : index === 2 ? "bg-[#1F150A]" : "bg-[#110A0A]"}`}
                  >
                    {index === 0 ? (
                      <img
                        src="/img/blog1_thumbnail_gearbox_diagnosis.png"
                        alt="بررسی و عیب‌یابی گیربکس خودرو"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : index === 1 ? (
                      <img
                        src="/img/blog2_thumbnail_maintenance_checklist.png"
                        alt="چک‌لیست سرویس دوره‌ای خودرو"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : index === 2 ? (
                      <img
                        src="/img/blog3_thumbnail_oil_cost.png"
                        alt="برآورد هزینه تعویض روغن خودرو"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_45%,white_45%,white_47%,transparent_47%)] [background-size:28px_28px]" />
                        <Icon
                          name={index === 1 ? "car" : "oil"}
                          size={92}
                          className={`absolute -bottom-3 left-7 transition duration-500 group-hover:scale-110 group-hover:-rotate-6 ${index === 1 ? "text-white/75" : "text-white/80"}`}
                        />
                      </>
                    )}
                    <span
                      className={`absolute top-5 right-5 rounded-full px-3 py-1.5 text-[10px] font-black ${index === 1 ? "bg-[#E9C427] text-[#0B0606]" : "bg-[#1F150A] text-white"}`}
                    >
                      {tag}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="min-h-14 text-base font-black leading-7">{title}</h3>
                    <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 text-[11px] text-white/40">
                      <span className="flex items-center gap-1.5">
                        <Icon name="clock" size={15} />
                        {time}
                      </span>
                      <a
                        className="flex items-center gap-1 font-black text-[#DE120C]"
                        href="#contact"
                      >
                        مطالعه راهنما
                        <Icon name="chevron" size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[#110A0A]">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <span className="section-eyebrow">پرسش‌های پرتکرار</span>
              <h2 className="mt-4 text-3xl font-black leading-[1.5]">
                قبل از مراجعه چه چیزهایی بدانیم؟
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/50">
                اگر پاسخ پرسش شما اینجا نیست، برای راهنمایی دقیق‌تر با ما تماس بگیرید.
              </p>
              <a
                className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#DE120C]"
                href="tel:+989144413979"
              >
                <Icon name="call" size={18} />
                09144413979
              </a>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  className="overflow-hidden rounded-xl border border-white/8 bg-[#1F150A]"
                  key={faq.q}
                >
                  <button
                    className="flex w-full items-center justify-between gap-5 p-5 text-right text-sm font-black sm:p-6"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    {faq.q}
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition ${openFaq === index ? "rotate-90 bg-[#DE120C] text-white" : "bg-white/10"}`}
                    >
                      <Icon name="chevron" size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-xs leading-7 text-white/55 sm:px-6 sm:pb-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#DE120C] py-16 text-white">
          <div className="absolute -top-36 -left-20 size-96 rounded-full border-[70px] border-white/[.06]" />
          <div className="container-shell relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-right">
            <div>
              <h2 className="text-2xl font-black leading-relaxed sm:text-3xl">
                خودروی شما آماده یک سرویس دقیق است؟
              </h2>
              <p className="mt-2 text-sm text-white/70">
                برای رزرو زمان یا استعلام هزینه، همین حالا با آفاقی تماس بگیرید.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F150A] px-7 py-4 text-sm font-black text-[#DE120C] transition hover:bg-[#E9C427] hover:text-black"
                href="tel:+984433821430"
              >
                <Icon name="calendar" size={19} />
                رزرو: ۰۴۴۳۳۸۲۱۴۳۰
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-black transition hover:bg-[#F6F3F8]/10"
                href="tel:+989144413979"
              >
                <Icon name="call" size={19} />
                تماس با مشاور
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B0606] text-white" id="contact">
        <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1.2fr]">
          <div>
            <a className="flex items-center gap-3" href="#top">
              <span className="grid size-12 place-items-center">
                <img
                  src="/icons/logo.svg"
                  alt="سوپر سرویس آفاقی"
                  className="h-[100 px] w-[100 px] object-contain"
                />
              </span>
              <span>
                <strong className="block text-lg font-black">سوپر سرویس آفاقی</strong>
                <small className="text-[10px] tracking-[.16em] text-white/35">
                  AFAGI SUPER SERVICE
                </small>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-xs leading-7 text-white/45">
              مرکز تخصصی سرویس دوره‌ای و فروش انواع روغن موتور و روانسازهای اصل در ارومیه؛ همراه
              خودروی شما از سال ۱۳۶۰.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/oilafagi",
                  icon: "instagram",
                },
                {
                  label: "Rubika",
                  href: "https://rubika.ir/page/oilafagi",
                  icon: "rubika",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/oilafaghi",
                  icon: "telegram",
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/989394413979",
                  icon: "whatsapp",
                },
              ].map(({ label, href, icon }) => (
                <a
                  className="grid size-10 place-items-center rounded-full bg-[#1F150A]/7 text-white transition duration-200 hover:-translate-y-0.5 hover:text-[#E9C427] focus-visible:text-[#E9C427]"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={label}
                  key={label}
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-title">دسترسی سریع</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs text-white/45">
              <a className="footer-link" href="#services">
                خدمات خودرو
              </a>
              <a className="footer-link" href="#products">
                فروشگاه روغن
              </a>
              <a className="footer-link" href="#why-us">
                درباره آفاقی
              </a>
              <a className="footer-link" href="#guides">
                راهنمای خودرو
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">خدمات محبوب</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs text-white/45">
              <a className="footer-link" href="#services">
                سرویس دوره‌ای خودرو
              </a>
              <a className="footer-link" href="#services">
                تعویض روغن گیربکس
              </a>
              <a className="footer-link" href="#services">
                تعویض روغن موتور
              </a>
              <a className="footer-link" href="#products">
                فروش روانکار
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">ارتباط با آفاقی</h3>
            <div className="mt-5 space-y-4 text-xs">
              <a
                className="flex gap-3 text-white/60 transition hover:text-white"
                href="https://balad.ir/p/%D8%B3%D9%88%D9%BE%D8%B1-%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-%D8%A2%D9%81%D8%A7%D9%82%DB%8C-uromia_car-servicing-5k29DGccAyMJzN#15/37.56043/45.04746"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="location" size={18} className="shrink-0 text-[#DE120C]" />
                ارومیه، تقاطع مدرس، ۵۰۰ متری خیابان استاد شهریار، جنب کوی ۱۶
              </a>
              <a
                className="flex items-center gap-3 text-white/60 transition hover:text-white"
                href="tel:+989144413979"
              >
                <Icon name="call" size={18} className="text-[#DE120C]" />
                ۰۹۱۴۴۴۱۳۹۷۹
              </a>
              <a
                className="flex items-center gap-3 text-white/60 transition hover:text-white"
                href="mailto:oilafagi@gmail.com"
              >
                <Icon name="mail" size={18} className="text-[#DE120C]" />
                oilafagi@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="container-shell flex flex-col items-center justify-between gap-3 py-5 text-[10px] text-white/30 sm:flex-row">
            <p>© ۱۴۰۵ سوپر سرویس آفاقی. همه حقوق محفوظ است.</p>
            <p color = "red"> Powered by <a color="red" href = "https://paratopic.com" target = "_blank" >Paratopic Technologies, LLC.</a> </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-[#1F150A] p-2 shadow-[0_-8px_24px_rgba(0,0,0,.09)] md:hidden">
        <a
          className="flex items-center justify-center gap-2 rounded-lg bg-[#DE120C] py-3 text-xs font-black text-white"
          href="tel:+989144413979"
        >
          <Icon name="call" size={18} />
          تماس سریع
        </a>
        <a
          className="flex items-center justify-center gap-2 py-3 text-xs font-black"
          href="tel:+984433821430"
        >
          <Icon name="calendar" size={18} />
          رزرو نوبت
        </a>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "center" | "right";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-right"}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-black leading-[1.5] sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/50">{text}</p>
    </div>
  );
}
