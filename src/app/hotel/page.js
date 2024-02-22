/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OaZzwk3EG4w
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
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
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Cooked Food</CardTitle>
              <MenuIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150 kg</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +10.1% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Fruits</CardTitle>
              <AppleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200 kg</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +5.1% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Vegetables</CardTitle>
              <CarrotIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">250 kg</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +8% from last week
              </p>
            </CardContent>
          </Card>
        </div> */}
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>NGO Name</TableHead>
                  <TableHead>Requested Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">NGO 1</TableCell>
                  <TableCell>Fruits</TableCell>
                  <TableCell>50 kg</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-blue-500">Approve</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">NGO 2</TableCell>
                  <TableCell>Cooked Food</TableCell>
                  <TableCell>30 kg</TableCell>
                  <TableCell>Approved</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-green-500">Deliver</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">NGO 3</TableCell>
                  <TableCell>Vegetables</TableCell>
                  <TableCell>70 kg</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-blue-500">Approve</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">NGO 4</TableCell>
                  <TableCell>Fruits</TableCell>
                  <TableCell>100 kg</TableCell>
                  <TableCell>Approved</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-green-500">Deliver</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">NGO 5</TableCell>
                  <TableCell>Cooked Food</TableCell>
                  <TableCell>50 kg</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-blue-500">Approve</Button>
                  </TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell>
                    <Input placeholder="NGO Name" type="text" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Requested Item" type="text" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Quantity" type="text" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">Add</Button>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Food Type</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Fruits</TableCell>
                  <TableCell>200 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vegetables</TableCell>
                  <TableCell>150 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cooked Food</TableCell>
                  <TableCell>100 kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Input placeholder="Food Type" type="text" />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Quantity" type="text" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-red-400">
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function CarrotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
      <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
      <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
