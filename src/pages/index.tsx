import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Init from "@/components/Init/Init";
import About from "@/components/About/About";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <Navbar/>
      <Init/>
      <About/>
    </>
  );
}
