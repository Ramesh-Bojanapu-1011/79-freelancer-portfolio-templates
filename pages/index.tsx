import { ModeToggle } from "@/components/theme/ModeToggle";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Freelancer / Portfolio Templates</title>
        <meta
          name="description"
          content="Beautiful freelancer portfolio templates"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <div className=" absolute top-10 right-10">
          <ModeToggle />
        </div>
        <div className="max-w-4xl shadow-2xl rounded-2xl text-center px-6 py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Freelancer Portfolio Templates
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Launch your portfolio fast with beautiful, responsive templates made
            for freelancers and creatives.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/auth"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium"
            >
              Get Started — Sign In
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
