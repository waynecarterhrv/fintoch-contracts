/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolAddressesProviderInterface extends ethers.utils.Interface {
  functions: {
    "getACLAdmin()": FunctionFragment;
    "getACLManager()": FunctionFragment;
    "getAddress(bytes32)": FunctionFragment;
    "getMarketId()": FunctionFragment;
    "getPool()": FunctionFragment;
    "getPoolConfigurator()": FunctionFragment;
    "getPoolDataProvider()": FunctionFragment;
    "getPriceOracle()": FunctionFragment;
    "getPriceOracleSentinel()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setACLAdmin(address)": FunctionFragment;
    "setACLManager(address)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setAddressAsProxy(bytes32,address)": FunctionFragment;
    "setMarketId(string)": FunctionFragment;
    "setPoolConfiguratorImpl(address)": FunctionFragment;
    "setPoolDataProvider(address)": FunctionFragment;
    "setPoolImpl(address)": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "setPriceOracleSentinel(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getACLAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getACLManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPoolConfigurator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolDataProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOracleSentinel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setACLAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setACLManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressAsProxy",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPoolConfiguratorImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolDataProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setPoolImpl", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOracleSentinel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getACLAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getACLManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracleSentinel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setACLAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setACLManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAddressAsProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolConfiguratorImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracleSentinel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ACLAdminUpdated(address,address)": EventFragment;
    "ACLManagerUpdated(address,address)": EventFragment;
    "AddressSet(bytes32,address,address)": EventFragment;
    "AddressSetAsProxy(bytes32,address,address,address)": EventFragment;
    "MarketIdSet(string,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolConfiguratorUpdated(address,address)": EventFragment;
    "PoolDataProviderUpdated(address,address)": EventFragment;
    "PoolUpdated(address,address)": EventFragment;
    "PriceOracleSentinelUpdated(address,address)": EventFragment;
    "PriceOracleUpdated(address,address)": EventFragment;
    "ProxyCreated(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ACLAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ACLManagerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddressSetAsProxy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketIdSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolConfiguratorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolDataProviderUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceOracleSentinelUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
}

export type ACLAdminUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type ACLManagerUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type AddressSetEvent = TypedEvent<
  [string, string, string] & {
    id: string;
    oldAddress: string;
    newAddress: string;
  }
>;

export type AddressSetAsProxyEvent = TypedEvent<
  [string, string, string, string] & {
    id: string;
    proxyAddress: string;
    oldImplementationAddress: string;
    newImplementationAddress: string;
  }
>;

export type MarketIdSetEvent = TypedEvent<
  [string, string] & { oldMarketId: string; newMarketId: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PoolConfiguratorUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type PoolDataProviderUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type PoolUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type PriceOracleSentinelUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type PriceOracleUpdatedEvent = TypedEvent<
  [string, string] & { oldAddress: string; newAddress: string }
>;

export type ProxyCreatedEvent = TypedEvent<
  [string, string, string] & {
    id: string;
    proxyAddress: string;
    implementationAddress: string;
  }
>;

export class PoolAddressesProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolAddressesProviderInterface;

  functions: {
    getACLAdmin(overrides?: CallOverrides): Promise<[string]>;

    getACLManager(overrides?: CallOverrides): Promise<[string]>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getMarketId(overrides?: CallOverrides): Promise<[string]>;

    getPool(overrides?: CallOverrides): Promise<[string]>;

    getPoolConfigurator(overrides?: CallOverrides): Promise<[string]>;

    getPoolDataProvider(overrides?: CallOverrides): Promise<[string]>;

    getPriceOracle(overrides?: CallOverrides): Promise<[string]>;

    getPriceOracleSentinel(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setACLAdmin(
      newAclAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setACLManager(
      newAclManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddressAsProxy(
      id: BytesLike,
      newImplementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMarketId(
      newMarketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolConfiguratorImpl(
      newPoolConfiguratorImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolDataProvider(
      newDataProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolImpl(
      newPoolImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceOracle(
      newPriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceOracleSentinel(
      newPriceOracleSentinel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getACLAdmin(overrides?: CallOverrides): Promise<string>;

  getACLManager(overrides?: CallOverrides): Promise<string>;

  getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

  getMarketId(overrides?: CallOverrides): Promise<string>;

  getPool(overrides?: CallOverrides): Promise<string>;

  getPoolConfigurator(overrides?: CallOverrides): Promise<string>;

  getPoolDataProvider(overrides?: CallOverrides): Promise<string>;

  getPriceOracle(overrides?: CallOverrides): Promise<string>;

  getPriceOracleSentinel(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setACLAdmin(
    newAclAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setACLManager(
    newAclManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddress(
    id: BytesLike,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddressAsProxy(
    id: BytesLike,
    newImplementationAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMarketId(
    newMarketId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolConfiguratorImpl(
    newPoolConfiguratorImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolDataProvider(
    newDataProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolImpl(
    newPoolImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceOracle(
    newPriceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceOracleSentinel(
    newPriceOracleSentinel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getACLAdmin(overrides?: CallOverrides): Promise<string>;

    getACLManager(overrides?: CallOverrides): Promise<string>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

    getMarketId(overrides?: CallOverrides): Promise<string>;

    getPool(overrides?: CallOverrides): Promise<string>;

    getPoolConfigurator(overrides?: CallOverrides): Promise<string>;

    getPoolDataProvider(overrides?: CallOverrides): Promise<string>;

    getPriceOracle(overrides?: CallOverrides): Promise<string>;

    getPriceOracleSentinel(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setACLAdmin(newAclAdmin: string, overrides?: CallOverrides): Promise<void>;

    setACLManager(
      newAclManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddressAsProxy(
      id: BytesLike,
      newImplementationAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMarketId(newMarketId: string, overrides?: CallOverrides): Promise<void>;

    setPoolConfiguratorImpl(
      newPoolConfiguratorImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolDataProvider(
      newDataProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolImpl(newPoolImpl: string, overrides?: CallOverrides): Promise<void>;

    setPriceOracle(
      newPriceOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceOracleSentinel(
      newPriceOracleSentinel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ACLAdminUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    ACLAdminUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "ACLManagerUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    ACLManagerUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "AddressSet(bytes32,address,address)"(
      id?: BytesLike | null,
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; oldAddress: string; newAddress: string }
    >;

    AddressSet(
      id?: BytesLike | null,
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; oldAddress: string; newAddress: string }
    >;

    "AddressSetAsProxy(bytes32,address,address,address)"(
      id?: BytesLike | null,
      proxyAddress?: string | null,
      oldImplementationAddress?: null,
      newImplementationAddress?: string | null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        id: string;
        proxyAddress: string;
        oldImplementationAddress: string;
        newImplementationAddress: string;
      }
    >;

    AddressSetAsProxy(
      id?: BytesLike | null,
      proxyAddress?: string | null,
      oldImplementationAddress?: null,
      newImplementationAddress?: string | null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        id: string;
        proxyAddress: string;
        oldImplementationAddress: string;
        newImplementationAddress: string;
      }
    >;

    "MarketIdSet(string,string)"(
      oldMarketId?: string | null,
      newMarketId?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldMarketId: string; newMarketId: string }
    >;

    MarketIdSet(
      oldMarketId?: string | null,
      newMarketId?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldMarketId: string; newMarketId: string }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PoolConfiguratorUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    PoolConfiguratorUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "PoolDataProviderUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    PoolDataProviderUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "PoolUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    PoolUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "PriceOracleSentinelUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    PriceOracleSentinelUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "PriceOracleUpdated(address,address)"(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    PriceOracleUpdated(
      oldAddress?: string | null,
      newAddress?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldAddress: string; newAddress: string }
    >;

    "ProxyCreated(bytes32,address,address)"(
      id?: BytesLike | null,
      proxyAddress?: string | null,
      implementationAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; proxyAddress: string; implementationAddress: string }
    >;

    ProxyCreated(
      id?: BytesLike | null,
      proxyAddress?: string | null,
      implementationAddress?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; proxyAddress: string; implementationAddress: string }
    >;
  };

  estimateGas: {
    getACLAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    getACLManager(overrides?: CallOverrides): Promise<BigNumber>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getMarketId(overrides?: CallOverrides): Promise<BigNumber>;

    getPool(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolConfigurator(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolDataProvider(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOracleSentinel(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setACLAdmin(
      newAclAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setACLManager(
      newAclManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddressAsProxy(
      id: BytesLike,
      newImplementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMarketId(
      newMarketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolConfiguratorImpl(
      newPoolConfiguratorImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolDataProvider(
      newDataProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolImpl(
      newPoolImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceOracle(
      newPriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceOracleSentinel(
      newPriceOracleSentinel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getACLAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getACLManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAddress(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolConfigurator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolDataProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriceOracleSentinel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setACLAdmin(
      newAclAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setACLManager(
      newAclManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddressAsProxy(
      id: BytesLike,
      newImplementationAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMarketId(
      newMarketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolConfiguratorImpl(
      newPoolConfiguratorImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolDataProvider(
      newDataProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolImpl(
      newPoolImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceOracle(
      newPriceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceOracleSentinel(
      newPriceOracleSentinel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
