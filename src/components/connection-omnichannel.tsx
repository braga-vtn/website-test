"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ConnectionOmnichannel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.telegram />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.gmail />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.instagram />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.vistune />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.x />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  instagram: () => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={2}
        y={2}
        width={28}
        height={28}
        rx={6}
        fill="url(#paint0_radial_87_7153)"
      />
      <rect
        x={2}
        y={2}
        width={28}
        height={28}
        rx={6}
        fill="url(#paint1_radial_87_7153)"
      />
      <rect
        x={2}
        y={2}
        width={28}
        height={28}
        rx={6}
        fill="url(#paint2_radial_87_7153)"
      />
      <path d="M23 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 21a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 100-6 3 3 0 000 6z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 011.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 01-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 01-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 011.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="paint0_radial_87_7153"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-55.376 27.916 .066) scale(25.5196)"
        >
          <stop stopColor="#B13589" />
          <stop offset={0.79309} stopColor="#C62F94" />
          <stop offset={1} stopColor="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_87_7153"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-65.136 29.766 6.89) scale(22.5942)"
        >
          <stop stopColor="#E0E8B7" />
          <stop offset={0.444662} stopColor="#FB8A2E" />
          <stop offset={0.71474} stopColor="#E2425C" />
          <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="paint2_radial_87_7153"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
        >
          <stop offset={0.156701} stopColor="#406ADC" />
          <stop offset={0.467799} stopColor="#6A45BE" />
          <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  ),
  vistune: () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" fill="#000000" viewBox="0 0 1348.000000 1348.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1348.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M19 11373 c6 -10 165 -256 354 -548 l344 -530 6000 -3 6001 -2 376
 544 c207 300 376 547 376 550 0 3 -3029 6 -6730 6 -6407 0 -6730 -1 -6721 -17z"/>
        <path d="M1442 9187 c4 -19 3772 -5926 3779 -5927 4 0 757 1094 1674 2430
 l1668 2430 664 0 c614 0 665 -1 659 -16 -4 -10 -904 -1321 -2002 -2916 -1097
 -1594 -1997 -2904 -2000 -2912 -4 -11 577 -930 610 -962 8 -9 703 989 2739
 3935 l2728 3946 -1978 3 -1978 2 -20 -23 c-11 -12 -629 -910 -1374 -1995 -898
 -1307 -1358 -1969 -1365 -1962 -5 5 -575 902 -1266 1992 l-1257 1983 -642 3
 c-537 2 -642 0 -639 -11z"/>
      </g>
    </svg>
  ),
  telegram: () => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={16} cy={16} r={14} fill="url(#paint0_linear_87_7225)" />
      <path
        d="M22.987 10.209c.124-.806-.642-1.441-1.358-1.127L7.365 15.345c-.514.225-.476 1.003.056 1.173l2.942.937c.562.179 1.17.086 1.66-.253l6.632-4.582c.2-.138.418.147.247.323l-4.774 4.922c-.463.477-.371 1.286.186 1.636l5.345 3.351c.6.376 1.37-.001 1.483-.726l1.845-11.917z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="paint0_linear_87_7225"
          x1={16}
          y1={2}
          x2={16}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#37BBFE" />
          <stop offset={1} stopColor="#007DBB" />
        </linearGradient>
      </defs>
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  gmail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gmail"
      viewBox="0 0 512 512"
    >
      <rect width={512} height={512} rx="15%" fill="#fff" />
      <path d="M158 391V249l-82-63v175q0 30 30 30" fill="#4285f4" />
      <path d="M154 248l102 77 102-77v-98l-102 77-102-77" fill="#ea4335" />
      <path d="M354 391V249l82-63v175q0 30-30 30" fill="#34a853" />
      <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" />
      <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" />
    </svg>
  ),
  x: () => (
    <svg width="1200" height="1227" viewBox="0 0 1200 1227" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#000000" />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      fill="CurrentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
};
