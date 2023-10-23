import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-end p-12">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
