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

interface IPoolAddressesProviderRegistryInterface
  extends ethers.utils.Interface {
  functions: {
    "getAddressesProviderAddressById(uint256)": FunctionFragment;
    "getAddressesProviderIdByAddress(address)": FunctionFragment;
    "getAddressesProvidersList()": FunctionFragment;
    "registerAddressesProvider(address,uint256)": FunctionFragment;
    "unregisterAddressesProvider(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddressesProviderAddressById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesProviderIdByAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesProvidersList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerAddressesProvider",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterAddressesProvider",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAddressesProviderAddressById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesProviderIdByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesProvidersList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAddressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterAddressesProvider",
    data: BytesLike
  ): Result;

  events: {
    "AddressesProviderRegistered(address,uint256)": EventFragment;
    "AddressesProviderUnregistered(address,uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AddressesProviderRegistered"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AddressesProviderUnregistered"
  ): EventFragment;
}

export type AddressesProviderRegisteredEvent = TypedEvent<
  [string, BigNumber] & { addressesProvider: string; id: BigNumber }
>;

export type AddressesProviderUnregisteredEvent = TypedEvent<
  [string, BigNumber] & { addressesProvider: string; id: BigNumber }
>;

export class IPoolAddressesProviderRegistry extends BaseContract {
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

  interface: IPoolAddressesProviderRegistryInterface;

  functions: {
    getAddressesProviderAddressById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAddressesProviderIdByAddress(
      addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<[string[]]>;

    registerAddressesProvider(
      provider: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterAddressesProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAddressesProviderAddressById(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAddressesProviderIdByAddress(
    addressesProvider: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;

  registerAddressesProvider(
    provider: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterAddressesProvider(
    provider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAddressesProviderAddressById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAddressesProviderIdByAddress(
      addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;

    registerAddressesProvider(
      provider: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterAddressesProvider(
      provider: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddressesProviderRegistered(address,uint256)"(
      addressesProvider?: string | null,
      id?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { addressesProvider: string; id: BigNumber }
    >;

    AddressesProviderRegistered(
      addressesProvider?: string | null,
      id?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { addressesProvider: string; id: BigNumber }
    >;

    "AddressesProviderUnregistered(address,uint256)"(
      addressesProvider?: string | null,
      id?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { addressesProvider: string; id: BigNumber }
    >;

    AddressesProviderUnregistered(
      addressesProvider?: string | null,
      id?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { addressesProvider: string; id: BigNumber }
    >;
  };

  estimateGas: {
    getAddressesProviderAddressById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressesProviderIdByAddress(
      addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<BigNumber>;

    registerAddressesProvider(
      provider: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterAddressesProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddressesProviderAddressById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddressesProviderIdByAddress(
      addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddressesProvidersList(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAddressesProvider(
      provider: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterAddressesProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
