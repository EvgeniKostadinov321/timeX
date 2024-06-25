import { Outlet } from "react-router-dom";
import { Suspense } from "react"
import Navigation from "./nav/Navigation";
import  Loader  from '../components/Loader'
import Footer from "./Footer/Footer";

export default function RootLayout() {
  return (
    <>
        <Navigation></Navigation>
        <main >
              <Suspense fallback={<Loader>Loading...</Loader>}>
                  <Outlet />
              </Suspense>
        </main>
        <Footer></Footer>
        
    </>
  )
}
