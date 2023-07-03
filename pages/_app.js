import GlobalStyle from "../styles";
import useSWR from "swr";
import { ArtPiecesProvider } from "./ArtPiecesContext";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art/`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <ArtPiecesProvider>
        <GlobalStyle />
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </ArtPiecesProvider>
    </>
  );
}
