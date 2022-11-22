import Web3 from "web3";
import { addresses } from "./constants";
import ZooToken from "./contracts/ZooToken";
import Usdt from "./contracts/Usdt";
import Bep20Standard from "./contracts/Bep20Standard";
import { NumToBN } from "./utils";
import { UseSliderThumbSlotOwnProps } from "@mui/base";

export default class Web3Wrapper {
  web3: Web3;
  chainId: number;
  account: string;
  wrapperOptions: any;

  // Contracts
  zooToken: ZooToken;
  usdt: Usdt;
  bep20Standard: Bep20Standard;

  constructor(web3, chainId, account, options = {}) {
    this.web3 = web3;
    this.chainId = chainId;
    this.account = account;

    this.wrapperOptions = {
      web3,
      chainId,
      account,
      ...options,
    };
    this.zooToken = new ZooToken(
      this.wrapperOptions,
      addresses.zooToken[this.chainId]
    );
    this.usdt = new Usdt(this.wrapperOptions, addresses.usdt[this.chainId]);
    this.bep20Standard = new Bep20Standard(this.wrapperOptions, "");
  }

  async sendBNB(_recipent, _amount, _duration, _streams) {
    let amount = NumToBN(parseFloat(_amount));
    await this.zooToken.send(
      "getBNB",
      { value: amount.toString() },
      _recipent,
      amount.toString(),
      _duration,
      parseInt(_streams)
    );
  }

  async sendToken(_recipent, _tokenAddr, _amount, _duration, _streams) {
    this.bep20Standard = new Bep20Standard(this.wrapperOptions, _tokenAddr);
    let amount = NumToBN(parseFloat(_amount));
    await this.bep20Standard.send(
      "approve",
      {},
      addresses.coinStreamer[this.chainId],
      amount.toString()
    );
    await this.zooToken.send(
      "getToken",
      {},
      _recipent,
      _tokenAddr,
      amount.toString(),
      _duration,
      parseInt(_streams)
    );
  }
  async mintToken(_amount, _referral1, _referral2) {
    let amount: any = NumToBN(parseFloat(_amount));
    let amountApprove = amount * 8;
    await this.usdt.send(
      "approve",
      {},
      addresses.zooToken[this.chainId],
      amountApprove.toString()
    );
    await this.zooToken.send(
      "mintByUSDT",
      {},
      amount.toString(),
      _referral1,
      _referral2
    );
  }
}
