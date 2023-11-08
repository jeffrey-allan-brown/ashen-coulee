/*
BUNDLED PLUGIN CODE FOR ASHEN COULEE
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SchemaDesigner
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  schemaName: "defaultSchema"
};
var SchemaDesignerSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h3", {
      text: "General Settings"
    });
    this.buildSettings();
  }
  buildSettings() {
    new import_obsidian.Setting(this.containerEl).setName("General");
  }
};

// src/main.ts
var SchemaDesigner = class extends import_obsidian2.Plugin {
  // onload//
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new SchemaDesignerSettingsTab(this.app, this));
    this.addCommand({
      id: "refresh-checklist-view",
      name: "Refresh List",
      callback: () => {
        console.log("ok");
      }
    });
    console.log("loading schema designer plugin");
  }
  // on unload //
  async onunload() {
    console.log("unloading schema designer plugin");
  }
  // load default plugin settings //
  async loadSettings() {
    const loadedData = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...loadedData };
  }
  // get value of current settings //
  getSettingValue(setting) {
    return this.settings[setting];
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3NldHRpbmdzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBpbXBvcnRzIC8vXG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBTY2hlbWFEZXNpZ25lclNldHRpbmdzLCBTY2hlbWFEZXNpZ25lclNldHRpbmdzVGFiIH0gZnJvbSAnLi9zZXR0aW5ncydcblxuLy8gcHJpbWFyeSBwbHVnaW4gZGVmaW5pdGlvbiAvL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZW1hRGVzaWduZXIgZXh0ZW5kcyBQbHVnaW4ge1xuXHRwcml2YXRlIHNldHRpbmdzOiBTY2hlbWFEZXNpZ25lclNldHRpbmdzXG5cblx0Ly8gb25sb2FkLy9cbiAgYXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTY2hlbWFEZXNpZ25lclNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmVmcmVzaC1jaGVja2xpc3QtdmlldycsXG4gICAgICBuYW1lOiAnUmVmcmVzaCBMaXN0JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coJ2xvYWRpbmcgc2NoZW1hIGRlc2lnbmVyIHBsdWdpbicpXG4gIH1cblxuXG5cdC8vIG9uIHVubG9hZCAvL1xuICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nIHNjaGVtYSBkZXNpZ25lciBwbHVnaW4nKVxuICB9XG5cblxuXG5cblx0Ly8gbG9hZCBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncyAvL1xuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgbG9hZGVkRGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIHRoaXMuc2V0dGluZ3MgPSB7Li4uREVGQVVMVF9TRVRUSU5HUywgLi4ubG9hZGVkRGF0YX1cbiAgfVxuXG5cdC8vIGdldCB2YWx1ZSBvZiBjdXJyZW50IHNldHRpbmdzIC8vXG5cdGdldFNldHRpbmdWYWx1ZTxLIGV4dGVuZHMga2V5b2YgU2NoZW1hRGVzaWduZXJTZXR0aW5ncz4oc2V0dGluZzogSyk6IFNjaGVtYURlc2lnbmVyU2V0dGluZ3NbS10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzW3NldHRpbmddXG4gIH1cbn1cbiIsICIvLyBpbXBvcnRzIC8vXG5pbXBvcnQge0FwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZ30gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IFNjaGVtYURlc2lnbmVyIGZyb20gJy4vbWFpbic7XG5cbi8vIGV4cG9ydCBtYWluIGludGVyZmFjZSBmb3Igc2V0dGluZ3MgLy9cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hRGVzaWduZXJTZXR0aW5ncyB7XG5cdHNjaGVtYU5hbWU6IHN0cmluZ1xufVxuXG4vLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIHBsdWdpbiBzZXR0aW5ncyAvL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFNjaGVtYURlc2lnbmVyU2V0dGluZ3MgPSB7XG5cdHNjaGVtYU5hbWU6J2RlZmF1bHRTY2hlbWEnXG59XG5cbi8vIGNyZWF0ZSB0aGUgc2V0dGluZ3MgdGFiIGFuZCBzZXQgYXBwcm9wcmlhdGUgdmFsdWVzIC8vXG5leHBvcnQgY2xhc3MgU2NoZW1hRGVzaWduZXJTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuXHRjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBwcml2YXRlIHBsdWdpbjogU2NoZW1hRGVzaWduZXIsXG4gICkge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKVxuICB9XG5cblx0ZGlzcGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsLmVtcHR5KClcbiAgICB0aGlzLmNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHtcbiAgICAgIHRleHQ6ICdHZW5lcmFsIFNldHRpbmdzJyxcbiAgICB9KVxuXG4gICAgdGhpcy5idWlsZFNldHRpbmdzKCk7XG4gIH1cblxuXHRwcml2YXRlIGJ1aWxkU2V0dGluZ3MoKSB7XG4gICAgLyoqIEdFTkVSQUwgKi9cbiAgICBuZXcgU2V0dGluZyh0aGlzLmNvbnRhaW5lckVsKS5zZXROYW1lKCdHZW5lcmFsJylcbiAgIFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFBQSxtQkFBdUI7OztBQ0F2QixzQkFBNkM7QUFTdEMsSUFBTSxtQkFBMkM7QUFBQSxFQUN2RCxZQUFXO0FBQ1o7QUFHTyxJQUFNLDRCQUFOLGNBQXdDLGlDQUFpQjtBQUFBLEVBQy9ELFlBQ0csS0FDUSxRQUNSO0FBQ0EsVUFBTSxLQUFLLE1BQU07QUFGVDtBQUFBLEVBR1Y7QUFBQSxFQUVELFVBQWdCO0FBQ2IsU0FBSyxZQUFZLE1BQU07QUFDdkIsU0FBSyxZQUFZLFNBQVMsTUFBTTtBQUFBLE1BQzlCLE1BQU07QUFBQSxJQUNSLENBQUM7QUFFRCxTQUFLLGNBQWM7QUFBQSxFQUNyQjtBQUFBLEVBRU8sZ0JBQWdCO0FBRXJCLFFBQUksd0JBQVEsS0FBSyxXQUFXLEVBQUUsUUFBUSxTQUFTO0FBQUEsRUFFakQ7QUFDRjs7O0FEaENBLElBQXFCLGlCQUFyQixjQUE0Qyx3QkFBTztBQUFBO0FBQUEsRUFJakQsTUFBTSxTQUFTO0FBQ2YsVUFBTSxLQUFLLGFBQWE7QUFDeEIsU0FBSyxjQUFjLElBQUksMEJBQTBCLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDaEUsU0FBSyxXQUFXO0FBQUEsTUFDWixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFDZCxnQkFBUSxJQUFJLElBQUk7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUVELFlBQVEsSUFBSSxnQ0FBZ0M7QUFBQSxFQUM5QztBQUFBO0FBQUEsRUFJQSxNQUFNLFdBQVc7QUFDZixZQUFRLElBQUksa0NBQWtDO0FBQUEsRUFDaEQ7QUFBQTtBQUFBLEVBTUQsTUFBTSxlQUFlO0FBQ2xCLFVBQU0sYUFBYSxNQUFNLEtBQUssU0FBUztBQUN2QyxTQUFLLFdBQVcsRUFBQyxHQUFHLGtCQUFrQixHQUFHLFdBQVU7QUFBQSxFQUNyRDtBQUFBO0FBQUEsRUFHRCxnQkFBd0QsU0FBdUM7QUFDNUYsV0FBTyxLQUFLLFNBQVMsT0FBTztBQUFBLEVBQzlCO0FBQ0Y7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiJdCn0K
