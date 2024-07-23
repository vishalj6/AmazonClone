import React, { Suspense, useContext } from "react";
import { lazy } from 'react';

import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import LazyLoader from "./components/LazyLoader";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContext } from "./context/AuthContext";
// import Your_Account from "./components/Your_Account/Your_Account";
const Account = lazy(() => import("./components/Your_Account/Account"));
const Cart = lazy(() => import("./components/Cart Page/Cart"));
const AddAddress = lazy(() => import("./components/Your_Account/Add_address"));
const Address = lazy(() => import("./components/Your_Account/Address"));
const YourOrders = lazy(() => import("./components/Your_Account/YourOrders"));
const Checkout = lazy(() => import("./components/Your_Account/Checkout"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Orders = lazy(() => import("./components/Your_Account/Orders"));
const Home = lazy(() => import("./Pages/Home"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const BuyPage = lazy(() => import("./Pages/BuyPage"));
// const Others = lazy(() => import("./OTHERS/others"));

const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>

        <Route path="/" element={
          <ErrorBoundary fallback={<div>Something went wrong in Suspense</div>}  >
            <Suspense fallback={<LazyLoader />}>
              <Layout />
            </Suspense>
          </ErrorBoundary>
        } >
          <Route index element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          {/* <Route path="/others" element={<Others />} /> */}
          <Route path="/buy/:productId" element={<BuyPage />} />
          <Route path="/address" element={<RequireAuth loginPath="/signin"><Address /></RequireAuth>} />
          <Route path="/account" element={<RequireAuth loginPath="/signin"><Account /></RequireAuth>} />
          <Route path="/user_add_address" element={<RequireAuth loginPath="/signin"><AddAddress /></RequireAuth>} />
          <Route path="/your_orders" element={<RequireAuth loginPath="/signin"><YourOrders /></RequireAuth>} />
          <Route path="/cart" element={<RequireAuth loginPath="/signin"><Cart /></RequireAuth>} />
        </Route>

        <Route path="/checkout" element={
          <RequireAuth loginPath="/signin" >
            <ErrorBoundary fallback={<div>Something went wrong in Suspense</div>}  >
              <Suspense fallback={<LazyLoader />}>
                <Checkout />
              </Suspense>
            </ErrorBoundary>
          </RequireAuth>
        } />

        <Route path="/signin" element={
          <ErrorBoundary fallback={<div>Something went wrong in Suspense</div>}  >
            <Suspense fallback={<LazyLoader />}>
              <SignIn />
            </Suspense>
          </ErrorBoundary>
        } />

        <Route path="/signup" element={
          <ErrorBoundary fallback={<div>Something went wrong in Suspense</div>}  >
            <Suspense fallback={<LazyLoader />}>
              <SignUp />
            </Suspense>
          </ErrorBoundary>
        } />

      </Routes>
    </div>
  );
};

export default App;
