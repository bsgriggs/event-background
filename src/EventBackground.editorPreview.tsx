import { ReactElement, createElement } from "react";
import { EventBackgroundPreviewProps } from "../typings/EventBackgroundProps";
import { getCustomCaption } from "./EventBackground.editorConfig";

export function preview(props: EventBackgroundPreviewProps): ReactElement {
    return (
        <div
            style={{
                backgroundColor: props.action === null ? "#ff9d0b" : "#FFFFFF",
                border: "1px solid black",
                borderRadius: "1px",
                padding: "4px",
                display: "flex",
                gap: "4px",
                alignItems: "center"
            }}
        >
            <img
                style={{ height: "20px", width: "20px" }}
                src="data:image/png;base64,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"
            />
            <span>{getCustomCaption(props)}</span>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/EventBackground.css");
}
