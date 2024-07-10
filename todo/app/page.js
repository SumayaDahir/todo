import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "next/image";
import AddToDoForm from "./components/AddToDoForm";

export default function Home() {
  return (
    <main className="b">
<Header />
<AddToDoForm />
<Footer />
    </main>
  );
}
