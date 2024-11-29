import HeroVideoDialog from "@/components/ui/hero-video-dialog";

type Props ={
  src?: string;
}

export function VideoHome(props: Props) {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={props.src || "/system/example-video.mp4"}
        thumbnailSrc="/system/banner-video.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={props.src || "/system/example-video.mp4"}
        thumbnailSrc="/system/banner-video.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
