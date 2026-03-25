import { EventBackgroundPreviewProps } from "../typings/EventBackgroundProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: EventBackgroundPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}

export function check(_values: EventBackgroundPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    if (_values.delay === undefined || _values.delay === null || _values.delay < 0) {
        errors.push({
            property: `delay`,
            message: `Delay must be greater than or equal to 0`,
            url: "https://github.com/bsgriggs/event-background"
        });
    }
    return errors;
}

export function getPreview(_values: EventBackgroundPreviewProps, isDarkMode: boolean): PreviewProps {
    // Customize your pluggable widget appearance for Studio Pro.
    const mainContent: PreviewProps = {
        type: "RowLayout",
        columnSize: "grow",
        backgroundColor:
            _values.action === null ? (isDarkMode ? "#d88911" : "#ff9d0b") : isDarkMode ? "#505050" : "#d8d8d8",
        borders: true,
        borderWidth: 1,
        borderRadius: 1,
        children: [
            {
                type: "Container",
                padding: 4,
                grow: 0,
                children: [
                    {
                        type: "Image",
                        width: 20,
                        height: 20,
                        data: "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"
                    }
                ]
            },
            {
                type: "RowLayout",
                padding: 4,
                columnSize: "grow",
                grow: 1,
                children: [
                    {
                        type: "Text",
                        fontColor: isDarkMode ? "#FFFFFF" : "#252525",
                        content: getCustomCaption(_values)
                    }
                ]
            }
        ]
    };

    return {
        type: "Container",
        children: [mainContent]
    };
}

export function getCustomCaption(_values: EventBackgroundPreviewProps): string {
    return `${_values.debugMode ? "[DEBUG MODE] " : ""}Event Background: ${
        _values.action === null ? "No event!" : "Event configured"
    } - Delay: ${(_values.delay ? _values.delay : 0) / 1000} seconds`;
}
