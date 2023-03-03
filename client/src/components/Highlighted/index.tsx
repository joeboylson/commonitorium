import { escapeRegExp, isEmpty } from "lodash";
import { FC, useMemo } from "react";

interface HighlightedProps {
  text: string;
  highlight?: string;
}

const Highlighted: FC<HighlightedProps> = ({ text, highlight }) => {
  const regex = useMemo(
    () => new RegExp(`(${escapeRegExp(highlight)})`, "gi"),
    [highlight]
  );

  const parts = useMemo(() => text.split(regex), [regex]);

  if (isEmpty(highlight)) return <div>{text}</div>;

  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};

export default Highlighted;
