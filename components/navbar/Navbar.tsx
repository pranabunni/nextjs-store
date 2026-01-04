import Container from "@/components/global/Container";
import Logo from "@/components/navbar/Logo";
import SearchInput from "@/components/navbar/SearchInput";
import Cart from "@/components/navbar/CartButton";
import Theme from "@/components/navbar/Theme";
import Links from "@/components/navbar/Links";
import {Suspense} from "react";

export default function NavBar() {
    return (
      <nav className="border-b">
          <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'">
              <Logo/>
              <Suspense>
                  <SearchInput />
              </Suspense>
              <div className="flex gap-4 items-center">
                  <Cart />
                  <Theme />
                  <Links />
              </div>
          </Container>
      </nav>
    );
}