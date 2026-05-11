import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // Dynamic pulling for the CLI. No hardcoded IDs.
    projectId: 's7kj4a9h',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
