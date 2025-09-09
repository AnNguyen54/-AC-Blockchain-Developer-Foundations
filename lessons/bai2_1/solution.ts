import { ConstructorFragment } from "ethers";

export class SmartContract
{
    private message:string;
    constructor (mess:string)
    {
        this.message= mess;
    }
    public updateMessage(newMsg: string):void{
        this.message = newMsg;
    }

    public getMessage(): string{
        return this.message;
    }
}