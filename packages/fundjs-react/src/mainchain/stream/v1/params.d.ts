import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /** validator_fee is the chain-wide fee validators will receive from stream payments. A percentage value from 0 to 1 */
    validatorFee: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/mainchain.stream.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /** validator_fee is the chain-wide fee validators will receive from stream payments. A percentage value from 0 to 1 */
    validator_fee?: string;
}
export interface ParamsAminoMsg {
    type: "/mainchain.stream.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    validator_fee: string;
}
export declare const Params: {
    typeUrl: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
