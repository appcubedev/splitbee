import Navbar from "components/Navbar";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function layout() {
	return (
		<SafeAreaView>
			<Navbar />
			<Slot />
		</SafeAreaView>
	);
}