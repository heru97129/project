

import Nav from "../../../components/Nav/Nav"
import Footer from "../../../components/footer/Footer"

export default function BasicLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav />
   
        {children}

        <Footer />
      </section>
    )
  }