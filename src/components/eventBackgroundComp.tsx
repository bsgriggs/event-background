import { CSSProperties, ReactElement, createElement, useEffect } from "react";

interface EventBackgroundCompProps {
    name: string;
    class: string;
    style?: CSSProperties;
    action: () => void;
    delay: number;
}

export function EventBackgroundComp(props: EventBackgroundCompProps): ReactElement {
    useEffect(() => {
        const timeout = setTimeout(() => props.action(), props.delay);

        return () => clearTimeout(timeout);
    }, [props.action, props.delay]);

    return <div id={props.name} className={`widget-event-background ${props.class}`} style={props.style}></div>;
}
