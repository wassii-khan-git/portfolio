import { CloseCircleOutlined, MailOutlined } from "@ant-design/icons";
import ProjectVisual from "../projectVisual";
import { profile } from "../../data/profile";

const Modal = ({ close, data }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-3 backdrop-blur-sm md:items-center">
      <button
        type="button"
        aria-label="Close project details"
        className="fixed inset-0 bg-slate-950/60"
        onClick={close}
      />

      <article className="relative my-6 w-full max-w-5xl overflow-hidden rounded-lg border border-[#d8dee9] bg-white shadow-2xl dark:border-[#273449] dark:bg-[#111827]">
        <button
          onClick={close}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 rounded-md bg-white/90 p-2 text-[#475569] shadow-sm transition hover:text-[#0f172a] dark:bg-[#0b1120]/90 dark:text-[#cbd5e1] dark:hover:text-white"
        >
          <CloseCircleOutlined className="text-2xl" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="p-4 lg:p-6">
            <ProjectVisual project={data} />
          </div>

          <div className="p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase text-[#be123c] dark:text-[#fb7185]">
              {data.category}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0f172a] dark:text-white">
              {data.title}
            </h2>
            <p className="mt-4 leading-8 text-[#475569] dark:text-[#cbd5e1]">
              {data.details}
            </p>

            <div className="mt-7">
              <h3 className="font-bold text-[#0f172a] dark:text-white">
                Impact and responsibility
              </h3>
              <ul className="mt-3 space-y-3">
                {data.impact.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[#475569] dark:text-[#cbd5e1]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#be123c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h3 className="font-bold text-[#0f172a] dark:text-white">
                Technology stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[#f1f5f9] px-3 py-2 text-sm font-semibold text-[#334155] dark:bg-[#1f2937] dark:text-[#cbd5e1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${profile.email}?subject=Project case study: ${encodeURIComponent(
                data.title
              )}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#be123c] px-5 py-3 font-semibold text-white transition hover:bg-[#9f1239]"
            >
              <MailOutlined />
              Request Details
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modal;
