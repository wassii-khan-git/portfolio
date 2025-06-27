import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollButton = ({ scroll, ScrolltoTop }) => {
  return (
    <div>
      <button
        className={`bg-redish text-halfwhite ${
          scroll === "scroll-visible"
            ? "block fixed right-12 bottom-8"
            : "hidden"
        } px-4 py-3 rounded-lg`}
        onClick={ScrolltoTop}
      >
        <ArrowUpOutlined />
      </button>
    </div>
  );
};

export default ScrollButton;
