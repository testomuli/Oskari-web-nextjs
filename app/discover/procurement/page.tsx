import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'
import HighlightBox from '@/components/HighlightBox'
import Button from '@/components/Button'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Instructions for Procurement',
}

export default function ProcurementPage() {
  return (
    <Layout heroSmall heroTitle='Instructions for Procurement'>
      <div>
        <Text>

<h1>Introduction</h1>
This document was created to answer the need of JDF (Joint Development Forum) to get some help for procuring Oskari. In this document procuring refers to purchasing work related to Oskari. But not only that, the purchasement should be done so that the right supplier is chosen and the contract takes into account the needs of the procurer and Oskari’s general guidelines. And of course the results of the work should enable the procurer organisation to fulfil its objectives related to Oskari.

The instructions have been divided into several chapters. The introduction goes briefly through the background of Oskari and some general thoughts about procuring Oskari. The next three sections tackle three different needs for procuring: procuring a new instance, procuring an update to an existing Oskari instance and procuring configurations to an existing Oskari instance.The aim is to make these processes easier and help the procurer to provide both themselves and the suppliers the information needed for a successful procurement.

The ideas in this document are not set in stone - on the contrary, they are open for discussion and improvement. The author welcomes all constructive criticism and further ideas to develop what is offered here. Hopefully this document gives a general idea of what to take into consideration when procuring something Oskari-related.
Introduction

As Oskari is an open-source project that is coordinated by the National Land Survey of Finland (NLS FI), it has certain preconditions that should be taken into account. By doing so, the procurement process ensures on its part the continuous development of Oskari and makes it a long-lasting mapping solution for everyone.

As NLS FI coordinates the project, it is recommended that the procurers of Oskari would contact the representatives of NLS before the actual Oskari-related work begins, as the expertise of NLS will very likely make the process much easier and smoother while helping them to know what kind of Oskari use cases and needs there are “in the field”. For the procurers of a new Oskari instance, joining Oskari’s Joint Development Forum (JDF) is highly recommended.

<b>Some quick links to make procurement easier:</b>
* The requirements for developing Oskari (programming languages) have been listed in <Link href= '/documentation/docs/latest/1-Introduction#Requirements-for-developing-Oskari'>the Introduction section of Oskari’s documentation.</Link> The introduction will also give you the general idea of when it is required to develop Oskari’s front-end and when the back-end. 
* <Link href='/documentation/docs/latest/2-Application-environment#Framework'>An example of Oskari architecture</Link>
* <Link href='/documentation/docs/latest/1-Introduction'>The Introduction section</Link> and <Link href='/documentation/docs/latest/2-Application-environment'>Application environment section</Link> give a good overview of what Oskari is in technical perspective.

<h2>What is a good tender?</h2>

Depending on what you are procuring, a good tender could have, for example:

1. Procuring a new instance
* Your needs (what you plan to do with Oskari)
* When you expect the work to be completed
* Information if you have databases that Oskari could use

2. Procuring an update
* The Oskari version you are using now
* The possible configurations that have been done to your Oskari service
* You can provide a link to their documentation

3. Procuring an configuration
* A general overview of what you are doing with Oskari now
* Your needs: what you wish to do with Oskari in the future

<h2>Procuring a new instance (Oskari setup)</h2>

Procuring a new instance refers to a situation where the procurer has realised that there is a need of one kind or another that Oskari could resolve. The procurer has no or very limited knowledge about Oskari prior to the procurement. The procuring organisation might have an existing spatial data infrastructure, but that is not compulsory.

<b>Before procuring</b> a new Oskari instance, it is recommend that the procurer considers the use of the service:

<h3>Needs</h3>

What are the needs for Oskari? Why are you procuring Oskari in the first place? Is there a specific need that needs to be fulfilled, a task that needs to be performed, a dataset that has to be shared publicly or to a closed group of users? 

Many organisations use Oskari or related map services to let the public view their datasets. Aside from sharing a certain organisation’s own datasets, Oskari is suitable for sharing datasets produced by different providers. The end-user can easily select different layers to be viewed or compared next to each other. Oskari can also be used to share certain datasets openly while limiting certain data only to be viewed by a limited group of users. The needs can affect which functionalities of Oskari will be used and which are secondary - or can be even taken off altogether from the user interface (the front-end). 

In a very basic scenario, where there is only a need to get a map service up and running without further ado, a sample app can be used as-is. 

If the use case is complex, do a bit of research if there is already an Oskari use case that resembles yours or if the functionality that you need exists. If no one has used Oskari before the same way you are planning to, it could be useful to contact NLS FI about your plans. Oskari can be configured and developed extensively, but well planned is half made.

<h3>Data - to whom, by whom?</h3>

Thinking through the datasets that are shared via Oskari and what are the possible use cases will help you to better outline the requirements for the whole map service.

As you are planning to use Oskari, there is some data that you are planning to share. Who will update the data? Are the layers maintained by other organisations? This is important considering what happens if there is an error in the data or the data is not for some reason available. If you or the users of the service have to contact the provider of the data, you should know who and where to contact. If the data is produced within your organization, then the communication between the producers of the data and the end-users might be more straightforward. But if some of the data is from another source maintained by a third party, those datasets might not always be there when you need them - APIs or the permissions of datasets might change.

It should also be noted that the end-users are probably interested in the metadata of the data, different background maps, adding their own datasets etc. In some cases it would also be beneficial for the users to be able to download the data - this can be also done with Oskari.

<h3>Use cases</h3>

If you are planning to allow logging in to the service, someone has to grant and update different user rights. You can, for example, grant rights to certain users to add and edit layers in the service. Thus the user groups of the map service could include: the maintainers of the service (admin users), editors of (certain) data, viewers of the restricted data, viewers of the public data. Of course one could belong in all of the groups - viewing both the public and restricted data yet being also an editor of certain data.

If the geoportal side of the service is restricted only to a limited number of users, the end-users of the data could be people who view the data of the service via an embedded map. This is the use case in Suomi.fi -kartat. There are also various other use cases, where the main service lends itself to various other applications via an embedded map (see, for example, Virma or kalastusluvat.fi).

And, of course, whether you are expecting 10 or 10 000 users per day to visit the service, will affect how heavy use the server and the database behind Oskari should be able to handle.

<h3>Other architecture</h3>

When you are procuring a new Oskari instance, you will need to have a database where the data is stored. If your organisation has a database cluster that Oskari can use, use that. If not, you will have a database setup with the Oskari instance.

Like all technical instances, also the databases need maintenance and updating. If your organisation has or has had databases that you maintain, the same people can also take care of the Oskari’s database(s). If not, ask for a hosting/maintenance service when you are procuring a new Oskari instance.

<h3>After the procurement</h3>

A brief summary of what happens after the procurement: you will have a new Oskari instance up and running and a database related to it. But what else does it mean?

<b>Someone needs to be the main user / admin of the new map service:</b> The person(s) needs to add the map layers to the service, grant the user rights and look after the service. Someone should also be the main contact person for the end-users should they notice any errors in the data, metadata or bugs with the service.

The admin(s) should join Oskari’s Joint development forum (JDF) and the Oskari user list to keep up with Oskari’s latest releases, bug fixes and new features and make sure that the updates are installed. Keeping up with what’s happening in Oskari’s development makes it also possible to better understand the possibilities of Oskari. Joining the JDF supports Oskari as a long-lasting open source solution.

After Oskari is up and running, it needs maintenance and updating. A good practice could be to follow Oskari’s schedule with updates to make sure that it operates smoothly and stays up-to-date. Updating between the consecutive versions of Oskari is quite straightforward, but if you are updating Oskari after a long gap, it will be more time-consuming as the updates have to be done version by version. If your organization has an ICT / dev team in the house, the update could be done by them. But if there has been a long gap before you last updated, it might be easier to procure the update from developers that have longer experience with Oskari.

And last but not least, remember to tell about your new Oskari service both to your colleagues in your organisation and the public. When the people know about your service, they can use it!

<h2>Procuring an update (Updating an existing Oskari service)</h2>

After Oskari is up and running, it needs maintenance and updating. A good practice could be to <b>follow Oskari’s schedule with updates</b> to make sure that it operates smoothly and stays up-to-date. This means updates 2-4 times a year. To make sure that the updates will be done, it is recommended that for the Oskari map service there is a main user / admin who will look for the new Oskari releases and procure the update.

<h3>How to estimate the time (and money) that it takes to update your Oskari instance?</h3>

Updating between the consecutive versions of Oskari is quite straightforward, but if you are updating Oskari after a long time period, it will be more time-consuming as the updates have to be done version by version. If your organization has an ICT / developer team in the house, the update could be done by them. But if there has been a long gap before you last updated, it might be easier to procure the update from developers that have longer experience with Oskari.

You can see <a href='https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md'>the migration guide</a> to get an idea of how much work updating between versions could take. The migration guide has all the required information for updating. If your organization has its own ICT department / developers, you can share the migration guide with them to get feedback.

<h3>Which version are you using now?</h3>

Before updating you should find out when the instance was last updated - that is, what version is in use now? 

Easiest way to find out which version you are using now is to open your web browser’s console and type <b>Oskari.VERSION</b>. The console can be opened, for example, by pressing F12.

<h3>Release notes / changelog</h3>

For every Oskari version there are release notes. See <Link href='/documentation/docs/latest/12-Changelog'>the documentation</Link> for further links to the release notes of the front end and back end. 

By going through the release notes you can also decide if you want to skip the updating this time and update through two versions at once. That can be a solid option if, for example, the changes are very minor or there are only very few changes between versions. 

You can also cherry-pick the most important changes, say, just the security updates. Or if there are certain bugs that bother your day-to-day work with Oskari, <Link href='/documentation/docs/latest/12-Changelog'>see the changelog</Link> if they have been fixed in the latest release and just update them. Of course, doing this kind of cherry-picking of the updating process requires more knowledge and skill from whoever is doing the updating.

<h3>Updating a configured Oskari instance</h3>

If your Oskari instance has been configured, it might complicate the updating process. Depending on whether the configurations have been minor (the overall look of the map service) or major (completely new functionalities), they affect the total time that the updating process takes. But whether the configurations are big or small, if they have been done and documented well, the updating can be very straightforward.

<h2>Configuring an existing Oskari service</h2>

Usually configurations are made to Oskari’s sample application (Oskari out of the box) when there is a need either from the main users (adminstrators) or the end-users. First, of course, you have to find out what is <b>the need for the configuration</b>. What Oskari enables now and what you wish it enables in the future? There are various different ways to configure Oskari, and the amount of time/money depends on the need.

<b><link href='/documentation/docs/latest/1-Introduction#Requirements-for-developing-Oskari'>The requirements for developing Oskari (programming languages) have been listed in the Introduction section of Oskari’s documentation.</link></b> The introduction will also give you an overview of Oskari’s architecture and the general idea of when it is required to develop Oskari’s front-end and when the back-end.

<h3>Changes to layout / theme</h3>

Changing the theme of Oskari requires the same skills that changing the layout of a website: CSS, SCSS, HTML. These are quite simple changes that can be done by developers who usually work with aforementioned programming languages.

<h3>Enabling/disabling existing functionalities</h3>

Oskari’s sample application (Oskari installation “out of the box”) includes certain functionalities and some of them are enabled by default ie. visible in the menu of the map service and ready to be used. The functionalities that are visible in the menu by default are: tool 1, 2 ,3. The functionalities that are included in the installation but are not enabled by default are: tool 1, 2, 3.

If you want to enable or disable the functionalities available to the end-user of your mapping tool, changes to the code are relatively quick.

<h3>Developing existing functionalities</h3>

In some cases you might want to develop functionalities that already exist either in the Oskari sample application or that are made by other Oskari users. In this case you should first contact NLS FI to find out whether or not the functionality is still actively maintained. 

In some cases a certain functionality is in heavy use and other organisations might have similar wishes to develop it further, but that requires communication between organisations.

On the other hand, the functionality might not be used by anyone and hasn't been maintained, so the project steering committee of Oskari is about to drop it out of the development. 

The easiest way to find out where Oskari is heading next, see Oskari’s roadmap.

<h3>Creating new functionalities</h3>

Before creating new functionalities, see the list of existing functionalities in the documentation <Link href='/documentation/docs/latest/5-Frontend-main-functionalities#Frontend-main-functionalities'>sections 5</Link> and <Link href='/documentation/docs/latest/6-Other-functionalities#Other-functionalities'>section 6</Link> and <a href='https://github.com/oskariorg/oskari-frontend-contrib'>the functionalities and configurations done by other Oskari users (the unofficial Oskari bundles created by the Oskari community).</a> One should also think about joint development: could this be something that some other organisation using Oskari could also wish to have?

If you want to create new functionalities for Oskari, it might be a good idea to gather together all the ideas that you have and hand them over to the development team. Thus they can see which are top of your priorities now and what kind of things to expect next - and also suggest to you which of your ideas could be fulfilled at the same time quite easily. By coming up with multiple ideas at once they can also take the upcoming ideas into consideration when developing the first new functionalities.

With new functionalities, one should remember that they must be maintained. When you create new functionalities to your Oskari service, remember to inform NLS both beforehand and after the development has taken place. By contacting the NLS FI’s Oskari technical team before you start the development, your developers can get best practices for the development process and further ideas on how to create the functionalities that you want. 

When the new functionalities are in use, one should publish the code in a GitHub repository and inform the Oskari technical team - this helps them to take into account the dependencies of the new functionality when they are making new versions of Oskari. There might be dependencies, libraries or functionalities in the Oskari core that are affect the new functionality, and if you don’t inform the Oskari technical team about what you are doing or what you have done, it is possible that something gets broken when it&#39;s the time to update the Oskari instance next time.

The changes into Oskari should never be done into the core of Oskari but as a separate whole. This makes the updating of the Oskari core much easier in the future.

And to make sure that Oskari is a living, developing open source project for years to come for your organisation and everybody else, <b>it is highly recommended that you also contribute to the main Oskari GitHub branch and inform other Oskari users about what you are doing or have done.</b> This way other Oskari users can both enjoy the new functionalities and possibilities of Oskari but also contribute to the further development of the software. Oskari is open source at heart and if you create something Oskari-related, please publish it as open source.

<h3>Documentation</h3>

To make sure that the next developer who either updates your Oskari instance or further develops your new functionalities/configurations knows what to do and what to take into account, you must request proper documentation. 

The documentation should include, for example, what kind of configurations have been done, how, and where. For new functionalities the names of the new bundles (basically modules of Oskari that do the wanted functionality), their events and requests should be listed. The documentation should be so comprehensive that a person who hasn’t been in the original development team can continue the work.

The documentation can be requested as a separate document or as a Readme file that is included in the GitHub repository of your Oskari instance.

<h3>Support and training</h3>

After your new Oskari service is up and running, you or the people in your organisation might also need support and training. Easiest way to get support might be to join the Oskari Joint development forum and get to know other Oskari main users and organisations, their use cases, problems and wishes. 

You can also procure support and training for Oskari and the software related to it from commercial partners. In some other procurement cases the experience with Oskari is not necessarily required from the vendor, but with support and training it is highly required.

<h3>When can you use your own organisation’s IT capabilities?</h3>

If you have an in-house IT department, there are certain Oskari processes that can be done by them. These are also some of the easier things to do with Oskari that don’t require Oskari specific knowledge or expertise. The Oskari documentation is also being improved so that as many people as possible could use Oskari and join in the development.

Database-related work:
* Updating and maintenance of databases
* Updating and maintenance of database connections

HTML, CSS, SCSS experience:
* Competence related to Oskari’s front-end and its configurations

??? experience:
* Updating Oskari (step-by-step instructions in <Link href='https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md'>the migration guide</Link>)

<h2>Closing thoughts</h2>

Should you have any questions about your problems with Oskari, please contact the steering committee. Ask for help and tell your developers to contact us if they are facing problems. Report bugs by making issues on GitHub repositories and create pull requests that include your proposals for new, better solutions both in Oskari software and its documentation. As a procurer of Oskari-related projects, try to make sure that the new admin, developer or end-user of your Oskari service has an easy start with Oskari. That is our aim, too.
        </Text>
      </div>

      <HighlightBox
        style={{
          margin: '6rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.625rem' }}>Give it a try!</h3>
          <p style={{ textAlign: 'center', fontSize: '1.125rem' }}>
            Try out the Oskari demo!
          </p>
          <Button
            variant='dark'
            title='Try Oskari demo'
            href='https://demo.oskari.org/'
            external
            newWindow
          />
        </div>
      </HighlightBox>
    </Layout>
  )
}
