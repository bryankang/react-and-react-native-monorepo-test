import R from "ramda";
import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { radios, select } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { SafeAreaView } from "../safe-area-view/safe-area-view";
import { Text } from "../text/text";
import { Icon, IconProps } from "./icon";

storiesOf("base/Icon", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as IconUnicodeName[];

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Icon
                    name={select("name", iconNames, iconNames[0])}
                    size={
                        radios(
                            "size",
                            { xss: "xxs", xs: "xs", s: "s", m: "m", l: "l", xl: "xl", xxl: "xxl"},
                            "m",
                        ) as IconProps["size"]
                    }
                />
            </View>
        );
    })
    .add("all", () => (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap"  }}>
                    {Object.keys(iconCore.unicodes).map(name => (
                        <View
                            key={name}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: 80,
                                height: 80,
                            }}
                        >
                            <Icon name={name as IconProps["name"]} size="xs" style={{ marginBottom: 8 }}/>
                            <Text category="paragraph-xs" style={{ textAlign: "center" }}>
                                {name}
                            </Text>
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    ));
