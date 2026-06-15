import {
  ApiOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  MedicineBoxOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const toneStyles = {
  healthcare: {
    accent: "text-[#be123c]",
    bg: "bg-[#fff1f2]",
    darkBg: "dark:bg-[#3f1220]",
    icon: MedicineBoxOutlined,
  },
  azure: {
    accent: "text-[#2563eb]",
    bg: "bg-[#eff6ff]",
    darkBg: "dark:bg-[#12213f]",
    icon: VideoCameraOutlined,
  },
  commerce: {
    accent: "text-[#b45309]",
    bg: "bg-[#fffbeb]",
    darkBg: "dark:bg-[#3b2a10]",
    icon: ShoppingCartOutlined,
  },
  ops: {
    accent: "text-[#0f766e]",
    bg: "bg-[#f0fdfa]",
    darkBg: "dark:bg-[#0f3431]",
    icon: CloudServerOutlined,
  },
  workflow: {
    accent: "text-[#6d28d9]",
    bg: "bg-[#f5f3ff]",
    darkBg: "dark:bg-[#271444]",
    icon: TeamOutlined,
  },
  frontend: {
    accent: "text-[#0369a1]",
    bg: "bg-[#f0f9ff]",
    darkBg: "dark:bg-[#102b3c]",
    icon: CodeOutlined,
  },
};

const ProjectVisual = ({ project, compact = false }) => {
  const tone = toneStyles[project.tone] || toneStyles.frontend;
  const Icon = tone.icon;

  if (project.image) {
    return (
      <figure
        className={`relative overflow-hidden rounded-lg border border-[#d8dee9] bg-white shadow-sm dark:border-[#273449] dark:bg-[#111827] ${
          compact ? "h-52" : "aspect-video"
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className={`h-full w-full object-top ${
            compact ? "object-cover" : "object-contain"
          }`}
        />
        <figcaption className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-[#334155] shadow-sm backdrop-blur dark:bg-[#0b1120]/90 dark:text-[#cbd5e1]">
          {project.category}
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${tone.bg} ${tone.darkBg} ${
        compact ? "min-h-52" : "min-h-72"
      } border border-white/70 p-4 dark:border-white/10`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
        </div>
        <span className="rounded-md bg-white/80 px-2 py-1 text-xs font-bold text-[#334155] dark:bg-black/20 dark:text-[#cbd5e1]">
          {project.category}
        </span>
      </div>

      <div className="grid gap-3">
        <div className="flex items-center gap-3 rounded-lg bg-white/85 p-3 shadow-sm dark:bg-black/20">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl shadow-sm ${tone.accent} dark:bg-[#0b1120]`}
          >
            <Icon />
          </div>
          <div className="min-w-0">
            <div className="h-2.5 w-36 max-w-full rounded bg-[#cbd5e1] dark:bg-[#475569]" />
            <div className="mt-2 h-2 w-24 rounded bg-[#e2e8f0] dark:bg-[#334155]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-white/75 p-3 dark:bg-black/20">
            <ApiOutlined className={`text-lg ${tone.accent}`} />
            <div className="mt-3 h-2 rounded bg-[#cbd5e1] dark:bg-[#475569]" />
          </div>
          <div className="rounded-lg bg-white/75 p-3 dark:bg-black/20">
            <DatabaseOutlined className={`text-lg ${tone.accent}`} />
            <div className="mt-3 h-2 rounded bg-[#cbd5e1] dark:bg-[#475569]" />
          </div>
          <div className="rounded-lg bg-white/75 p-3 dark:bg-black/20">
            <DeploymentUnitOutlined className={`text-lg ${tone.accent}`} />
            <div className="mt-3 h-2 rounded bg-[#cbd5e1] dark:bg-[#475569]" />
          </div>
        </div>

        <div className="rounded-lg bg-white/75 p-3 dark:bg-black/20">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-24 rounded bg-[#cbd5e1] dark:bg-[#475569]" />
            <div className={`h-2.5 w-12 rounded ${tone.bg} ${tone.darkBg}`} />
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded bg-[#e2e8f0] dark:bg-[#334155]" />
            <div className="h-2 w-4/5 rounded bg-[#e2e8f0] dark:bg-[#334155]" />
            <div className="h-2 w-2/3 rounded bg-[#e2e8f0] dark:bg-[#334155]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
