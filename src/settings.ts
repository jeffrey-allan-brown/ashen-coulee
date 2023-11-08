// imports //
import {App, PluginSettingTab, Setting} from 'obsidian';
import SchemaDesigner from './main';

// export main interface for settings //
export interface SchemaDesignerSettings {
	schemaName: string
}

// set default values for plugin settings //
export const DEFAULT_SETTINGS: SchemaDesignerSettings = {
	schemaName:'defaultSchema'
}

// create the settings tab and set appropriate values //
export class SchemaDesignerSettingsTab extends PluginSettingTab {
	constructor(
    app: App,
    private plugin: SchemaDesigner,
  ) {
    super(app, plugin)
  }

	display(): void {
    this.containerEl.empty()
    this.containerEl.createEl('h3', {
      text: 'General Settings',
    })

    this.buildSettings();
  }

	private buildSettings() {
    /** GENERAL */
    new Setting(this.containerEl).setName('General')
   
  }
}
