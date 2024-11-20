# There is a bug, what to do?

You found a bug? Can you repeat it? Yes: file a bug report at GitHub issues.

- Go to: [Oskari's GitHub page](https://github.com/oskariorg)
- Sign up
- Click **New issue** button on [oskari-documentation](https://github.com/oskariorg/oskari-documentation/issues) repository
- Include helpful information: what Oskari version you used, with what browser and what are the steps to reproduce the error
- Click **Submit new issue**

# Where can I find help with my Oskari issues?

You can ask Oskari related issues by sending a query to Oskari user mailing list or [chat in Oskari Gitter](https://app.gitter.im/#/room/#oskariorg_chat:gitter.im).

# What skills do I need to setup/develop Oskari?

The technical requirements have been listed [in the documentation.](https://oskari.org/documentation/docs/latest/1-Introduction#Requirements-for-developing-Oskari)

We recommend that you see the first two sections of Oskari's documentation (Introduction and Application environment). Then ask if you need assistance!

Oskari is not a software you can set up by just pushing a execute button. It is a comprehensive setup that requires understanding about server side and different software libraries. The setup is also dependant on the operating system and server environment.

# How to develop Oskari?

If you want to provide improvements to Oskari, here are some steps to do it. See also [the documentation.](https://oskari.org/documentation/docs/latest/8-Developing-instructions#Developing-instructions)

- Open the Oskari source code in your project. Remember to follow the guidelines and How-to. Share your plans also openly through Oskari Roadmap in GitHub, so other developers know what to you are up to.
- Test and report bugs.
- Discuss and ask support.
- Remember that adding new features to Oskari main development line are discussed and decided by Oskarin PSC. If the developed feature is not suitable for the main development line, it can be added as a Community Plugin.
- Remember to update your plugins and take care that they are compatible with the versioning of the main development line.
  Optional: Join Joint Development Forum for Oskari and let's activate a joint development project. You'll receive support from the group and National Land Survey of Finland, were the technical support team is ready to tackle your questions and check your source code.
- We also recommend that you join Joint Development Forum for Oskari and we'll activate a joint development project. You'll receive support from the group and National Land Survey of Finland, were the technical support team is ready to tackle your questions and check your source code.

# How can I build Oskari with a new version tag?

Run `mvn -N versions:set -DnewVersion={NEW-VERSION}` on oskari-server root. It updates the version for `oskari-server/pom.xml` and all the maven modules defined in its modules-tag.
