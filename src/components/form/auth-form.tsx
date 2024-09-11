"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { BottomGradient } from "../ui/bottom-gradient";
import api from "@/lib/api";
import { useAuthStore } from "@/store/platform/platform-store-provider";
export const AuthForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { setIsAuth } = useAuthStore((state) => state);
  const handleLogin = async (e: any) => {
    api
      .post("/auth/login", {
        username: e.username,
        password: e.password,
      })
      .then((res) => {
        setIsAuth(true, e.username, res.data.token);
        router.push("/chat");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <div className="flex items-center flex-col justify-center w-[400px] h-[250px] rounded-lg">
          <form onSubmit={handleSubmit(handleLogin)} className="flex items-center flex-col gap-4">
            <div className="space-y-1">
              <Label>Username</Label>
              <Input {...register("username")} type="text" placeholder="Enter a username" />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input {...register("password")} type="password" placeholder="Enter a password" />
            </div>
            <div className="w-full mt-4">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign In &rarr;
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
