import { Leftbar } from "@/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth -mt-2">
      <div className="flex flex-col items-center justify-between max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-8 w-full">
          <Leftbar key="leftbar" />
          <div className="flex-[5.25]">{children}</div>
        </div>
      </div>
    </main>
  );
}
