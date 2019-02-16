declare module "TileBoard" {
    export const ENTITY_SIZES: {
        BIG: string;
        NORMAL: string;
        SMALL: string;
    };
    export const TYPES: {
        ALARM: string;
        AUTOMATION: string;
        CAMERA: string;
        CAMERA_THUMBNAIL: string;
        CLIMATE: string;
        COVER: string;
        CUSTOM: string;
        DEVICE_TRACKER: string;
        DOOR_ENTRY: string;
        FAN: string;
        GENERIC_ICON: string;
        IFRAME: string;
        INPUT_BOOLEAN: string;
        INPUT_DATETIME: string;
        INPUT_NUMBER: string;
        INPUT_SELECT: string;
        LIGHT: string;
        LOCK: string;
        MEDIA_PLAYER: string;
        SCENE: string;
        SCRIPT: string;
        SENSOR: string;
        SENSOR_ICON: string;
        SLIDER: string;
        SWITCH: string;
        TEXT_LIST: string;
        WEATHER: string;
        WEATHER_LIST: string;
        POPUP_IFRAME: string;
    };

    export const GROUP_ALIGNS: {
        HORIZONTALLY: string;
        VERTICALLY: string;
    };

    export const PASSWORD_TYPES: {
        MANUAL: string;
        PROMPT: string;
        PROMPT_AND_SAVE: string;
    };
    
    export const MENU_POSITIONS: {
        BOTTOM: string;
        LEFT: string;
    };
    
    export const TRANSITIONS: {
        ANIMATED: string;
        ANIMATED_GPU: string;
        SIMPLE: string;
    };
    
    export const CUSTOM_THEMES: {
        MOBILE: string;
        TRANSPARENT: string;
        MATERIAL: string;
        WIN95: string;
        WINPHONE: string;
        COMPACT: string;
        HOMEKIT: string;
    };

    export const HEADER_ITEMS, SCREENSAVER_ITEMS: {
        TIME: string;
        DATE: string;
        DATETIME: string;
        WEATHER: string;
        CUSTOM_HTML: string;
     };
     

    export const DEFAULT_HEADER: any;

    export interface Tile {
        type        : string;
    }

    export interface TileConfig {
        position    : [number, number];
        id          : string | {};
        title?      : string;
        subtitle?   : string;
        width?      : number;
        height?     : number;
        states?     : ((item:any, entity:any)=> any) | {} ;
        state?      : ((item:any, entity:any)=> string) | string | false | true;
        icons?      :  {};
        icon?       : string ;
        bg?         : string;
        bgSuffix?   : string;
        bgOpacity?  : number;
        theme?      : string;
        classes?    : string[];
        slides?     : ({
                bg?: undefined;
            } | {
                bg: string;
            })[];
        hidden?: ((item:any, entity:any)=> boolean) | boolean;
    }

    export interface AlarmConfig extends TileConfig{}

    export interface AutomationConfig extends TileConfig{}

    export interface CameraConfig extends TileConfig{
        bgSize: string;
        fullscreen: {};
        refresh: FunctionConstructor | NumberConstructor;
    }

    export interface CameraThumbnailConfig extends CameraConfig{}

    export interface ClimateConfig extends TileConfig{
        unit?: string;
    }

    export interface CustomConfig extends TileConfig{
        action?: (item:any, entity:any)=>any;
    }

    export interface CoverConfig extends TileConfig{}

    export interface DeviceTrackerConfig extends TileConfig{
        slidesDelay: number;
        map: string;
        zoomLevels? : number[];
        hideEntityPicture?: boolean;
    }

    export interface DoorEntryConfig extends TileConfig{}
    export interface FanConfig extends TileConfig{}
    export interface GenericIconConfig extends TileConfig{}

    export interface IFrameConfig extends TileConfig{
        url: (()=>string) | string;
        iframeStyles?: {} | (any);
        iframeClasses?: ()=>any | Array<string> | string ;
    }
    
    export interface InputBooleanConfig extends TileConfig{}
    export interface InputDateTimeConfig extends TileConfig{}
    export interface InputNumberConfig extends TileConfig{}
    export interface InputSelectConfig extends TileConfig{}

    /** type: LIGHT **/
    export interface LightConfig extends TileConfig{
        sliders?: SliderParam[];
    }

    export interface LockConfig extends TileConfig{}
    
    export interface MediaPlayerConfig extends TileConfig{
        hideSource?: boolean;
    }
    export interface SceneConfig extends TileConfig{}
    export interface ScriptConfig extends TileConfig{}
    

    export interface SensorConfig extends TileConfig{
        unit?: string;
        value?: string;
        filter?: (value: any) => any;
    }
    export interface SensorIconConfig extends TileConfig{}

    interface ServiceRequest{
        type: string;
        domain: string;
        service: string;
        field: string;
    }
    interface SliderParam{
        title?: string;
        field?: string;
        max?: number;
        min?: number;
        step?: number;
        request: ServiceRequest;
            
    }

    export interface SliderConfig extends TileConfig{
        bottom?: boolean;
        slider: SliderParam;
        filter?: (value: any)=>any;
    }

    export interface SwitchConfig extends TileConfig{}

    export interface TextListConfig extends TileConfig{
        list: {
            title: string;
            icon: string;
            value: string;
        }[];
    }

    export interface WeatherConfig extends TileConfig{
        fields: {};
    }

    export interface WeatherListConfig extends TileConfig{}

    export interface TileGroup {
        title?: string;
        
        /* width: Number of tiles horizontally 
            * (optional) Can be calculated automatically 
            */
        width?: number;
        
        /* height: Number of tiles vertically 
            * (optional) Can be calculated automatically 
            */
        height?: number;
        
        /* groupMarginCss: Override default margin of tiles for the current group
            * (optional)
            */
        groupMarginCss?: string;

        /* hidden: hide group (optional)
        * can be boolean or function that return boolean
        */
        hidden?: ((item:any, entity:any)=>boolean) | boolean;  
        
        /* items: A list of Tile objects. See documentation on Tiles below */
        items: Tile[];
    }

    export interface Page {
        /* title: The page title (not currently used) */
        title?: string;
        /* bg: Link to the background image */
        bg: string;
        /* icon: Page icon for the side menu */
        icon: string; // icon of page (for the side menu)
        /* header: import a page template as a header
         * (used to show the clock in the example configuration)
         */
        header?: any;
        /* tileSize: Override the global tileSize value for the current page
           (optional)
         */
        tileSize?: number;
        /* groupMarginCss: Override global groupMarginCss for the current page
         * (optional)
         */
        groupMarginCss?: string;
        /* hidden: hide page (optional)
   * can be boolean or function that return boolean
   */
        hidden?: ((item:any, entity:any)=> boolean) | boolean;

        /* groups: A list of tile groups. See documentation on Tile Groups below */
        groups: TileGroup[]; // list of tile groups
    }

    interface HACall{
        type: string;
        domain: string;
        service: string;
        service_data: {}
    }

    export const Api:{
        send(data: HACall, callback?: ((res:any)=>any)):any;
    }

    export interface Event{
        command: string;
        action: (e)=>{}
    }

    interface ScreensaverParams{
        leftBottom?: any[];
        slides: {bg:string}[];
        slidesTimeout: number;
        styles?: {};
        timeout: number;
    }

    export interface TBConfig {
        customTheme: string;
        entitySize: string;
        events?: Event[];
        googleApiKey?: string;
        groupMarginCss: string;
        groupsAlign?: string;
        header?: {};
        hideScrollbar: boolean;
        menuPosition: string;
        pages: Page[];
        authToken?: string;
        screensaver?: ScreensaverParams;
        serverUrl: string;
        tileMargin?: number;
        tileSize?: number;
        timeFormat?: number;
        transition: string;
        wsUrl: string;
        rememberLastPage?: boolean;
    }
}