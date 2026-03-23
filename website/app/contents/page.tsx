import React from "react";
import Header from "@/features/header";
import Menu from "@/features/menu";
import { ContentsPage } from "@/features/contents/page";

export default function Contents() {
    return (
        <>
            <Header />
            <Menu />
            <ContentsPage />
        </>
    );
}
