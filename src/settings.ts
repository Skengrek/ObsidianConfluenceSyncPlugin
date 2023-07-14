/*
	The setting tabs definition
*/
import { App, PluginSettingTab, Setting } from 'obsidian';
import { MyPlugin } from 'main'

export interface Settings {
	confluence: {
		domain: string
		username: string
		token: string
	}
	obsidian: {
		folder: string
	}
}

export const DEFAULT_SETTINGS: Settings = {
	confluence: {
		domain: '',
		username: '',
		token: ''
	},
	obsidian: {
		folder: ''
	}
}

export class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Confluence settings' });

		new Setting(containerEl)
			.setName('Confluence Domain')
			.setDesc('The confluence domain you want to upload files to')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.confluence.domain)
				.onChange(async (value) => {
					this.plugin.settings.confluence.domain = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Atlassian username')
			.setDesc('username@domain.com')
			.addText(text => text
				.setPlaceholder('Enter your secret Token')
				.setValue(this.plugin.settings.confluence.username)
				.onChange(async (value) => {
					this.plugin.settings.confluence.username = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Confluence Token')
			.setDesc('The confluence token link to your account')
			.addText(text => text
				.setPlaceholder('Enter your secret Token')
				.setValue(this.plugin.settings.confluence.token)
				.onChange(async (value) => {
					this.plugin.settings.confluence.token = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h2', { text: 'Obsidian Vault settings' });

		new Setting(containerEl)
			.setName('Vault folder')
			.setDesc('The name of the folder to save the Confluence pages')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.obsidian.folder)
				.onChange(async (value) => {
					this.plugin.settings.obsidian.folder = value;
					await this.plugin.saveSettings();
				}));
	}
}