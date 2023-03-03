import axios from "axios";
import { debounce, isEmpty } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { Quote, QuotesSearchResults } from "../types";

export const useGlobalSearch = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchResults, setSearchResults] = useState<Quote[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const setGlobalSearchValue = useMemo(() => {
    return debounce(setSearchValue, 500);
  }, []);

  useEffect(() => {
    if (isEmpty(searchValue)) {
      setSearchResults([]);
      return;
    }

    setLoading(true)
    const url = `/search/global?search=${searchValue}`;
    axios
      .get(url)
      .then((results) => {
        const globalSearchResults = results.data as QuotesSearchResults;
        setSearchResults(globalSearchResults.hits.hits);
      })
      .catch(() => setSearchResults([]))
      .finally(() => setLoading(false));
  }, [searchValue]);

  return {
    loading,
    searchValue,
    searchResults,
    setGlobalSearchValue,
  };
};
