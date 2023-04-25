import Link from "next/link";

export default function Footer() {
  const date = new Date()
  const theYear = date.getFullYear()
  return (
    <>
      <div className="text-white text-center mt-24 mb-4">
        <p className="text-[14px]">© MetaSuperAutoPets {theYear}</p>
        <div className="flex justify-center gap-4 mt-2 text-[12px]">
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/terms'>Terms & Conditions</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}