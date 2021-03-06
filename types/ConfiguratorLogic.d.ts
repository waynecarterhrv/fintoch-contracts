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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ConfiguratorLogicInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "ATokenUpgraded(address,address,address)": EventFragment;
    "ReserveInitialized(address,address,address,address,address)": EventFragment;
    "StableDebtTokenUpgraded(address,address,address)": EventFragment;
    "VariableDebtTokenUpgraded(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ATokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableDebtTokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VariableDebtTokenUpgraded"): EventFragment;
}

export type ATokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export type ReserveInitializedEvent = TypedEvent<
  [string, string, string, string, string] & {
    asset: string;
    aToken: string;
    stableDebtToken: string;
    variableDebtToken: string;
    interestRateStrategyAddress: string;
  }
>;

export type StableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export type VariableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string] & {
    asset: string;
    proxy: string;
    implementation: string;
  }
>;

export class ConfiguratorLogic extends BaseContract {
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

  interface: ConfiguratorLogicInterface;

  functions: {};

  callStatic: {};

  filters: {
    "ATokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    ATokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    "ReserveInitialized(address,address,address,address,address)"(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        aToken: string;
        stableDebtToken: string;
        variableDebtToken: string;
        interestRateStrategyAddress: string;
      }
    >;

    ReserveInitialized(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): TypedEventFilter<
      [string, string, string, string, string],
      {
        asset: string;
        aToken: string;
        stableDebtToken: string;
        variableDebtToken: string;
        interestRateStrategyAddress: string;
      }
    >;

    "StableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    StableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    "VariableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;

    VariableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { asset: string; proxy: string; implementation: string }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
