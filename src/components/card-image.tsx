import Image from "next/image";

type Props = {
  url: string;
  size: string;
}

const sizeClasses: { [key: string]: string } = {
  small: 'w-[300px]',
  medium: 'w-[500px]',
  medium1: 'w-[600px]',
  large: 'w-[800px]',
  giant: 'w-[1000px]',
  giantLanding: 'w-[1000px] -ml-96',
};

export default function CardImage(props: Props) {
  const widthClass = sizeClasses[props.size] || 'w-[1000px]';

  return (
    <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
      <div className={`p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] ${widthClass}`}>
        <Image
          src={props.url}
          alt="header"
          width={1900}
          quality={100}
          height={1000}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}
