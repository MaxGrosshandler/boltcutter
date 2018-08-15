# boltcutter

Hyper-minimalist bot creation

# Simple steps

1. Install the Cloud Foundry CLI [here](https://pivotal.io/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry/install-the-cf-cli)
2. While that's downloading, make an account [here](https://account.run.pivotal.io/z/uaa/sign-up)
3. Go set up an organization on Pivotal Web Services [here](https://console.run.pivotal.io/)
4. Make a new folder and make it look like the folder you see above, with all the files as shown. Make sure to rename example-config.json to config.json and put your token in config.json.
5. Open up a terminal and navigate to the directory where you put the files
6. Run `cf login -a https://api.run.pivotal.io`
7. Finally, run `cf push`
8. Congratulations, you now have a bot that is running 24/7.
