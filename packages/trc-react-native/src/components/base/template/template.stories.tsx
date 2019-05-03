import R from "ramda";
import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Template, TemplateProps } from "../template/template";

storiesOf("base/Template", module)
    .add("basic", () => (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Template
                isDisabled={boolean("isDisabled", false) as TemplateProps["isDisabled"]}
                label={text("label", "Click me!")}
                onPress={action("onPress")}
            >
            </Template>
        </View>
    ));
