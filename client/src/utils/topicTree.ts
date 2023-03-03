import { cloneDeep, set } from "lodash";
import { Quote } from "../types";
import { TopicTree } from "../types";

export const generateTopicTreeFromQuotes = (quotes: Quote[]) => {
  const topicTree: TopicTree = quotes.reduce((previousValue, currentValue) => {
    const resultTopics = currentValue._source.topictree;
    const _previousValue = cloneDeep(previousValue);

    resultTopics.forEach((topicString) => {
      const topicsPathArray = topicString.split(".");
      set(_previousValue, topicsPathArray, {});
    });

    return _previousValue;
  }, {});

  return topicTree;
};
