import { Page, TileGroup, SliderParam } from "TileBoard";
import { TextList, Sensor, Slider, Switch, Weather } from 'tiles';

export class MainPage implements Page{
    title   = "Main Page"
    bg      = "images/bg1.jpeg"
    icon    = "mdi-home-outline"
    groups  = [
        new FirstGroup(),
        new SecondGroup(), 
        new ThirdGroup()
    ]
}

class FirstGroup implements TileGroup{
    title   = "First Group"
    width   = 2
    height  = 3
    items   = [
        new TextList({
            id:{}, 
            position: [0,0], 
            list:[
                {title:'Sun.sun state', icon: 'mdi-weather-sunny', value:"&sun.sun.state"},
                {title:'Custom', icon: 'mdi-clock-outline', value:"value"},
            ]
        }),
        new Sensor({id: 'undater.updater', position:[0,1], state: '@attributes.release_notes'})
    ]
}

class SecondGroup implements TileGroup{
    // Not the greatest idea, but it's here as an example.
    mySliderConf: SliderParam = {
        title   : 'Custom Slider',
        max     : 100,
        min     : 0,
        step    : 2,
        request : {
            type: 'call_service',
            domain:'input_number',
            field: 'value',
            service:'set_value'
        }
    };

    title   = "Second Group";
    width   = 2;
    height  = 3;
    items   = [
        new Slider({id:{state:50}, position:[0,0], slider: this.mySliderConf}),
        new Switch({
            id: {state: 'off'}, 
            position:[1, 0], 
            state: false, 
            title: "Custom Switch",
            icons: {'off': 'mdi-volume-off', 'on': 'mdi-volume-high'}
        })
    ];
}

// example of customizing one of the base classes
class MyWeather extends Weather{
    height = 2;
    icon = 'clear-day'
    icons = {'clear-day': 'clear'}
    fields = {
        summary: 'Sunny',
        temperature: '18',
        temperatureUnit: 'C',
        windSpeed: '5',
        windSpeedUnit: 'kmh',
        humidity: '50',
        humidityUnit: '%',
        list: [
           'Feels like 16 C'
        ]
     }

    constructor(config: any){
        super(config)
    }

    state(){ return 'Sunny'}
}

class ThirdGroup implements TileGroup{
    title   =''
    width   = 1
    height  = 3
    items   =   [
        new MyWeather({id:{}, position: [0, 0]})
    ]
}
