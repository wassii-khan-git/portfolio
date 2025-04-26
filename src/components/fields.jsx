import { Field } from "formik";
import { useDarkMode } from "../hook";

const CustomField = ({ errors, touched, fieldKey, fieldName }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <label
        key={fieldKey}
        className={`block font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {fieldName}
      </label>
      <Field
        key={fieldKey}
        name={fieldKey}
        as={fieldKey === "message" && "textarea"}
        rows={fieldKey === "message" && 5}
        className={` ${
          fieldKey === "message" && "resize-none"
        } w-full px-4 py-3 rounded-lg border ${
          errors && touched && "border-red-500"
        } outline-none focus:ring-2 focus:ring-redish/50 ${
          isDarkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        } transition-all duration-300`}
      />
      {errors && touched && (
        <div key={fieldKey} className="text-redish">
          {errors}
        </div>
      )}
    </>
  );
};

export default CustomField;
