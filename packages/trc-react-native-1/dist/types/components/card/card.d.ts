import React, { ReactNode } from "react";
export interface CardProps {
    children?: ReactNode;
    [prop: string]: any;
}
export declare const Card: React.FunctionComponent<CardProps>;
