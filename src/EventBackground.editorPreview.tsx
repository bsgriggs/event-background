import { ReactElement, createElement } from "react";
import { EventBackgroundComp } from "./components/eventBackgroundComp";
import { EventBackgroundPreviewProps } from "../typings/EventBackgroundProps";

export function preview(props: EventBackgroundPreviewProps): ReactElement {
    return (
        <EventBackgroundComp
            name={""}
            class={props.class}
            style={undefined}
            action={() => console.debug("EventBackground preview action executed")}
            delay={100}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/EventBackground.css");
}
