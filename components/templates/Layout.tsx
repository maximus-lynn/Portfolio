import { FC } from "react";

// Molecules
import Navigation from "../molecules/Navigation";

const Layout: FC = ({ children }) => (
  <>
    <Navigation />
    <main>
      {children}
    </main>
  </>
);

export default Layout;