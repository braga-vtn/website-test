import Image from "next/image";

export default function CardImage() {
  return (
    <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
      <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
        <Image
          src="https://images.unsplash.com/photo-1732130318657-c8740c0f5215?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="header"
          width={900}
          height={900}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}
