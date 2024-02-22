"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/component/foooter";

export default function Component() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-16 items-center justify-between px-4 bg-gray-800 text-white">
        <h1 className="text-lg font-semibold">Hotel Food Donation Platform</h1>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/">
            About
          </Link>
          <Link className="hover:underline" href="/">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Hotel Grand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Amount of food: 50kg</p>
              <p className="mb-2">Types of food: Vegetables, Fruits, Breads</p>
              <Button className="w-full" variant="outline">
                Connect
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hotel Royal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Amount of food: 30kg</p>
              <p className="mb-2">Types of food: Rice, Vegetables, Fruits</p>
              <Button className="w-full" variant="outline">
                Connect
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hotel Sunshine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Amount of food: 40kg</p>
              <p className="mb-2">Types of food: Pasta, Breads, Fruits</p>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => router.push("/connect/id")}
              >
                Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
