//@ts-nocheck
import { BinaryReader } from '../../../binary';
import { Rpc } from '../../../helpers';
import { MsgProcessUndPurchaseOrder, MsgProcessUndPurchaseOrderResponse, MsgUndPurchaseOrder, MsgUndPurchaseOrderResponse, MsgUpdateParams, MsgUpdateParamsResponse,MsgWhitelistAddress, MsgWhitelistAddressResponse } from './tx';
/** Msg defines the enterprise Msg service. */
export interface Msg {
  /** UndPurchaseOrder defines a method to create new purchase order. */
  undPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse>;
  /** ProcessUndPurchaseOrder defines a method to process a decision on a purchase order. */
  processUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse>;
  /** WhitelistAddress defines a method to execute a whitelist action. */
  whitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse>;
  /**
   * UpdateParams defines an operation for updating the x/enterprise module
   * parameters.
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.undPurchaseOrder = this.undPurchaseOrder.bind(this);
    this.processUndPurchaseOrder = this.processUndPurchaseOrder.bind(this);
    this.whitelistAddress = this.whitelistAddress.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  undPurchaseOrder(request: MsgUndPurchaseOrder): Promise<MsgUndPurchaseOrderResponse> {
    const data = MsgUndPurchaseOrder.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Msg', 'UndPurchaseOrder', data);
    return promise.then(data => MsgUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  processUndPurchaseOrder(request: MsgProcessUndPurchaseOrder): Promise<MsgProcessUndPurchaseOrderResponse> {
    const data = MsgProcessUndPurchaseOrder.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Msg', 'ProcessUndPurchaseOrder', data);
    return promise.then(data => MsgProcessUndPurchaseOrderResponse.decode(new BinaryReader(data)));
  }
  whitelistAddress(request: MsgWhitelistAddress): Promise<MsgWhitelistAddressResponse> {
    const data = MsgWhitelistAddress.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Msg', 'WhitelistAddress', data);
    return promise.then(data => MsgWhitelistAddressResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request('mainchain.enterprise.v1.Msg', 'UpdateParams', data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};