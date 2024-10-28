import Navigation from "@/ui/components/organism/Navigation";
import Layout from "@/ui/components/atom/Layout";
import HomePage from "@/ui/pages/Home";
import Footer from "@/ui/components/organism/Footer";

export default function Home() {
  return (
    <Layout>
      <Navigation/>
      <HomePage/>
      <Footer/>
    </Layout>
  );
}
