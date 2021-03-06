/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseUpgradeabilityProxy,
  BaseUpgradeabilityProxyInterface,
} from "../BaseUpgradeabilityProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060948061001e6000396000f3fe6080604052600a600c565b005b603960357f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b603b565b565b3660008037600080366000845af43d6000803e8080156059573d6000f35b3d6000fdfea2646970667358221220f7a46d72924b43fdd13a031f6da3a3e61ebf49551a3785b48fea80f5515ff5db64736f6c634300080a0033";

export class BaseUpgradeabilityProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<BaseUpgradeabilityProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseUpgradeabilityProxy {
    return super.attach(address) as BaseUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseUpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as BaseUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseUpgradeabilityProxy;
  }
}
