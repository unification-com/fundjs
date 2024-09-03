//@ts-nocheck
import { LCDClient } from '@cosmology/lcd';

import { setPaginationParams } from '../../../helpers';
import { QueryAllowanceRequest, QueryAllowanceResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponseSDKType,QueryAllowancesRequest, QueryAllowancesResponseSDKType } from './query';
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  /* Allowance returns fee granted to the grantee by the granter. */
  async allowance(params: QueryAllowanceRequest): Promise<QueryAllowanceResponseSDKType> {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return await this.req.get<QueryAllowanceResponseSDKType>(endpoint);
  }
  /* Allowances returns all the grants for address. */
  async allowances(params: QueryAllowancesRequest): Promise<QueryAllowancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return await this.req.get<QueryAllowancesResponseSDKType>(endpoint, options);
  }
  /* AllowancesByGranter returns all the grants given by an address
   Since v0.46 */
  async allowancesByGranter(params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== 'undefined') {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return await this.req.get<QueryAllowancesByGranterResponseSDKType>(endpoint, options);
  }
}