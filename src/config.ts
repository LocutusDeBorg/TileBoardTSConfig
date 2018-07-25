/// <reference path='../lib/tileboard.d.ts'/>

/**  
 * This is just a redoing of the example config file shipped with TileBoard
 * 
 * You will need to export an instance of the Config object (see the last line 
 * of this file) in order for the default rollup configuration file to work
 * properly.  It should complete without errors.  And TileBoard should function
 * normally. 
 * 
 */

import { CUSTOM_THEMES, ENTITY_SIZES,
    PASSWORD_TYPES, MENU_POSITIONS,
    TRANSITIONS, TBConfig, GROUP_ALIGNS, DEFAULT_HEADER
} from 'TileBoard';

import { MainPage } from './pages/mainpage';
import { SecondPage } from './pages/secondpage';

class Config implements TBConfig{
    customTheme     = null;
    header          = DEFAULT_HEADER;
    transition      = TRANSITIONS.ANIMATED_GPU;
    entitySize      = ENTITY_SIZES.NORMAL; 
    tileSize        = 150;
    tileMargin      = 6;
    timeFormat      = 24;
    groupMarginCss  = '20px 15px';
    serverUrl       = "http://localhost:8123";
    wsUrl           = "ws://localhost:8123/api/websocket";
    passwordType    = PASSWORD_TYPES.PROMPT_AND_SAVE;
    events          = [];
    menuPosition    = MENU_POSITIONS.LEFT;
    hideScrollbar   = false; 
    groupsAlign     = GROUP_ALIGNS.HORIZONTALLY;
    screensaver     = { 
         timeout        : 300, 
         slidesTimeout  : 10,
         slides         : [
            {bg: 'images/bg1.jpeg'},
            {bg: 'images/bg2.png'},
            {bg: 'images/bg3.jpg'},
         ]
    };

    pages = [
        new MainPage(),
        new SecondPage()
    ];
}

export default new Config();
