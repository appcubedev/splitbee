import { Redirect } from "expo-router";
import useAuth from "hooks/useAuth";
import React from "react";
import { Text, View } from "react-native";

export default function home() {
	const { user } = useAuth();

	if (!user) {
		return <Redirect href="/login" />;
	}

	return (
		<View>
			<Text className="text-red-500">Save your money</Text>
		</View>
	);
}
