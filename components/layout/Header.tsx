import Link from "next/link";
import ThemeSwitch from "../theme/ThemeSwitch";

interface Props {}

export default function Header(props: Props) {
  return (
    <header className="not-prose sticky top-0 left-0 scroll bg-gradient-to-b from-white dark:from-black to-transpent from-50% to-transparent">
      <div className="flex flex-row justify-between max-w-screen-md mx-auto p-5">
        <nav className="flex flex-row items-center gap-x-3">
          <Link className="text-lg font-semibold" href={"/"}>
            pung.dev
          </Link>
          <Link className="hover:text-primary" href={"/posts"}>
            Posts
          </Link>
          <Link className="hover:text-primary" href={"/notes"}>
            Notes
          </Link>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
