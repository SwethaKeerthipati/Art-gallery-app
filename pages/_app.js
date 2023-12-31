import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";

import Layout from "../components/Layout/Layout";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({
  Component,
  pageProps,
  artPieces,
  toggleFavorite,
}) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art/`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Layout artPieces={artPieces}>
        <Component
          {...pageProps}
          data={data}
          toggleFavorite={toggleFavorite}
          artPiecesInfo={artPiecesInfo}
          updateArtPiecesInfo={updateArtPiecesInfo}
        />
      </Layout>
    </SWRConfig>
  );
}
