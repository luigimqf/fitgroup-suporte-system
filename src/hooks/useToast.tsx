import React from "react";
import { ToastPosition, toast as toastfy } from "react-toastify";

interface IToast {
  message: string;
  type: "info" | "error" | "success";
  isLoading?: boolean;
  position: ToastPosition;
}

export function useToast() {
  function toast({ message, type, isLoading, position }: IToast) {
    return toastfy[type](message, {
      position,
      isLoading,
      theme: "dark",
    });
  }
  function dismiss(id: React.ReactText) {
    toastfy.dismiss(id);
  }

  function dismissAll() {
    toastfy.dismiss();
  }

  return { toast, dismiss, dismissAll };
}
