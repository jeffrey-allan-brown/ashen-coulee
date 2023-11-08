// imports //
import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, SchemaDesignerSettings, SchemaDesignerSettingsTab } from './settings'

// primary plugin definition //
export default class SchemaDesigner extends Plugin {
	private settings: SchemaDesignerSettings

	// onload//
  async onload() {
		await this.loadSettings();
		this.addSettingTab(new SchemaDesignerSettingsTab(this.app, this));
		this.addCommand({
      id: 'refresh-checklist-view',
      name: 'Refresh List',
      callback: () => {
        console.log('ok');
      },
    })

    console.log('loading schema designer plugin')
  }


	// on unload //
  async onunload() {
    console.log('unloading schema designer plugin')
  }




	// load default plugin settings //
	async loadSettings() {
    const loadedData = await this.loadData()
    this.settings = {...DEFAULT_SETTINGS, ...loadedData}
  }

	// get value of current settings //
	getSettingValue<K extends keyof SchemaDesignerSettings>(setting: K): SchemaDesignerSettings[K] {
    return this.settings[setting]
  }
}
