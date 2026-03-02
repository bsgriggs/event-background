import { ReactElement, createElement } from "react";

import { EventBackgroundContainerProps } from "../typings/EventBackgroundProps";
import { EventBackgroundComp } from "./components/eventBackgroundComp";
import "./ui/EventBackground.css";
import callMxAction from "./utils/CallMxAction";

export function EventBackground(props: EventBackgroundContainerProps): ReactElement {
    return (
        <EventBackgroundComp
            {...props}
            action={() => {
                callMxAction(props.action, true);
                console.info("EventBackground action executed IN WIDGET");
            }}
        />
    );
}
