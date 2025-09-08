"use client";

import React, { useState } from "react";
import CustomButton from "@/components/custom/Button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

const SignupCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isEmailValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isFormValid =
    isEmailValid(email) && password.length >= 6 && confirmPassword === password;

  return (
    <Card className="w-[456px] font-sans  bg-[#FAF9F5] rounded-[32px] border border-[#1F1E1D] border-opacity-15 px-3.5 opacity-100">
      <CardContent>
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block  text-sm font-semibold text-[#121212]"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-archivo text-[14px] bg-white font-normal leading-[140%]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block  text-sm font-medium text-[#121212]"
            >
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" text-[14px] font-normal bg-white leading-[140%] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <IconEye size={18} />
                ) : (
                  <IconEyeClosed size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1 block  text-sm font-medium text-[#121212]"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" text-[14px] bg-white font-normal leading-[140%] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? (
                  <IconEye size={18} />
                ) : (
                  <IconEyeClosed size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Link href={"/auth/login"}>
            <CustomButton
              text="CREATE ACCOUNT"
              width="100%"
              disabled={!isFormValid}
            />
          </Link>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center ">
        <p className="font-archivo text-sm leading-1.4 text-[#73726C]">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-[#141413]">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
