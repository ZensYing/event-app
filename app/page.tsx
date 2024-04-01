import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "../components/ui/button";
export default function Home() {
  return (
    <main>
      <Button variant="destructive" className="px-10">Delete</Button>
    </main>
  )
}
