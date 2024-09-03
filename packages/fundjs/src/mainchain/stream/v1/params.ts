//@ts-nocheck
import { Decimal } from '@cosmjs/math';

import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/** Params defines the parameters for the module. */
export interface Params {
  /** validator_fee is the chain-wide fee validators will receive from stream payments. A percentage value from 0 to 1 */
  validatorFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: '/mainchain.stream.v1.Params';
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** validator_fee is the chain-wide fee validators will receive from stream payments. A percentage value from 0 to 1 */
  validator_fee?: string;
}
export interface ParamsAminoMsg {
  type: '/mainchain.stream.v1.Params';
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  validator_fee: string;
}
function createBaseParams(): Params {
  return {
    validatorFee: ''
  };
}
export const Params = {
  typeUrl: '/mainchain.stream.v1.Params',
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.validatorFee === 'string');
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.validator_fee === 'string');
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.validator_fee === 'string');
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorFee !== '') {
      writer.uint32(10).string(Decimal.fromUserInput(message.validatorFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.validatorFee = Decimal.fromAtomics(reader.string(), 18).toString();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.validatorFee = object.validatorFee ?? '';
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.validator_fee !== undefined && object.validator_fee !== null) {
      message.validatorFee = object.validator_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.validator_fee = message.validatorFee === '' ? undefined : message.validatorFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/mainchain.stream.v1.Params',
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);