import { CSSProperties, ReactElement, createElement, useEffect, useMemo } from "react";

interface EventBackgroundCompProps {
    name: string;
    className: string;
    style?: CSSProperties;
    action: () => void;
    delay: number;
    debugMode: boolean;
}

export function EventBackgroundComp({
    name,
    className,
    style,
    action,
    delay,
    debugMode
}: EventBackgroundCompProps): ReactElement {
    useEffect(() => {
        if (delay !== 0) {
            const timeout = setTimeout(() => action(), delay);
            if (debugMode) {
                console.info(`Scheduling event "${name}" with delay ${delay / 1000} seconds`);
            }

            return () => {
                if (debugMode) {
                    console.info(`Destroying event "${name}"`);
                }

                clearTimeout(timeout);
            };
        } else {
            action();
        }
    }, [action, delay, debugMode, name]);

    const resultStyle: CSSProperties | undefined = useMemo(
        () => (debugMode ? ({ ...style, backgroundColor: "red", padding: "4px" } as CSSProperties) : style),
        [style, debugMode]
    );

    return (
        <div id={name} className={`widget-event-background ${className}`} style={resultStyle}>
            {debugMode && (
                <span className="mx-text">{`[DEBUG MODE] Event Background widget "${name}" with a delay of ${
                    delay / 1000
                } seconds`}</span>
            )}
        </div>
    );
}
