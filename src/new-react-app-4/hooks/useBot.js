import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const useBot = () => {
  const { data, mutate } = useSWR(
    "https://mocki.io/v1/bd249ba1-cfd4-4669-81ad-e75ab165cfb6",
    fetcher
  );

  return {
    data,
    mutate,
  };
};

export default useBot;
