"use client";

import { Input } from "@/components/ui/input";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function InputField({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-semibold text-[#121212]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-archivo text-[14px] bg-white font-normal leading-[140%]"
      />
    </div>
  );
}
