"use client";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/component/foooter";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-16 items-center justify-between px-4 bg-gray-800 text-white">
        <h1 className="text-lg font-semibold">Meal Matters</h1>
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
        <Card>
          <CardHeader>
            <CardTitle>Hotel Sunshine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Food Details</p>
            <p className="mb-2">Pasta: 20kg</p>
            <p className="mb-2">Bread: 15kg</p>
            <p className="mb-2">Fruits: 5kg</p>
            <Link href="/connect/1/request">
              <Button className="w-full" variant="outline">
                Request Food
              </Button>
            </Link>
            <Button className="w-full" variant="outline">
              Call at +91 87630-39380
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/dir//8V49%2B485+Hotel+Sunshine,+Rasulgarh,+Bhubaneswar,+Odisha+751007/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a190a154512f979:0xeb0b1b3833e019a4?sa=X&ved=2ahUKEwj1gOKxor-EAxXgTWwGHdJFAYMQ48ADegQIJhAA"
                );
              }}
            >
              Navigate to Hotel Sunshine
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
