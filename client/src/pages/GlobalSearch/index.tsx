import { isEmpty } from "lodash";
import Modal from "../../components/Modal";
import PageWrapper from "../../components/PageWrapper";
import QuoteItem from "../../components/QuoteItem";
import { useGlobalSearch } from "../../hooks/useGlobalSearch";

const GlobalSearch = () => {
  const { searchValue, searchResults, setGlobalSearchValue } =
    useGlobalSearch();

  return (
    <PageWrapper>
      <h2>Global Search</h2>
      <input onChange={(e) => setGlobalSearchValue(e.target.value)}></input>
      <p>{searchResults?.length || "0"} Results</p>
      {searchResults && !isEmpty(searchResults)
        ? searchResults.map((i) => (
            <QuoteItem quoteItem={i} highlight={searchValue} />
          ))
        : "No Results"}
    </PageWrapper>
  );
};

export default GlobalSearch;
