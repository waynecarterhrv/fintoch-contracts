/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FlashloanAttacker,
  FlashloanAttackerInterface,
} from "../FlashloanAttacker";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "supplyAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610c22380380610c2283398101604081905261002f91610166565b80806001600160a01b03166080816001600160a01b031681525050806001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ac9190610166565b6001600160a01b031660a0816001600160a01b03168152505050806001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610104573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101289190610166565b600180546001600160a01b0319166001600160a01b03929092169190911790555061018a565b6001600160a01b038116811461016357600080fd5b50565b60006020828403121561017857600080fd5b81516101838161014e565b9392505050565b60805160a051610a6e6101b46000396000818160df01526103d80152600060560152610a6e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630542975c146100515780631416d762146100a25780631b11d0ff146100b75780637535d246146100da575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b56100b036600461067a565b610101565b005b6100ca6100c536600461074e565b6102f0565b6040519015158152602001610099565b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6040517fa0712d6800000000000000000000000000000000000000000000000000000000815260048101829052829073ffffffffffffffffffffffffffffffffffffffff82169063a0712d68906024016020604051808303816000875af1158015610170573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610194919061083a565b506001546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201529082169063095ea7b3906044016020604051808303816000875af115801561022d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610251919061083a565b506001546040517f617ba03700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260248201859052306044830152600060648301529091169063617ba03790608401600060405180830381600087803b1580156102d357600080fd5b505af11580156102e7573d6000803e3d6000fd5b50505050505050565b600085816102fe8787610463565b905061030988610479565b6040517fa0712d680000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff83169063a0712d68906024016020604051808303816000875af1158015610376573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039a919061083a565b506040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820183905289169063095ea7b3906044016020604051808303816000875af1158015610430573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610454919061083a565b50600198975050505050505050565b8082018281101561047357600080fd5b92915050565b6001546040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015260009216906335ea6a75906024016101e060405180830381865afa1580156104eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f91906108fc565b6101008101516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291925083916000918316906370a0823190602401602060405180830381865afa158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad9190610a1f565b6001546040517fa415bcad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015260248201849052600260448301526000606483015230608483015292935091169063a415bcad9060a401600060405180830381600087803b15801561063757600080fd5b505af115801561064b573d6000803e3d6000fd5b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461067757600080fd5b50565b6000806040838503121561068d57600080fd5b823561069881610655565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101e0810167ffffffffffffffff811182821017156106f9576106f96106a6565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610746576107466106a6565b604052919050565b600080600080600060a0868803121561076657600080fd5b853561077181610655565b9450602086810135945060408701359350606087013561079081610655565b9250608087013567ffffffffffffffff808211156107ad57600080fd5b818901915089601f8301126107c157600080fd5b8135818111156107d3576107d36106a6565b610803847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016106ff565b91508082528a8482850101111561081957600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60006020828403121561084c57600080fd5b8151801515811461085c57600080fd5b9392505050565b60006020828403121561087557600080fd5b6040516020810181811067ffffffffffffffff82111715610898576108986106a6565b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff811681146108c557600080fd5b919050565b805164ffffffffff811681146108c557600080fd5b805161ffff811681146108c557600080fd5b80516108c581610655565b60006101e0828403121561090f57600080fd5b6109176106d5565b6109218484610863565b815261092f602084016108a5565b6020820152610940604084016108a5565b6040820152610951606084016108a5565b6060820152610962608084016108a5565b608082015261097360a084016108a5565b60a082015261098460c084016108ca565b60c082015261099560e084016108df565b60e08201526101006109a88185016108f1565b908201526101206109ba8482016108f1565b908201526101406109cc8482016108f1565b908201526101606109de8482016108f1565b908201526101806109f08482016108a5565b908201526101a0610a028482016108a5565b908201526101c0610a148482016108a5565b908201529392505050565b600060208284031215610a3157600080fd5b505191905056fea26469706673582212204b02959fb6a23ee383ca0f454f743da9d92c024ab9afa941e328929586b0d33364736f6c634300080a0033";

export class FlashloanAttacker__factory extends ContractFactory {
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
    provider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FlashloanAttacker> {
    return super.deploy(
      provider,
      overrides || {}
    ) as Promise<FlashloanAttacker>;
  }
  getDeployTransaction(
    provider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  attach(address: string): FlashloanAttacker {
    return super.attach(address) as FlashloanAttacker;
  }
  connect(signer: Signer): FlashloanAttacker__factory {
    return super.connect(signer) as FlashloanAttacker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashloanAttackerInterface {
    return new utils.Interface(_abi) as FlashloanAttackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashloanAttacker {
    return new Contract(address, _abi, signerOrProvider) as FlashloanAttacker;
  }
}
