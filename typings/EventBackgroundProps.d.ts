/**
 * This file was generated from EventBackground.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface EventBackgroundContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    action?: ActionValue;
    delay: number;
}

export interface EventBackgroundPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    action: {} | null;
    delay: number | null;
}
