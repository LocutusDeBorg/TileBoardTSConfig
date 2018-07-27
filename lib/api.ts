/// <reference path='tileboard.d.ts'/>

import { Api as _api} from 'TileBoard';


export class Api {
    static callService(serviceName: string, id: string, data:{}, callback?: (res:any)=>void){
        var [domain, service] = serviceName.split('.', 2);
        data['entity_id'] = id;

        Api.send({
            type: "call_service",
            domain: domain,
            service: service,
            service_data: data
        }, callback);
    }

    static send(data: import("TileBoard").HACall, callback?: (res: any) => void):any{
        _api.send(data, callback);
    } 

    static sendItem(item: any, serviceName, data:{}){
        if (item.loading) return;
        item.loading = true;

        Api.callService(
            serviceName,
            item.id,
            data,
            (res)=>{
                item.loading = false;
            }
        );
    }
}


