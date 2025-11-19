"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(()=>{
    user && checkUser();
  },[user])

  const checkUser= async ()=>{
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl : user?.imageUrl,
      userName : user?.fullName
    });
    console.log(result);

  }
  return (
    <>

    </>
  );
}
