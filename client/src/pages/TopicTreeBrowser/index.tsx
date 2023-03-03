import { isEmpty, get as getProperty, compact, isEqual, last } from "lodash";
import { useMemo, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import QuoteItem from "../../components/QuoteItem";
import TopicTreeLink from "../../components/TopicTreeLink";
import TopicTreeVerticalMenu from "../../components/TopicTreeVerticalMenu";
import { useGetAllQuotes } from "../../hooks/useGetAllQuotes";
import { generateTopicTreeFromQuotes } from "../../utils";
import {
  BreadCrumbsWrapper,
  QuotesResultsWrapper,
  ResultsByTopicWrapper,
  TopicTreePageWrapper,
  TopicTreeVerticalMenuWrapper,
} from "./StyledComponents";

const TopicTreeBrowser = () => {
  const { loading, allResults } = useGetAllQuotes();

  const [topicTreeSearch, setTopicTreeSearch] = useState<string>();

  const breadCrumbs = useMemo(() => {
    const indexBreadCrumb = {
      label: "○",
      value: "",
    };

    if (!topicTreeSearch) return [indexBreadCrumb];

    const _breadCrumbs = topicTreeSearch.split(".").map((label, i, array) => {
      return {
        label,
        value: [...array.slice(0, i), label].join("."),
      };
    });

    return [indexBreadCrumb, ..._breadCrumbs];
  }, [topicTreeSearch]);

  const topicTree = useMemo(() => {
    if (loading) return [];
    if (!allResults || isEmpty(allResults)) return [];
    return generateTopicTreeFromQuotes(allResults);
  }, [loading, allResults]);

  const childTopics = useMemo(() => {
    const topicsPathArray = topicTreeSearch?.split(".") || [];
    const _topicTree = topicTreeSearch
      ? getProperty(topicTree, topicsPathArray)
      : topicTree;
    const _keys = Object.keys(_topicTree);
    return _keys.map((label) => {
      return {
        label,
        value: compact([topicTreeSearch, label]).join("."),
      };
    });
  }, [topicTree, topicTreeSearch]);

  const resultsByTopic = useMemo(() => {
    if (!allResults || !topicTreeSearch) return [];
    return allResults.filter((quote) =>
      quote._source.topictree.includes(topicTreeSearch)
    );
  }, [allResults, topicTreeSearch]);

  if (loading) return <p>loading . . .</p>;

  return (
    <PageWrapper>
      <TopicTreePageWrapper>
        <TopicTreeVerticalMenuWrapper>
          <TopicTreeVerticalMenu
            topicTree={topicTree}
            onClick={setTopicTreeSearch}
            activeTopic={topicTreeSearch}
            first
          />
        </TopicTreeVerticalMenuWrapper>

        <ResultsByTopicWrapper>
          <BreadCrumbsWrapper>
            {breadCrumbs.map((b) => {
              const active = isEqual(last(breadCrumbs), b);

              return (
                <TopicTreeLink
                  {...b}
                  onClick={setTopicTreeSearch}
                  active={active}
                />
              );
            })}
          </BreadCrumbsWrapper>

          <p>
            {resultsByTopic.length}{" "}
            {resultsByTopic.length === 1 ? "result" : "results"}{" "}
          </p>

          <QuotesResultsWrapper>
            {resultsByTopic.map((quote) => (
              <QuoteItem
                quoteItem={quote}
                highlight={topicTreeSearch}
                highlightedKeys={["topictree"]}
              />
            ))}
          </QuotesResultsWrapper>
        </ResultsByTopicWrapper>
      </TopicTreePageWrapper>
    </PageWrapper>
  );
};

export default TopicTreeBrowser;
