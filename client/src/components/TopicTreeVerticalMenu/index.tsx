import { compact, uniqueId } from "lodash";
import { FC } from "react";
import styled from "styled-components";
import { TopicTree } from "../../types";
import TopicTreeLink from "../TopicTreeLink";

interface TopicTreeVerticalMenuProps {
  topicTree: TopicTree | never[];
  onClick: (topic: string) => void;
  activeTopic?: string;
  parent?: string;
  first?: boolean;
}

const TopicTreeMenuWrapper = styled("div")`
  padding-left: 18px;

  button {
    margin-bottom: 6px;
  }

  &.ignore-left-padding {
    padding-left: 0px !important;
  }
`;

const TopicTreeVerticalMenu: FC<TopicTreeVerticalMenuProps> = ({
  topicTree,
  parent,
  onClick,
  activeTopic,
  first = false,
}) => (
  <>
    {Object.entries(topicTree).map(([key, value]) => {
      const valueIsString = typeof value === "string";
      const subTopicTree = valueIsString ? [] : (value as unknown as TopicTree);

      const linkValue = compact([parent, key]).join(".");
      const className = first ? "ignore-left-padding" : "";
      const active = linkValue === activeTopic;

      return (
        <TopicTreeMenuWrapper key={uniqueId(key)} className={className}>
          <TopicTreeLink
            value={linkValue}
            label={key}
            onClick={onClick}
            active={active}
          />

          {!valueIsString && (
            <TopicTreeVerticalMenu
              topicTree={subTopicTree}
              onClick={onClick}
              parent={linkValue}
              activeTopic={activeTopic}
            />
          )}
        </TopicTreeMenuWrapper>
      );
    })}
  </>
);

export default TopicTreeVerticalMenu;
