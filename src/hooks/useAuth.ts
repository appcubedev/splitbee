import React, { useState } from "react";

export default function useAuth() {
	const [user, setUser] = useState();

	return { user };
}
