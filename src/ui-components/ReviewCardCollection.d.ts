/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewCardProps } from "./ReviewCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCardCollectionOverridesProps = {
    ReviewCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ReviewCard?: ReviewCardProps;
} & EscapeHatchProps;
export declare type ReviewCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ReviewCardProps;
} & {
    overrides?: ReviewCardCollectionOverridesProps | undefined | null;
}>;
export default function ReviewCardCollection(props: ReviewCardCollectionProps): React.ReactElement;
