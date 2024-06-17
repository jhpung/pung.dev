import Link from "next/link";
import ThemeSwitch from "../theme/ThemeSwitch";

interface Props {}

export default function Header(props: Props) {
  return (
    <header>
      <div className="flex flex-row justify-between max-w-screen-md mx-auto p-5">
        <nav className="flex flex-row items-center gap-x-3">
          <Link className="text-lg font-semibold" href={"/"}>
            pung.dev
          </Link>
          <Link href={"/posts"}>posts</Link>
          <Link href={"/memories"}>memories</Link>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
}
