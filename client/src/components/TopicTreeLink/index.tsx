import { FC } from "react";
import styled from "styled-components";
import { RoundedButton } from "../RoundedButton";

interface TopicTreeLinkProps {
  label: string;
  value: string;
  onClick: (value: string) => void;
  active?: boolean;
}

const TopicTreeLink: FC<TopicTreeLinkProps> = ({
  label,
  value,
  onClick,
  active = false,
}) => {
  const _onClick = () => onClick(value);
  return (
    <RoundedButton onClick={_onClick} data-active={active}>
      {label}
    </RoundedButton>
  );
};

export default TopicTreeLink;
