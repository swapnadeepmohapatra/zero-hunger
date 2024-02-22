"use client";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/component/foooter";
import { Input } from "@/components/ui/input";

export default function Component() {
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
        <Card>
          <CardHeader>
            <CardTitle>Request Food From Hotel Sunshine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Food Details</p>
            {/* Form to enter request food details */}
            <form>
              <div className="mb-2">
                <label htmlFor="foodType">Food Type</label>
                <Input placeholder="Food Type" type="text" />
              </div>
              <div className="mb-2">
                <label htmlFor="quantity">Quantity</label>
                <Input placeholder="Quantity" type="text" />
              </div>
            </form>
            <Link href="/connect/">
              <Button className="w-full bg-blue-500" variant="outline">
                Submit
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
