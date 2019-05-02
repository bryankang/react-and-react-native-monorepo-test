import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "../safe-area-view/safe-area-view";
import { Card } from "./card";

storiesOf("base/Card", module).add("default view", () => (
    <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
        <View style={{ width: 320, height: 240 }}>
            <Card>
                <Text>hi</Text>
                <View style={{ backgroundColor: "lightpink" }} />
            </Card>
        </View>
    </SafeAreaView>
));
