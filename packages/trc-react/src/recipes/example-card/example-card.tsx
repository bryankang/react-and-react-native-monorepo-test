import React, { FC, ReactNode, MouseEvent, CSSProperties, useEffect, useContext } from "react";
import { getExampleCardStyles } from "./get-example-card-styles";
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../../components/card/card';
import { Button } from '../../components/button/button';
import { exampleCardCore } from '@trainer-road/trc-core';

export interface ExampleCardProps {
    /** label to use for the confirmation button */
    confirmLabel?: string;
    /** duration in ms */
    duration?: number;
    /** label to use for duration */
    durationLabel?: string;
    /** if no value is provided, a button won't be shown */
    onConfirm?: (e: MouseEvent) => void;
    /** tss as integer */
    tss?: number;
    /** label to use for tss */
    tssLabel?: string;
    [prop: string]: any;
};


const defaultProps: ExampleCardProps = {
    duration: 0,
    durationLabel: 'Duration',
    onConfirm: undefined,
    confirmLabel: 'Confirm',
    tss: 0,
    tssLabel: 'TSS',
};

const _ExampleCard: FC<ExampleCardProps> = (props): React.ReactElement => {
    const theme = useTheme();

    const {
        confirmLabel,
        duration,
        durationLabel,
        onConfirm,
        tss,
        tssLabel,
        ...rest
    } = props;

    const styles = getExampleCardStyles({ theme, props });

    return (
        <div
            css={styles.root}
            {...rest}
        >
            <Card>
                <div css={styles.row}>
                    <div css={styles.col}>
                        <div css={styles.number}>
                            {exampleCardCore.formatHoursAndMinutes(duration!)}
                            <span css={styles.seconds}>
                                :{exampleCardCore.formatSeconds(duration!)}
                            </span>
                        </div>
                        <div css={styles.overline}>{durationLabel}</div>
                    </div>
                    <div css={styles.col}>
                        <div css={styles.number}>{tss}</div>
                        <div css={styles.overline}>{tssLabel}</div>
                    </div>
                    <div css={[styles.col, styles.confirm]}>
                        <Button
                            intent="primary"
                            onClick={onConfirm}
                            variant="contained"
                        >
                            {confirmLabel}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

_ExampleCard.defaultProps = defaultProps;

export const ExampleCard = _ExampleCard;
