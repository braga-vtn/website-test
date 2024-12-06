export default function PoliciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-[5.25] w-full">{children}</div>
  );
}