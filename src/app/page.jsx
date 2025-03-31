import Link from "next/link";

export default function Home() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-6xl font-bold">Welcome to the Home Page</h1>
            <Link href={"/"}>Hello</Link>
        </div>
    )

}