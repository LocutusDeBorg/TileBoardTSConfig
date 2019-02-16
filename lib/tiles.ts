import {
    Tile, TYPES, SwitchConfig, TileConfig, 
    LightConfig, SliderParam, ClimateConfig, 
    MediaPlayerConfig, AlarmConfig, SensorConfig, 
    SensorIconConfig, CustomConfig, AutomationConfig, 
    CameraConfig, CameraThumbnailConfig, CoverConfig, 
    DeviceTrackerConfig, DoorEntryConfig, FanConfig, 
    GenericIconConfig, IFrameConfig, InputBooleanConfig, 
    InputDateTimeConfig, InputNumberConfig, InputSelectConfig, 
    LockConfig, SceneConfig, ScriptConfig, WeatherConfig, 
    TextListConfig, WeatherListConfig, SliderConfig
} from 'TileBoard';

import {shallow} from 'cloner'

export class BaseTile implements Tile{
    id: string;
    position: [number, number];

    constructor(public type: string, config:TileConfig){
        shallow.merge(this, config)
    }
}

export class Alarm extends BaseTile{
    icon: string = 'mdi-alarm';
    constructor(config: AlarmConfig){
        super(TYPES.ALARM, config);
    }
}

export class Automation extends BaseTile{
    constructor(config: AutomationConfig){
        super(TYPES.AUTOMATION, config)
    }
}

export class Camera extends BaseTile{
    constructor(config: CameraConfig){
        super(TYPES.CAMERA, config)
    }
}

export class CameraThumbnail extends BaseTile{
    constructor(config: CameraThumbnailConfig){
        super(TYPES.CAMERA_THUMBNAIL, config)
    }
}
export class Climate extends BaseTile{
    state (item, entity) {
        return 'Current '
           + entity.attributes.current_temperature
           + entity.attributes.unit_of_measurement;
     }
     
    constructor(config: ClimateConfig){
        super(TYPES.CLIMATE, config);
    }
}

export class Cover extends BaseTile{
    constructor(config: CoverConfig){
        super(TYPES.COVER, config)
    }
}


export class Custom extends BaseTile{
    constructor(config: CustomConfig){
        super(TYPES.CUSTOM, config);
    }
}

export class DeviceTracker extends BaseTile{
    constructor(config: DeviceTrackerConfig){
        super(TYPES.DEVICE_TRACKER, config);
    }
}

export class DoorEntry extends BaseTile{
    constructor(config: DoorEntryConfig){
        super(TYPES.DOOR_ENTRY, config);
    }
}

export class Fan extends BaseTile{
    constructor(config: FanConfig){
        super(TYPES.FAN, config);
    }
}

export class GenericIcon extends BaseTile{
    constructor(config: GenericIconConfig){
        super(TYPES.GENERIC_ICON, config);
    }
}

export class IFrame extends BaseTile{
    constructor(config: IFrameConfig){
        super(TYPES.IFRAME, config);      
    }
}

export class InputBoolean extends BaseTile{
    constructor(config: InputBooleanConfig){
        super(TYPES.INPUT_BOOLEAN, config);
    }
}

export class InputDateTime extends BaseTile{
    constructor(config: InputDateTimeConfig){
        super(TYPES.INPUT_DATETIME, config);
    }
}

export class InputNumber extends BaseTile{
    constructor(config: InputNumberConfig){
        super(TYPES.INPUT_NUMBER, config);
    }
}

export class InputSelect extends BaseTile{
    constructor(config: InputSelectConfig){
        super(TYPES.INPUT_SELECT, config);
    }
}

export class Light extends BaseTile{
    icons = {on:'mdi-lightbulb-on-outline', off:'mdi-lightbulb-outline'};
    sliders?: SliderParam[];

    constructor(config: LightConfig, defaultSliders?:boolean){
        super(TYPES.LIGHT, config);
        if (defaultSliders) this.addDefaultSliders();
    }

    addDefaultSliders(){
        this.sliders = [
            {
               title: 'Brightness',
               field: 'brightness',
               max: 255,
               min: 0,
               step: 5,
               request: {
                  type: "call_service",
                  domain: "light",
                  service: "turn_on",
                  field: "brightness"
               }
            },
            {
               title: 'Color temp',
               field: 'color_temp',
               max: 588,
               min: 153,
               step: 15,
               request: {
                  type: "call_service",
                  domain: "light",
                  service: "turn_on",
                  field: "color_temp"
               }
            }
         ]
    }
}

export class Lock extends BaseTile{
    constructor(config: LockConfig){
        super(TYPES.LOCK, config);
    }    
}

export class MediaPlayer extends BaseTile{
    constructor(config: MediaPlayerConfig){
        super(TYPES.MEDIA_PLAYER, config);
    }
}

export class Scene extends BaseTile{
    constructor(config: SceneConfig){
        super(TYPES.SCENE, config);
    }
}

export class Script extends BaseTile{
    constructor(config: ScriptConfig){
        super(TYPES.SCRIPT, config);
    }
}

export class Sensor extends BaseTile{
    constructor(config: SensorConfig){
        super(TYPES.SENSOR, config);
    }
}

export class SensorIcon extends BaseTile{
    constructor(config: SensorIconConfig){
        super(TYPES.SENSOR_ICON, config)
    }
}

export class Slider extends BaseTile{
    constructor (config: SliderConfig){
        super(TYPES.SLIDER, config)
    }
}

export class Switch extends BaseTile{
    icons = {off:'mdi-checkbox-blank-outline', on:'mdi-checkbox-intermediate'};
    constructor(config: SwitchConfig){
        super(TYPES.SWITCH, config);
    }
}

export class TextList extends BaseTile{
    constructor(config: TextListConfig){
        super(TYPES.TEXT_LIST, config)
    }
}

export class Weather extends BaseTile{
    constructor(config: WeatherConfig){
        super(TYPES.WEATHER, config)
    }
}

export class WeatherList extends BaseTile{
    constructor(config: WeatherListConfig){
        super(TYPES.WEATHER_LIST, config)
    }
}

export class PopupIFrame extends BaseTile{
    constructor(config: IFrameConfig){
        super(TYPES.POPUP_IFRAME, config);
    }
}