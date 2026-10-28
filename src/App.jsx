import AnnouncementBar from "./components/layout/AnnouncementBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/cart/CartDrawer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
