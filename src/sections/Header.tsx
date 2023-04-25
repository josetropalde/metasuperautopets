import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full py-4 px-[5%]">
      <div className="max-w-xs block m-auto">
        <Link href='/'><img src="logo.png" alt="Logo" className="max-w-[125px] m-auto" /></Link>
      </div>
    </header>
    </>
  )
}