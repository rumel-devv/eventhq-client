"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent as CardBody,
  Input,
  Button,
  Label,
  Form,
} from "@heroui/react";

import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

import Logo from "@/components/Logo";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (data) => {
    try {
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (res.error) {
        toast.error(res.error.message || "Login failed!");
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-10">
      <Card className="w-full max-w-xl bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <CardHeader className="flex flex-col items-center text-center gap-2 pb-6">
          <Logo />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-pink-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400">
            Sign in to your Ticketo account
          </p>
        </CardHeader>

        <CardBody className="space-y-6">
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="john@example.com"
                startContent={<FaEnvelope className="text-slate-400 text-sm" />}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 w-full">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                startContent={<FaLock className="text-slate-400 text-sm" />}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 mt-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Sign In
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-white/10" />
            <span className="text-xs text-slate-500 uppercase">
              Or continue with
            </span>
            <div className="flex-1 border-t border-white/10" />
          </div>

          {/* Google Login */}
        <Button
            variant="bordered"
             onClick={handleGoogle}
            className="w-full h-11 rounded-xl text-white border border-white/30 hover:bg-white/10 transition"
          >
            <FaGoogle className="text-red-400 text-lg" />
            Continue with Google
          </Button>


          {/* Register Link */}
          <p className="text-center text-sm text-slate-400 pt-2">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="text-pink-500 hover:underline font-medium"
            >
              Create Account
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}