import LcuPluginManager from 'lcu-plugin-manager';
import TahmKenchLcuPlugin from 'lcu-tahm-kench-plugin';
import StartQueueLcuPlugin from 'lcu-start-queue-plugin';

const pluginManager = new LcuPluginManager(new TahmKenchLcuPlugin(), new StartQueueLcuPlugin());

pluginManager.start();
