import { FC, ReactNode, CSSProperties, useEffect, useContext } from "react";
import { styles } from "./card.styles";
import { useTheme } from '../../hooks/useTheme';

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

    return (
        <div
            css={styles.root({ theme })}
            {...rest}
        >
            {children}
        </div>
    );
}

_Card.defaultProps = defaultProps;

export const Card = _Card;
