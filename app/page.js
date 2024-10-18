import Link from "next/link";

export default function Homepage() {
  let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2" className={linkStyles}>
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className={linkStyles}>
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-4" className={linkStyles}>
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className={linkStyles}>
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-6" className={linkStyles}>
            Week 6 Assignment
          </Link>
        </li>        <li>
          <Link href="/week-7" className={linkStyles}>
            Week 7 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
