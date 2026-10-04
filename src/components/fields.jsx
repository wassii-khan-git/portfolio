import { Field } from "formik";

const CustomField = ({ errors, touched, fieldKey, fieldName, placeholder }) => {
  const isMessage = fieldKey === "message";
  const invalid = Boolean(errors && touched);
  const errorId = `${fieldKey}-error`;

  return (
    <div>
      <label
        htmlFor={fieldKey}
        className="block font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
      >
        {fieldName}
      </label>
      <Field
        id={fieldKey}
        name={fieldKey}
        as={isMessage ? "textarea" : "input"}
        rows={isMessage ? 5 : undefined}
        placeholder={placeholder}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        className={`mt-2.5 w-full rounded-lg border bg-bg px-4 py-3 text-ink outline-none transition-colors placeholder:text-dim focus:border-accent ${
          isMessage ? "resize-none" : ""
        } ${invalid ? "border-accent" : "border-line hover:border-line-strong"}`}
      />
      {invalid && (
        <p id={errorId} className="mt-2 font-mono text-[11px] text-accent">
          {errors}
        </p>
      )}
    </div>
  );
};

export default CustomField;
