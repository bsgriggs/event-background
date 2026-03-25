import { ReactElement, createElement } from "react";

import { EventBackgroundContainerProps } from "../typings/EventBackgroundProps";
import { EventBackgroundComp } from "./components/eventBackgroundComp";
import "./ui/EventBackground.css";
import callMxAction from "./utils/CallMxAction";

export function EventBackground(props: EventBackgroundContainerProps): ReactElement {
    return (
        <EventBackgroundComp
            {...props}
            delay={props.delay && props.delay >= 0 ? props.delay : 0}
            className={props.class}
            action={() => {
                if (props.debugMode) {
                    console.info("EventBackground action starting ...");
                }
                callMxAction(props.action, true);
                if (props.debugMode) {
                    console.info("EventBackground action finished");
                }
            }}
        />
    );
}
