import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - MetaSuperAutoPets</title>
        <meta name="title" content="Contact Us - MetaSuperAutoPets"></meta>
        <meta
          name="description"
          content="Contact - MetaSuperAutoPets."
        />
      </Head>

    <Header />

    <main className="min-h-screen mt-48 text-white px-[5%] text-center">
      <section>        
        <h1 className="text-white text-center text-3xl mb-16 lg:text-5xl">Contact Us</h1>
        <p>If you would like to request a feature, report a bug, or give feedback on the tier list, please feel free to send us a message. Business inquiries as well.</p>

      <a href="mailto:metasuperautopets@gmail.com">metasuperautopets@gmail.com</a>
      </section>
    </main>
    
    <Footer />
  </>
  )
}