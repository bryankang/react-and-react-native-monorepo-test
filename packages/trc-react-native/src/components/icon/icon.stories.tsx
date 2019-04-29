import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { number, select } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { Icon, IconProps } from "./icon";

storiesOf("Icon", module).add("basic", () => {
    const iconNames = Object.keys(iconCore.unicodes) as IconUnicodeName[];
    const size = number('size', 18);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Icon
                name={select("name", iconNames, iconNames[0])}
                style={{ fontSize: size, lineHeight: size }}
                status={select("status", ["active", "default", "disabled"], "default") as keyof IconProps["status"]}
            />
        </View>
    );
});
