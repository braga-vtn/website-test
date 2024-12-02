"use client"
import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { StartUse } from "@/components/start-use";
import { PlaygroundDescription } from "@/components/playground-description";

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <PlaygroundDescription />
      </Container>
      <div className="relative">
        <div className="relative z-30">
          <StartUse />
        </div>
        <Background />
      </div>
    </div>
  );
}
