import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "ToDo Lit Test",
	description: "todo list next",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light">
			<body className="">
				<div>{children}</div>
			</body>
		</html>
	);
}
