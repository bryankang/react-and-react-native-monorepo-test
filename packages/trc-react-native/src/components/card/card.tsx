import React, { FC, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../utils/use-theme';
import { getCardStyles } from './get-card-styles';

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

  const cardStyles = getCardStyles({ theme });

  return (
      <View
          style={cardStyles.root}
          {...rest}
      >
        <View style={cardStyles.content}>
          {children}
        </View>
      </View>
  );
}

_Card.defaultProps = defaultProps;

export const Card = _Card;
