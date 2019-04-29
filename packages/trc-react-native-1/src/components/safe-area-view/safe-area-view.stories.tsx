import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "../safe-area-view/safe-area-view";

storiesOf("SafeAreaView", module).add("basic", () => (
    <SafeAreaView
        style={{
            flex: 1,
            width: "100%",
            backgroundColor: "lightgray",
        }}
    >
        <View
            style={{
                flex: 1,
                backgroundColor: "lightblue",
                borderWidth: 8,
                borderColor: "lightpink",
            }}
        />
    </SafeAreaView>
));
