// One authored set: 24px grid, 1.6 stroke, round caps.
import type { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);
export const IconSearch = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></Icon>
);
export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12.4 2.7 2.6L16 9.5" /></Icon>
);
export const IconDash = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12h7" /></Icon>
);
export const IconFile = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></Icon>
);
export const IconBell = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" /><path d="M10 20.5a2 2 0 0 0 4 0" /></Icon>
);
export const IconSend = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M5 12h13M13 6l6 6-6 6" /></Icon>
);
export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
);
export const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M10 8.8v6.4l5.2-3.2z" fill="currentColor" /></Icon>
);
export const IconPen = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" /><path d="m13.5 6.5 4 4" /></Icon>
);
export const IconFolder = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></Icon>
);

export const IconLayers = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></Icon>
);
export const IconLanguages = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M4 5h8M8 3v2M10.5 5c-.6 3.5-2.8 6.3-6 8M6 8.5c1 2 2.6 3.6 4.5 4.5" /><path d="m13 20 3.5-8 3.5 8M14.2 17.5h4.6" /></Icon>
);
export const IconBadge = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" fill="currentColor" /></Icon>
);
export const IconLock = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><rect x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></Icon>
);
export const IconEyeOff = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M3 3l18 18M10.6 6.1A9.7 9.7 0 0 1 12 6c5 0 8.5 4.2 9.5 6-.5.9-1.6 2.5-3.2 3.8M6.4 7.9C4.6 9.2 3.2 10.9 2.5 12c1 1.8 4.5 6 9.5 6 1.5 0 2.9-.4 4.1-1" /><path d="M9.9 10a3 3 0 0 0 4.1 4.1" /></Icon>
);
export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}><path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6z" /><path d="m9 12 2.2 2.2L15.5 10" /></Icon>
);
export const IconCursor = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path d="M5 3l14 7.5-6.2 1.7L10 18.5z" fill="#0c1b2e" stroke="#fff" strokeWidth={1.4} strokeLinejoin="round" /></svg>
);

/** The Clauze mark: two nested arcs and the Kef dot (from clauze-icon.png). */
export function Logo({ tone = "light", ...p }: SVGProps<SVGSVGElement> & { tone?: "light" | "dark" }) {
  const outer = tone === "dark" ? "#fdfaf4" : "#0c1b2e";
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...p}>
      <path d="M324 92a164 164 0 0 0 0 328" fill="none" stroke={outer} strokeWidth={36} strokeLinecap="round" />
      <path d="M397 162a101 101 0 1 0 0 186" fill="none" stroke="#8b8e96" strokeWidth={18} strokeLinecap="round" />
      <circle cx={162} cy={256} r={24} fill="#c8892a" />
    </svg>
  );
}
