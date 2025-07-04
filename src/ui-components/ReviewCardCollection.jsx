/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Testimonial } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ReviewCard from "./ReviewCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ReviewCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "ReviewCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ReviewCard
          testimonyModel={item}
          height="auto"
          width="auto"
          margin="auto auto 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ReviewCard>
      )}
    </Collection>
  );
}
