import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollButton = ({ scroll, ScrolltoTop }) => {
  return (
    <button
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-md bg-[#be123c] text-white shadow-lg shadow-rose-900/20 transition ${
        scroll === "scroll-visible"
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={ScrolltoTop}
    >
      <ArrowUpOutlined />
    </button>
  );
};

export default ScrollButton;
