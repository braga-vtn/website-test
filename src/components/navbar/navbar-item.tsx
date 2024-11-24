"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type SubItem = {
  title: string;
  link: string;
};

type NavItem = {
  link?: string;
  title: string;
  submenu: boolean;
  subItems?: SubItem[];
  target?: "_blank";
};

type Props = {
  navItems: NavItem[];
};

export function NavBarItem({ navItems }: Props) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "flex items-center justify-center text-sm px-4 py-2 hover:text-black text-muted dark:text-muted-dark"
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <MenuItem
            key={item.title}
            setActive={setActive}
            active={active}
            item={item}
          >
            {item.submenu && item.subItems && (
              <div className="flex flex-col space-y-4 text-sm">
                {item.subItems.map((subItem) => (
                  <HoveredLink
                    key={subItem.title}
                    href={subItem.link}
                  >
                    {subItem.title}
                  </HoveredLink>
                ))}
              </div>
            )}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-6 px-8 py-2"
    >
      {children}
    </nav>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: NavItem;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item.title)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item.link ? (
          <Link href={item.link} target={item.target} className="hover:underline">
            {item.title}
          </Link>
        ) : (
          item.title
        )}
      </motion.p>
      {active === item.title && item.submenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute transform -translate-x-1/2 pt-4 min-w-48"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.1] shadow-xl mt-1"
          >
            <motion.div layout className="w-max h-full p-4 flex flex-col gap-2">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black hover:underline"
    >
      {children}
    </Link>
  );
};
