import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2cE834c09fBe379C7737B26D2AD61Dbe02Af02Fc'
);

export default instance;