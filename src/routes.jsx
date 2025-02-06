import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Products from "./pages/Products"
import Cart from "./components/Cart"
import About from "./pages/About"
import Sustainability from "./pages/Sustainability"
import CareGuide from "./pages/CareGuide"
import FAQ from "./pages/FAQ"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Careers from "./pages/Careers"
import ShippingReturns from "./pages/ShippingReturns"
import SizeGuide from "./pages/SizeGuide"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sustainability",
        element: <Sustainability />,
      },
      {
        path: "care-guide",
        element: <CareGuide />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "shipping-returns",
        element: <ShippingReturns />,
      },
      {
        path: "size-guide",
        element: <SizeGuide />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-of-service",
        element: <TermsOfService />,
      },
    ],
  },
])

