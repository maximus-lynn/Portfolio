import { FC } from "react";

// Molecules
import Navigation from "../molecules/navigation";
import Footer from "../molecules/Footer";

const Layout: FC = ({ children }) => (
  <>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;