import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import { Quote, QuotesSearchResults } from "../types";

export const useGetAllQuotes = () => {
  const [allResults, setAllResults] = useState<Quote[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const url = `${SERVER_URL}/search/all`;

    axios
      .get(url)
      .then((results) => {
        const allQuotesQueryResult = results.data as QuotesSearchResults;
        setAllResults(allQuotesQueryResult.hits.hits);
      })
      .catch(() => setAllResults([]))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    allResults,
  };
};
