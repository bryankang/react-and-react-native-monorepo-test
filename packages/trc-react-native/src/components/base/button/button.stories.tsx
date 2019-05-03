import React, { useState, FC } from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, radios, select, text } from "@storybook/addon-knobs";
import { iconCore } from "@trainerroad/trc-core";
import { Button, ButtonProps } from "./button";

storiesOf("base/Button", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes);

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button
                    variant={radios(
                        "variant",
                        {
                            contained: "contained",
                            outlined: "outlined",
                            pill: "pill",
                        },
                        "contained") as ButtonProps["variant"]}
                    color={radios(
                        "color",
                        {
                            primary: "primary",
                            secondary: "secondary",
                            success: "success",
                            info: "info",
                            warning: "warning",
                            danger: "danger"
                        },
                        "primary") as ButtonProps["color"]}
                    size={radios("size", { s: "s", m: "m", l: "l" }, "m") as ButtonProps["size"]}
                    isSelected={boolean("isSelected", false)}
                    hasIcon={boolean("hasIcon", false)}
                    iconName={select("iconName", iconNames, iconNames[0]) as ButtonProps["iconName"]}
                    isFluid={boolean("isFluid", false)}
                    isDisabled={boolean("isDisabled", false)}
                    onPress={action('onPress')}
                >
                    {text("children", "Button")}
                </Button>
            </View>
        );
    })
    .add("dynamic", () => {
        const DynamicButton: FC = () => {
            const [isSelected, setIsSelected] = useState(false);

            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Button
                        variant="pill"
                        label={isSelected ? "Selected" : "Deselected"}
                        isSelected={isSelected}
                        onIsSelectedChange={(e, value) => setIsSelected(value)}
                    />
                </View>
            )
        }

        return <DynamicButton />;
    });
