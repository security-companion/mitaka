import { Searcher } from "@/types";

import {
  AbuseIPDB,
  AnyRun,
  Apklab,
  ArchiveOrg,
  ArchiveToday,
  BGPView,
  BinaryEdge,
  BitcoinAbuse,
  BitcoinWhosWho,
  BlockChain,
  BlockCypher,
  Blockchair,
  Censys,
  Checkphish,
  Crtsh,
  DNSlytics,
  DomainBigData,
  DomainTools,
  DomainWatch,
  EmailRep,
  ExploitDatabase,
  FOFA,
  FileScan,
  FortiGuard,
  GoogleSafeBrowsing,
  GreyNoise,
  Hashdd,
  HurricaneElectric,
  HybridAnalysis,
  IPIP,
  IPinfo,
  InQuest,
  IntelligenceX,
  Intezer,
  JoeSandbox,
  Malshare,
  Maltiverse,
  MalwareBazaar,
  Malwares,
  NVD,
  OCCRP,
  ONYPHE,
  OTX,
  OpenTIP,
  Pulsedive,
  Radar,
  RiskIQ,
  Robtex,
  Scumware,
  SecurityTrails,
  Shodan,
  Sploitus,
  SpyOnWeb,
  Spyse,
  TIP,
  Talos,
  ThreatConnect,
  ThreatCrowd,
  ThreatMiner,
  Triage,
  URLVoid,
  URLhaus,
  Urlscan,
  VMRay,
  ViewDNS,
  VirusTotal,
  Vulmon,
  VulncodeDB,
  VxCube,
  WebAnalyzer,
  XForceExchange,
  ZoomEye,
} from "./index";

export { DomainBigData, FOFA, Spyse, ThreatCrowd, VxCube, WebAnalyzer };

export const Searchers: Searcher[] = [
  new AbuseIPDB(),
  new AnyRun(),
  new Apklab(),
  new ArchiveOrg(),
  new ArchiveToday(),
  new BGPView(),
  new BinaryEdge(),
  new BitcoinAbuse(),
  new BitcoinWhosWho(),
  new BlockChain(),
  new Blockchair(),
  new BlockCypher(),
  new Censys(),
  new Checkphish(),
  new Crtsh(),
  new DNSlytics(),
  new DomainTools(),
  new DomainWatch(),
  new EmailRep(),
  new ExploitDatabase(),
  new FileScan(),
  new FortiGuard(),
  new GoogleSafeBrowsing(),
  new GreyNoise(),
  new Hashdd(),
  new HurricaneElectric(),
  new HybridAnalysis(),
  new InQuest(),
  new IntelligenceX(),
  new Intezer(),
  new IPinfo(),
  new IPIP(),
  new JoeSandbox(),
  new Malshare(),
  new Maltiverse(),
  new MalwareBazaar(),
  new Malwares(),
  new NVD(),
  new OCCRP(),
  new ONYPHE(),
  new OpenTIP(),
  new OTX(),
  new Pulsedive(),
  new Radar(),
  new RiskIQ(),
  new Robtex(),
  new Scumware(),
  new SecurityTrails(),
  new Shodan(),
  new Sploitus(),
  new SpyOnWeb(),
  new Talos(),
  new ThreatConnect(),
  new ThreatMiner(),
  new TIP(),
  new Triage(),
  new URLhaus(),
  new Urlscan(),
  new URLVoid(),
  new ViewDNS(),
  new VirusTotal(),
  new VMRay(),
  new Vulmon(),
  new VulncodeDB(),
  new XForceExchange(),
  new ZoomEye(),
];
