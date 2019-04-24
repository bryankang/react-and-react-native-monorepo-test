import React, { FC, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
// import { getCardStyles } from './get-card-styles';

export interface CardProps {
  children?: ReactNode;
  [prop: string]: any;
};

const defaultProps: CardProps = {
  children: null,
};

const _Card: FC<CardProps> = (props): React.ReactElement => {
  const theme = useTheme();

  const {
      children,
      ...rest
  } = props;

  // const cardStyles = getCardStyles({ theme });

  return (
      <View
          // style={cardStyles.root}
          {...rest}
      >
          {children}
      </View>
  );
}

_Card.defaultProps = defaultProps;

export const Card = _Card;
