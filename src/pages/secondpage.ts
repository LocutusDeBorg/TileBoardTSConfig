import { Page, TileGroup } from "TileBoard";
import { TextList } from "../../lib/tiles";


//No, you probably wouldn't do this...but you can :-)
function getList():{title:string, icon:string,value:string}[]{
    return [
        {
            title: 'Read',
            icon: 'mdi-numeric-1-box-outline',
            value: 'README.md'
         },
         {
            title: 'Ask on forum',
            icon: 'mdi-numeric-2-box-outline',
            value: 'home-assistant.io'
         },
         {
            title: 'Open an issue',
            icon: 'mdi-numeric-3-box-outline',
            value: 'github.com'
         }
    ]
}

class G1 implements TileGroup{
    width = 2;
    height= 3;
    
    items = [
        new TextList({id: {}, position:[0,0], title: "Short Instruction",list: getList() })
    ];
}

export class SecondPage implements Page{
    title   = 'Second page'
    bg      = 'images/bg2.png'
    icon    = 'mdi-numeric-2-box-outline'
    groups  = [
        new G1()
    ]
}