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

interface IInitializableDebtTokenInterface extends ethers.utils.Interface {
  functions: {
    "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, string, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {
    "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type InitializedEvent = TypedEvent<
  [string, string, string, number, string, string, string] & {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: number;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
  }
>;

export class IInitializableDebtToken extends BaseContract {
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

  interface: IInitializableDebtTokenInterface;

  functions: {
    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initialize(
    pool: string,
    underlyingAsset: string,
    incentivesController: string,
    debtTokenDecimals: BigNumberish,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(address,address,address,uint8,string,string,bytes)"(
      underlyingAsset?: string | null,
      pool?: string | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): TypedEventFilter<
      [string, string, string, number, string, string, string],
      {
        underlyingAsset: string;
        pool: string;
        incentivesController: string;
        debtTokenDecimals: number;
        debtTokenName: string;
        debtTokenSymbol: string;
        params: string;
      }
    >;

    Initialized(
      underlyingAsset?: string | null,
      pool?: string | null,
      incentivesController?: null,
      debtTokenDecimals?: null,
      debtTokenName?: null,
      debtTokenSymbol?: null,
      params?: null
    ): TypedEventFilter<
      [string, string, string, number, string, string, string],
      {
        underlyingAsset: string;
        pool: string;
        incentivesController: string;
        debtTokenDecimals: number;
        debtTokenName: string;
        debtTokenSymbol: string;
        params: string;
      }
    >;
  };

  estimateGas: {
    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      pool: string,
      underlyingAsset: string,
      incentivesController: string,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}