"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.enterpriseUndPurchaseOrder = this.enterpriseUndPurchaseOrder.bind(this);
        this.enterpriseUndPurchaseOrders = this.enterpriseUndPurchaseOrders.bind(this);
        this.lockedUndByAddress = this.lockedUndByAddress.bind(this);
        this.totalLocked = this.totalLocked.bind(this);
        this.totalUnlocked = this.totalUnlocked.bind(this);
        this.enterpriseSupply = this.enterpriseSupply.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.totalSupplyOverwrite = this.totalSupplyOverwrite.bind(this);
        this.supplyOfOverwrite = this.supplyOfOverwrite.bind(this);
        this.whitelist = this.whitelist.bind(this);
        this.whitelisted = this.whitelisted.bind(this);
        this.enterpriseAccount = this.enterpriseAccount.bind(this);
        this.totalSpentEFUND = this.totalSpentEFUND.bind(this);
        this.spentEFUNDByAddress = this.spentEFUNDByAddress.bind(this);
    }
    /* Params queries the parameters of x/enterprise module. */
    async params(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/params`;
        return await this.req.get(endpoint);
    }
    /* EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */
    async enterpriseUndPurchaseOrder(params) {
        const endpoint = `mainchain/enterprise/v1/pos/${params.purchaseOrderId}`;
        return await this.req.get(endpoint);
    }
    /* EnterpriseUndPurchaseOrders queries all current purchase orders. */
    async enterpriseUndPurchaseOrders(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        if (typeof params?.purchaser !== "undefined") {
            options.params.purchaser = params.purchaser;
        }
        if (typeof params?.status !== "undefined") {
            options.params.status = params.status;
        }
        const endpoint = `mainchain/enterprise/v1/pos`;
        return await this.req.get(endpoint, options);
    }
    /* LockedUndByAddress queries an account address for their locked FUND */
    async lockedUndByAddress(params) {
        const endpoint = `mainchain/enterprise/v1/locked/${params.owner}`;
        return await this.req.get(endpoint);
    }
    /* TotalLocked queries the total locked FUND */
    async totalLocked(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/locked`;
        return await this.req.get(endpoint);
    }
    /* TotalUnlocked queries the total Unlocked FUND */
    async totalUnlocked(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/unlocked`;
        return await this.req.get(endpoint);
    }
    /* EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */
    async enterpriseSupply(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/ent_supply`;
        return await this.req.get(endpoint);
    }
    /* TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     for general use, i.e. with locked eFUND removed from total for nund */
    async totalSupply(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `mainchain/enterprise/v1/supply`;
        return await this.req.get(endpoint, options);
    }
    /* SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     with locked eFUND removed from total for nund */
    async supplyOf(params) {
        const endpoint = `mainchain/enterprise/v1/supply/${params.denom}`;
        return await this.req.get(endpoint);
    }
    /* TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
     for general use, i.e. with locked eFUND removed from total for nund */
    async totalSupplyOverwrite(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/supply`;
        return await this.req.get(endpoint, options);
    }
    /* SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
     with locked eFUND removed from total for nund */
    async supplyOfOverwrite(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Whitelist queries whitelisted addresses authorised to raise new purchase orders */
    async whitelist(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/whitelist`;
        return await this.req.get(endpoint);
    }
    /* Whitelisted queries whether or not the given address is authorised to raise new purchase orders */
    async whitelisted(params) {
        const endpoint = `mainchain/enterprise/v1/whitelist/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* EnterpriseAccount queries an account address for their locked FUND and other data */
    async enterpriseAccount(params) {
        const endpoint = `mainchain/enterprise/v1/account/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */
    async totalSpentEFUND(_params = {}) {
        const endpoint = `mainchain/enterprise/v1/total_spent`;
        return await this.req.get(endpoint);
    }
    /* SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */
    async spentEFUNDByAddress(params) {
        const endpoint = `mainchain/enterprise/v1/spent/${params.address}`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
