"use client";

import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText: string;
  onContinue: () => void;
}

export default function SuccessMessage({
  title,
  message,
  buttonText,
  onContinue,
}: SuccessMessageProps) {
  return (
    <div className="text-center text-white">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-300 mb-8 max-w-md mx-auto">{message}</p>

      <button
        onClick={onContinue}
        className="px-10 py-3 rounded-md bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90 font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
}
