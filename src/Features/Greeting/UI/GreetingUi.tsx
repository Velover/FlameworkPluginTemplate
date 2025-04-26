import { useFlameworkDependency } from "@rbxts/flamework-react-utils";
import React, { useRef, useState } from "@rbxts/react";
import { GuiResources } from "Features/PluginUI/Resources/GuiResources";
import { GreetingController } from "../Controllers/GreetingController";

export function GreetingUi() {
	const [name, SetName] = useState("");
	const textBoxRef = useRef<TextBox>();
	const greetingController = useFlameworkDependency<GreetingController>();

	const HandleClick = () => {
		if (textBoxRef.current === undefined) return;
		SetName(textBoxRef.current.Text);
	};

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={new Color3(1, 1, 1)}
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(1.0, 1.0)}
		>
			<uilistlayout
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Padding={new UDim(0.0, 5)}
			/>
			<textlabel
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderSizePixel={0}
				Size={new UDim2(1.0, 0, 0.0, 30)}
				FontFace={GuiResources.FONT_BOLD}
				Text={greetingController.Greet(name)}
				TextColor3={new Color3(0, 0, 0)}
				TextSize={14}
			/>
			<textbox
				ref={textBoxRef}
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderColor3={new Color3(0, 0, 0)}
				BorderSizePixel={0}
				Size={new UDim2(1.0, 0, 0.0, 30)}
				FontFace={GuiResources.FONT_REGULAR}
				TextColor3={new Color3(0, 0, 0)}
				TextSize={14}
			>
				<uicorner CornerRadius={new UDim(0.0, 4)} />
				<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
			</textbox>
			<textbutton
				BackgroundColor3={new Color3(1, 1, 1)}
				BorderColor3={new Color3(0, 0, 0)}
				BorderSizePixel={0}
				Size={UDim2.fromOffset(100, 30)}
				FontFace={GuiResources.FONT_BOLD}
				Text={"Say Hello"}
				TextColor3={new Color3(0, 0, 0)}
				TextSize={14}
				Event={{
					MouseButton1Click: HandleClick,
				}}
			>
				<uicorner CornerRadius={new UDim(0.0, 4)} />
				<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
			</textbutton>
		</frame>
	);
}
