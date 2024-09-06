import * as _19 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _19.ScalarType;
    scalarTypeToJSON(object: _19.ScalarType): string;
    ScalarType: typeof _19.ScalarType;
    ScalarTypeSDKType: typeof _19.ScalarType;
    ScalarTypeAmino: typeof _19.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        is(o: any): o is _19.InterfaceDescriptor;
        isSDK(o: any): o is _19.InterfaceDescriptorSDKType;
        isAmino(o: any): o is _19.InterfaceDescriptorAmino;
        encode(message: _19.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.InterfaceDescriptor;
        fromPartial(object: Partial<_19.InterfaceDescriptor>): _19.InterfaceDescriptor;
        fromAmino(object: _19.InterfaceDescriptorAmino): _19.InterfaceDescriptor;
        toAmino(message: _19.InterfaceDescriptor): _19.InterfaceDescriptorAmino;
        fromAminoMsg(object: _19.InterfaceDescriptorAminoMsg): _19.InterfaceDescriptor;
        fromProtoMsg(message: _19.InterfaceDescriptorProtoMsg): _19.InterfaceDescriptor;
        toProto(message: _19.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _19.InterfaceDescriptor): _19.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        is(o: any): o is _19.ScalarDescriptor;
        isSDK(o: any): o is _19.ScalarDescriptorSDKType;
        isAmino(o: any): o is _19.ScalarDescriptorAmino;
        encode(message: _19.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.ScalarDescriptor;
        fromPartial(object: Partial<_19.ScalarDescriptor>): _19.ScalarDescriptor;
        fromAmino(object: _19.ScalarDescriptorAmino): _19.ScalarDescriptor;
        toAmino(message: _19.ScalarDescriptor): _19.ScalarDescriptorAmino;
        fromAminoMsg(object: _19.ScalarDescriptorAminoMsg): _19.ScalarDescriptor;
        fromProtoMsg(message: _19.ScalarDescriptorProtoMsg): _19.ScalarDescriptor;
        toProto(message: _19.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _19.ScalarDescriptor): _19.ScalarDescriptorProtoMsg;
    };
};
