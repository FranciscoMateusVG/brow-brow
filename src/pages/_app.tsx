import { type AppType } from "next/app";
import { api } from "../utils/api";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../styles/globals.css";
import Layout from "../containers/layout/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default api.withTRPC(MyApp);
