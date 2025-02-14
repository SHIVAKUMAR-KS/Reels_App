"use client";
import React from 'react'
import {signOut, useSession} from "next-auth/react"
import Link from 'next/link'

function Header() {
    const {data:session} =useSession();

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            
        }
    }
  return (
    <div>
      <button onClick={handleSignOut}>SignOut</button>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
             <Link href="/login">Dashboard</Link>
             <Link href="/register">Dashboard</Link>
        </div>
      )}
    </div>
  )
}