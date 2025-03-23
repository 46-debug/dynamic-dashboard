"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/dashboard/Components/Header";
import SideBar from "@/app/dashboard/Components/SideBar";

export default function RootLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="h-[100%] overflow-hidden p-2 flex flex-col gap-2">
            <div className="h-[10%]">
                <Header />
            </div>
            <div className="flex h-[90%] gap-2">
                <aside>
                    <SideBar />
                </aside>
                <main className="w-full">{children}</main>
            </div>
        </div>
    );
}
