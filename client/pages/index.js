import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header.jsx";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={s.container}>
        <h1>MAIN PAGE</h1>
      </div>
    </>
  );
}
