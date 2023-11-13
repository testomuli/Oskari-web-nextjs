# There is a bug, what to do?

You found a bug? Can you repeat it? Yes: File a bug report at GitHub issues.

- Go to: GitHub
- Sign up
- Press New issue-button
- Include helpful information: Oskari version, browser, steps to reproduce the error
- Press Submit new issue-button

# Where can I find help with my Oskari issues?

You can ask Oskari related issues by sending a query to Oskari user mailing list or chat in Oskari Gitter.

# What skills do I need to use Oskari?

Oskari is not a software you can set up by just pushing a execute button. It is a comprehensive setup that requires understanding about server side and different software libraries. The setup is also depending on the operating system and server environment. First go to documentation and get familiar with the components. Then ask if you need assistance!

# How to develop Oskari?

If you want to provide improvements to Oskari, here are some steps to do it:

- Open the Oskari source code in your project. Remember to follow the guidelines and How-to. Share your plans also openly through Oskari Roadmap in GitHub, so other developers know what to you are up to.
- Test and report bugs.
- Discuss and ask support.
- Remember that adding new features to Oskari main development line are discussed and decided by Oskarin PSC. If the developed feature is not suitable for the main development line, it can be added as a Community Plugin.
- Remember to update your plugins and take care that they are compatible with the versioning of the main development line.
  Optional: Join Joint Development Forum for Oskari and let's activate a joint development project. You'll receive support from the group and National Land Survey of Finland, were the technical support team is ready to tackle your questions and check your source code.
- Optional: Join Joint Development Forum for Oskari and let's activate a joint development project. You'll receive support from the group and National Land Survey of Finland, were the technical support team is ready to tackle your questions and check your source code.

# How can I build Oskari with a new version tag?

Run `mvn -N versions:set -DnewVersion={NEW-VERSION}` on oskari-server root. It updates the version for `oskari-server/pom.xml` and all the maven modules defined in its modules-tag.
