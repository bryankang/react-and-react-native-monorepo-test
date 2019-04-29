import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { select } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainer-road/trc-core";
import { SafeAreaView } from "../safe-area-view/safe-area-view";
import { Icon } from "./icon";

storiesOf("Icon", module).add("basic", () => {
    const iconNames = Object.keys(iconCore.unicodes) as IconUnicodeName[];

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Icon
                name={select("name", iconNames, iconNames[0])}
                status={select("status", ["active", "default", "disabled"], "default")}
            />
        </View>
    );
});
