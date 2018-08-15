# boltcutter

Hyper-minimalist bot creation

# Simple steps

1. Install the Cloud Foundry CLI [here](https://pivotal.io/platform/pcf-tutorials/getting-started-with-pivotal-cloud-foundry/install-the-cf-cli)
2. While that's downloading, make an account [here](https://account.run.pivotal.io/z/uaa/sign-up)
3. Make a new folder and make it look like the folder you see above, with all the files as shown. Make sure to rename example-config.json to config.json and put your token in config.json.
4. Open up a terminal and navigate to the directory where you put the files
5. Run `cf login -a https://api.run.pivotal.io`
6. Finally, run `cf push`
7. Congratulations, you now have a bot that is running 24/7.
