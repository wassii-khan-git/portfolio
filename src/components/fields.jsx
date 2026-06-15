import { Field } from "formik";

const CustomField = ({ errors, touched, fieldKey, fieldName }) => {
  const isMessage = fieldKey === "message";

  return (
    <div className="space-y-2">
      <label
        htmlFor={fieldKey}
        className="block font-semibold text-[#334155] dark:text-[#cbd5e1]"
      >
        {fieldName}
      </label>
      <Field
        id={fieldKey}
        name={fieldKey}
        as={isMessage ? "textarea" : "input"}
        rows={isMessage ? 5 : undefined}
        className={`w-full rounded-md border px-4 py-3 text-[#0f172a] outline-none transition focus:border-[#be123c] focus:ring-2 focus:ring-[#be123c]/20 dark:bg-[#0b1120] dark:text-white ${
          isMessage ? "resize-none" : ""
        } ${
          errors && touched
            ? "border-[#be123c]"
            : "border-[#cbd5e1] dark:border-[#334155]"
        }`}
      />
      {errors && touched && (
        <p className="text-sm font-semibold text-[#be123c]">{errors}</p>
      )}
    </div>
  );
};

export default CustomField;
