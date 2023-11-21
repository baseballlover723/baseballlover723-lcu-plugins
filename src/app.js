import LcuPluginManager from 'lcu-plugin-manager';
import TahmKenchLcuPlugin from 'lcu-tahm-kench-plugin';

const pluginManager = new LcuPluginManager(new TahmKenchLcuPlugin());

pluginManager.start();
