import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
       <header>Header</header>
       <main className="row">
          <aside className="col-4">Aside</aside>
          <section className="col-8">Section</section>
       </main>
       <footer>Footer</footer>
    </>
  );
} 
