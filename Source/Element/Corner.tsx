import "../Asset/CSS/Corner.css";

declare global {
	interface Window {
		settings: Settings;
	}
}

export const Size = (await import("solid-js")).createSignal(
	window.settings.size
);

await (
	await import("@tauri-apps/api/event")
).listen("size", async (event: { payload: { message: { Size: number } } }) => {
	Size[1](event.payload.message.Size);
});

// biome-ignore lint/suspicious/noExplicitAny:
export default async (Property: any) => (
	<div
		class="Corner"
		data-corner={
			(await import("solid-js")).mergeProps({ id: "Default" }, Property)
				.id
		}
		style={{ "--corner-size": `${Size[0]()}px` }}
	/>
);

import type { Settings } from "../Option/Index.js";
