import { PayBlock } from "@/components/Pay"
import { SignIn } from "@/components/SignIn"
import { VerifyBlock } from "@/components/Verify"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3 pt-20">
        <SignIn />
        <VerifyBlock />
        <PayBlock />
      </main>
    </>
  )
}
