import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

type Props ={
  text: string;
}

export function BadgeLandingPage(props: Props) {
  return (
    <div className="z-10 flex min-h-8 items-center justify-center">
      <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#e8e8e8] via-[#242424] to-[#e8e8e8] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          {props.text}
        </span>
      </AnimatedGradientText>
    </div>
  );
}
