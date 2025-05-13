"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { z } from "zod"

export default function SignInForm(){
  const router = useRouter()
  const {signIn, isLoaded, setActive} = useSignIn()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  return (
    <h1>Return a signin form</h1>
  )
}