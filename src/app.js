import LcuPluginManager from 'lcu-plugin-manager';
import TahmKenchLcuPlugin from 'lcu-tahm-kench-plugin';
import StartQueueLcuPlugin from 'lcu-start-queue-plugin';
import RequestPartyOwnerLcuPlugin from 'lcu-request-party-owner-plugin';
import RejectPartyOwnerLcuPlugin from 'lcu-reject-party-owner-plugin';
import ReadyUpPlugin from "lcu-ready-up-plugin";
import RandomizeArenaLcuPlugin from "lcu-arena-random-plugin/src/randomizeArenaLcuPlugin.js";

const plugins = [
  new TahmKenchLcuPlugin(),
  new StartQueueLcuPlugin(),
  new RequestPartyOwnerLcuPlugin(),
  new RejectPartyOwnerLcuPlugin(false),
  new ReadyUpPlugin(),
  new RandomizeArenaLcuPlugin(false)
];
const pluginManager = new LcuPluginManager(plugins);

pluginManager.start();
