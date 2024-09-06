import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
        aminoType: string;
        toAmino: (message: MsgUndPurchaseOrder) => import("./tx").MsgUndPurchaseOrderAmino;
        fromAmino: (object: import("./tx").MsgUndPurchaseOrderAmino) => MsgUndPurchaseOrder;
    };
    "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
        aminoType: string;
        toAmino: (message: MsgProcessUndPurchaseOrder) => import("./tx").MsgProcessUndPurchaseOrderAmino;
        fromAmino: (object: import("./tx").MsgProcessUndPurchaseOrderAmino) => MsgProcessUndPurchaseOrder;
    };
    "/mainchain.enterprise.v1.MsgWhitelistAddress": {
        aminoType: string;
        toAmino: (message: MsgWhitelistAddress) => import("./tx").MsgWhitelistAddressAmino;
        fromAmino: (object: import("./tx").MsgWhitelistAddressAmino) => MsgWhitelistAddress;
    };
    "/mainchain.enterprise.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
