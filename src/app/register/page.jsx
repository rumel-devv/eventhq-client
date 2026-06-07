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
  Select,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";

import { useForm } from "react-hook-form";

import { FaUser, FaEnvelope, FaLock, FaImage, FaGoogle } from "react-icons/fa";

import Logo from "@/components/Logo";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { uploadImage } from "@/lib/utilis/uploadImage";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const imageUrl = await uploadImage(imageFile);
    // console.log(imageUrl);
    try {
      const res = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        image:imageUrl,
        role: data.role,
      });

      if (res.error) {
        toast.error(res.error.message || "Registration failed!");
        return;
      }

      reset();
      toast.success("Registration successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-550 via-slate-900 to-black px-4 py-10">
      <Card className="w-full max-w-xl bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <CardHeader className="flex flex-col items-center text-center gap-2 pb-6">
          <Logo />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-pink-500 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-sm text-slate-400">
            Join Ticketo and start booking events instantly
          </p>
        </CardHeader>

        <CardBody className="space-y-6">
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-2 w-full">
              <Label>Full Name</Label>
              <Input
                placeholder="John Doe"
                startContent={<FaUser className="text-slate-400 text-sm" />}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

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
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Profile Image */}
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="image">Profile Image URL</Label>

              <Input
                {...register("image", { required: "image is Required" })}
                type="file"
                accept="image/*"
                id="image"
                placeholder="https://example.com/avatar.jpg"
                labelPlacement="outside"
                startContent={<FaImage className="text-slate-400 text-sm" />}
                className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:!border-pink-500"
              />
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
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Role Select (simple register) */}
            <div className="flex flex-col gap-2 w-full">
              <Label>Select Role</Label>

              <select
                className="w-full h-12 bg-slate-900/50 border border-white/10 rounded-xl px-3 text-white"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select role</option>
                <option value="attendee">Attendee</option>
                <option value="organizer">Organizer</option>
              </select>

              {errors.role && (
                <p className="text-red-500 text-xs">{errors.role.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-12 mt-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Create Account
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

          {/* Google */}
          <Button
            variant="bordered"
            className="w-full h-11 border-white/10 hover:bg-white/5 text-white rounded-xl"
            startContent={<FaGoogle className="text-pink-500" />}
          >
            Continue with Google
          </Button>

          {/* Login */}
          <p className="text-center text-sm text-slate-400 pt-2">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-pink-500 hover:underline font-medium"
            >
              Log in
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
