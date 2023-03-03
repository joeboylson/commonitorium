import { first, get, isEmpty, keys, keysIn, omit, values } from "lodash";
import { FC, useMemo } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import PageWrapper from "../../components/PageWrapper";
import { useGlobalSearch } from "../../hooks/useGlobalSearch";
import { Quote } from "../../types";
import Description from "../Description";
import Highlighted from "../Highlighted";
import Modal from "../Modal";
import {
  HighlightedKeyValueWrapper,
  QuoteContent,
  QuoteItemFooter,
  QuoteItemModalContentWrapper,
  QuoteItemWrapper,
} from "./StyledComponents";

interface QuoteItemProps {
  quoteItem: Quote;
  highlight?: string;
  highlightedKeys?: string[];
}

const QuoteItem: FC<QuoteItemProps> = ({
  quoteItem,
  highlight,
  highlightedKeys = [],
}) => {
  const { quote, author } = quoteItem._source;

  const descriptionContent = useMemo(() => {
    const _source = omit(quoteItem._source, ["quote"]);

    const contentKeys = keys(_source);
    return contentKeys.reduce((accumulator, _key) => {
      return {
        ...accumulator,
        [_key]: get(quoteItem._source, _key).toString(),
      };
    }, {});
  }, []);

  const showHighlightedKeys = useMemo(
    () => !isEmpty(highlightedKeys),
    [highlightedKeys]
  );

  const modalTitle = useMemo(() => `Quote by: ${author}`, [author]);

  const highlightedKeyValues = useMemo(() => {
    if (!showHighlightedKeys) return [];

    const _entries = Object.entries(quoteItem._source);
    return _entries.reduce((accumulator, current) => {
      const [_key, _value] = current;
      if (highlightedKeys.includes(_key)) {
        const valueIsString = typeof _value === "string";
        const normalizedValue = valueIsString
          ? _value
          : (_value as unknown as string[]).join(", ");

        accumulator.push({ [_key]: normalizedValue });
      }
      return accumulator;
    }, [] as Array<Record<string, any>>);
  }, [showHighlightedKeys, highlightedKeys]);

  return (
    <QuoteItemWrapper>
      {showHighlightedKeys && (
        <HighlightedKeyValueWrapper>
          {highlightedKeyValues.map((h) => {
            const _key = first(keys(h));
            const _value = first(values(h));

            return (
              <Highlighted highlight={highlight} text={`${_key}: ${_value}`} />
            );
          })}
        </HighlightedKeyValueWrapper>
      )}

      <QuoteContent>
        <Highlighted highlight={highlight} text={quote} />
      </QuoteContent>

      <QuoteItemFooter>
        <Modal title={modalTitle} openButtonLabel="View Details">
          <QuoteItemModalContentWrapper>
            <QuoteContent>
              <Highlighted highlight={highlight} text={quote} />
            </QuoteContent>
            <Description data={descriptionContent} />
          </QuoteItemModalContentWrapper>
        </Modal>
      </QuoteItemFooter>
    </QuoteItemWrapper>
  );
};

export default QuoteItem;
