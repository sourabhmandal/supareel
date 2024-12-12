"use client";
import { Button } from "@/components/ui/button";
import { LOGIN_PAGE } from "@/routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 justify-center items-center">
      <Button onClick={() => router.push(LOGIN_PAGE)}>Login</Button>
    </div>
  );
}
