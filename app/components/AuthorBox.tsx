import Link from "next/link"

type AuthorBoxProps = {
  published?: string
  updated?: string
}

export default function AuthorBox({ published, updated }: AuthorBoxProps) {
  return (
    <div className="mt-8 p-4 rounded-xl bg-orange-50/60 dark:bg-gray-800/60 border border-orange-100 dark:border-gray-700">
      <div className="text-sm text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          {published ? <span>Published {published}</span> : null}
          {updated ? <span>{published ? " • " : ""}Updated {updated}</span> : null}
        </div>
        <div>
          <Link href="/about" className="underline text-orange-700 dark:text-orange-400">
            About Shredle
          </Link>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Shredle is an educational tool that helps you learn calorie intuition
        through quick, daily practice.
      </p>
    </div>
  )
}


