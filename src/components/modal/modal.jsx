import { CloseCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const Modal = ({ close, data, isDarkMode }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={close} />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-[95vw] md:max-w-4xl rounded-xl md:rounded-2xl shadow-2xl ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }  md:mt-0`}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className={`absolute right-4 top-4 z-10 p-1 rounded-full ${
            isDarkMode
              ? "text-gray-200 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition-colors`}
        >
          <CloseCircleOutlined className="text-2xl md:text-3xl" />
        </button>

        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Left Side */}
            <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <span
                  className={`text-xs md:text-sm font-medium ${
                    isDarkMode ? "text-redish/80" : "text-redish"
                  } uppercase`}
                >
                  {data.category}
                </span>
                <h2
                  className={`mt-1 md:mt-2 text-xl md:text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {data.title}
                </h2>
              </div>

              <p
                className={`text-sm md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {data.details}
              </p>

              {/* Tech Stack */}
              <div className="space-y-2 md:space-y-3">
                <h4
                  className={`text-sm md:text-base font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {data.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm rounded-full ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-redish/10 text-redish"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-4 md:pt-6">
                <button
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                    isDarkMode
                      ? "bg-redish/90 hover:bg-redish text-white"
                      : "bg-redish hover:bg-redish/90 text-white"
                  }`}
                >
                  View Live Demo
                </button>
                <button
                  onClick={close}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium border ${
                    isDarkMode
                      ? "border-gray-600 hover:border-gray-500 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-600"
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Modal;
