import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Occasions from "@/components/Occasions";
import Products from "@/components/Products";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Occasions />
      <Products />
      <OrderForm />
      <Footer />
    </main>
  );
}
