//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUndPurchaseOrder, MsgProcessUndPurchaseOrder, MsgWhitelistAddress, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mainchain.enterprise.v1.MsgUndPurchaseOrder", MsgUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder", MsgProcessUndPurchaseOrder], ["/mainchain.enterprise.v1.MsgWhitelistAddress", MsgWhitelistAddress], ["/mainchain.enterprise.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value: MsgUndPurchaseOrder.encode(value).finish()
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value: MsgProcessUndPurchaseOrder.encode(value).finish()
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value: MsgWhitelistAddress.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    undPurchaseOrder(value: MsgUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUndPurchaseOrder",
        value: MsgUndPurchaseOrder.fromPartial(value)
      };
    },
    processUndPurchaseOrder(value: MsgProcessUndPurchaseOrder) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder",
        value: MsgProcessUndPurchaseOrder.fromPartial(value)
      };
    },
    whitelistAddress(value: MsgWhitelistAddress) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgWhitelistAddress",
        value: MsgWhitelistAddress.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/mainchain.enterprise.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};