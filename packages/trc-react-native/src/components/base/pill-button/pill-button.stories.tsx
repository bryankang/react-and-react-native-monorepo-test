import R from "ramda";
import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { select, boolean, text } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { Text } from "../text/text";
import { PillButton, PillButtonProps } from "./pill-button";
import { action } from "@storybook/addon-actions";

storiesOf("base/PillButton", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as Partial<IconUnicodeName>[];

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <PillButton
                    iconName={select("iconName", iconNames, iconNames[0])}
                    isActive={boolean("isActive", false)}
                    isDisabled={boolean("isDisabled", false)}
                    label={text("label", "Pill")}
                    onIsActiveChange={action("onIsActiveChange")}
                />
            </View>
        );
    });
