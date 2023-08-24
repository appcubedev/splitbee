import MoneyImg from "assets/images/money.svg";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function login() {
	const width = Dimensions.get("screen").width - 100;

	return (
		<View className="h-screen gap-20 py-20">
			<View className="flex flex-row justify-center">
				<MoneyImg width={width} />
			</View>
			<View className="py-7 px-10">
				<Text className="font-semibold text-3xl text-center">
					Save your time and money
				</Text>
				<Text className="text-center font-light mt-2">
					Enjoy together, happy to share and save your time with transactions at
					home
				</Text>
			</View>
		</View>
	);
}
