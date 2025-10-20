"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { UserProvider } from "@/contexts/UserContext";
import { getFromLocalStorage } from "@/lib/local-storage";
import { redirect } from "next/navigation";

interface DashboardRootLayoutProps {
  children: ReactNode;
}

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps) {
  const [checkedAuth, setCheckedAuth] = useState(false);
  

  useEffect(() => {
    const token = getFromLocalStorage("adsToken");
    // console.log("token", token);
    if (!token) {
      redirect("/sign-in");
    } else {
      setCheckedAuth(true);
    }
  }, []);

  if (!checkedAuth) {
    return null;
  }

  return (
    <>
      <UserProvider>
        <ProtectedRoute>{children}</ProtectedRoute>
      </UserProvider>
    </>
  );
}
