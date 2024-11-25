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

<h1>Introduction</h1>

<Text>
This document was created to answer the need of JDF (Joint Development Forum) to get some help for procuring Oskari. In this document procuring refers to purchasing work related to Oskari. But not only that, the purchasement should be done so that the right supplier is chosen and the contract takes into account the needs of the procurer and Oskari&apos;s general guidelines. And of course the results of the work should enable the procurer organisation to fulfil its objectives related to Oskari.
</Text>

<Text>
The instructions have been divided into several chapters. The introduction goes briefly through the background of Oskari and some general thoughts about procuring Oskari. The next three sections tackle three different needs for procuring: procuring a new instance, procuring an update to an existing Oskari instance and procuring customisation to an existing Oskari instance. The aim is to make these processes easier and help the procurer to provide both themselves and the suppliers the information needed for a successful procurement.
</Text>

<Text>
The ideas in this document are not set in stone - on the contrary, they are open for discussion and improvement. This is a living document and constructive criticism and further ideas to develop what is offered here is welcomed. Send your input <Link href='/contribute'>through the existing channels</Link> or create a pull request on GitHub.

Hopefully this document gives a general idea of what to take into consideration when procuring something Oskari-related.
</Text>

<h2>Background</h2>

<Text>
Oskari is an open-source project that is coordinated by the National Land Survey of Finland (NLS FI). Thus it has certain preconditions that should be taken into account. By doing so, the procurement process ensures on its part the continuous development of Oskari and makes it a long-lasting mapping solution for everyone.
</Text>

<Text>
As NLS FI coordinates the project, it is recommended that the procurers of Oskari would <Link href='/contribute'>contact the project coordinators</Link> before the actual Oskari-related work begins, as their expertise will very likely make the process much easier and smoother while helping them to know what kind of Oskari use cases and needs there are “in the field”. For the procurers of a new Oskari instance, joining Oskari&apos;s Joint Development Forum (JDF) is highly recommended.
</Text>

<Text>
Some quick links to make procurement easier:
</Text>

<Text>
<ul>
  <li>- The requirements for developing Oskari (programming languages) have been listed in <u><Link href= '/documentation/docs/latest/1-Introduction#Requirements-for-developing-Oskari'>the Introduction section of Oskari&apos;s documentation.</Link></u> The introduction will also give you the general idea of when it is required to develop Oskari&apos;s front-end and when the back-end.</li>
  <li>- <u><Link href='/documentation/docs/latest/2-Application-environment#Framework'>An example of Oskari architecture</Link></u></li>
  <li>- <u><Link href='/documentation/docs/latest/1-Introduction'>The Introduction section</Link></u> and <u><Link href='/documentation/docs/latest/2-Application-environment'>Application environment section</Link></u> give a good overview of what Oskari is in technical perspective.</li>
</ul>
</Text>

<h2>What is a good tender?</h2>

<Text>
Depending on what you are procuring, a good tender could have, for example:
</Text>

<Text>
1. Procuring a new instance
<ul>
<li>- Your needs (what you plan to do with Oskari)</li>
<li>- Where you want the Oskari service to be hosted</li>
<li>- The spatial APIs that you want to publish in Oskari</li>
<li>- Information if you wish to have custom functionality that should be integrated in Oskari</li>
<li>- When you expect the work to be completed</li>
<li>- Documentation of the process (what has been done and when, what version has been implemented and where it is located)</li>
</ul>
</Text>

<Text>
2. Procuring an update
<ul>
<li>- The Oskari version you are using now</li>
<li>- When your Oskari service has been last updated</li>
<li>- Where the Oskari instance is hosted now</li>
<li>- The possible customisations that have been done to your Oskari service</li>
<li>- The documentation of customisations</li>
<li>- Oskari functionalities (bundles) that are used</li>
<li>- Application specific functionalities/customisations</li>
<li>- Documentation of the process (what has been done, when and how)</li>
</ul>
</Text>

<Text>
3. Procuring new functionalities
<ul>
<li>- The Oskari version you are using now</li>
<li>- When your Oskari service has been last updated</li>
<li>- Where the Oskari instance is hosted now</li>
<li>- A general overview of what you are doing with Oskari now</li>
<li>- Your needs: what you wish to do with Oskari in the future</li>
<li>- Are you creating a customisation that is spesific to your application or is it something that you hope to contribute to be a part of Oskari in the future?</li>
<li>- Documentation of the process (what has been done, which files have been added/edited)</li>
</ul>
</Text>

<h2>Procuring a new instance (Oskari setup)</h2>

<Text>
Procuring a new instance refers to a situation where the procurer has realised that there is a need of one kind or another that Oskari could resolve. The procurer has no or very limited knowledge about Oskari prior to the procurement. The procuring organisation might have an existing spatial data infrastructure, but that is not compulsory.
</Text>

<Text>
<b>Before procuring</b> a new Oskari instance, it is recommend that the procurer considers the use of the service:
</Text>

<h3>Needs</h3>

<Text>
What are the needs for Oskari? Why are you procuring Oskari in the first place? Is there a specific need that needs to be fulfilled, a task that needs to be performed, a dataset that has to be shared publicly or to a closed group of users? 
</Text>

<Text>
Many organisations use Oskari or related map services to let the public view their datasets. Aside from sharing a certain organisation&apos;s own datasets, Oskari is suitable for sharing datasets produced by different providers. The end-user can easily select different layers to be viewed or compared next to each other. Oskari can also be used to share certain datasets openly while limiting certain data only to be viewed by a limited group of users. The needs can affect which functionalities of Oskari will be used and which are secondary - or can be even taken off altogether from the user interface (the front-end). 
</Text>

<Text>
In a very basic scenario, where there is only a need to get a map service up and running without further ado, a sample app can be used with minimal customisation. It is recommended that at least the logo, the name of the service and user guide content will be changed accordingly. 
</Text>

<Text>
If the use case is complex, do a bit of research if there is already an Oskari use case that resembles yours or if the functionality that you need exists. If no one has used Oskari before the same way you are planning to, it could be useful to <Link href='/contribute'>contact the project coordinators</Link> about your plans. Oskari can be customised and developed extensively, but well planned is half made.
</Text>

<h3>Data - to whom, by whom?</h3>

<Text>
Thinking through the datasets that are shared via Oskari and what are the possible use cases will help you to better outline the requirements for the whole map service.
</Text>

<Text>
As you are planning to use Oskari, there is some data that you are planning to share. Who will update the data? Are the layers maintained by other organisations? This is important considering what happens if there is an error in the data or the data is not for some reason available. If you or the users of the service have to contact the provider of the data, you should know who and where to contact. If the data is produced within your organization, then the communication between the producers of the data and the end-users might be more straightforward. But if some of the data is from another source maintained by a third party, those datasets might not always be there when you need them - APIs or the permissions of datasets might change.
</Text>

<Text>
It should also be noted that the end-users are probably interested in the metadata of the data, different background maps, adding their own datasets etc. In some cases it would also be beneficial for the users to be able to download the data - this can be also done with Oskari.
</Text>

<h3>Use cases</h3>

<Text>
If you are planning to allow logging in to the service, someone has to grant and update different user rights. You can, for example, grant rights to certain users to add and edit layers in the service. Thus the user groups of the map service could include: the maintainers of the service (admin users), editors of (certain) data, viewers of the restricted data, viewers of the public data. Of course one could belong in all of the groups - viewing both the public and restricted data yet being also an editor of certain data.
</Text>

<Text>
If the geoportal side of the service is restricted only to a limited number of users, the end-users of the data could be people who view the data of the service via an embedded map. This is the use case in Suomi.fi -kartat. There are also various other use cases, where the main service lends itself to various other applications via an embedded map (see, for example, Virma or kalastusluvat.fi).
</Text>

<Text>
And, of course, whether you are expecting 10 or 10 000 users per day to visit the service, will affect how heavy use the server and the database behind Oskari should be able to handle.
</Text>

<h3>Other architecture</h3>

<Text>
For setting up a dedicated website for your Oskari service a hosting srevice, domain name and TLS certificate are required. You will also need a server or cloud computing to run the software.
When you are procuring a new Oskari instance, you will need to have a database where the data is stored. If your organisation has a database cluster that Oskari can use, use that. If not, you will have a database setup with the Oskari instance.
</Text>

<Text>
Like all technical instances, also the databases need maintenance and updating. If your organisation has or has had databases that you maintain, the same people can also take care of the Oskari&apos;s database(s). If not, ask for a hosting/maintenance service when you are procuring a new Oskari instance.
</Text>

<h3>After the procurement</h3>

<Text>
A brief summary of what happens after the procurement: you have a new Oskari service up and running that is accessible using a web browser and a database related to it. But what else does it mean?
</Text>

<Text>
<b>Someone needs to be the main user / admin of the new map service:</b> The person(s) needs to add the map layers to the service, grant the user rights and look after the service. Someone should also be the main contact person for the end-users should they notice any errors in the data, metadata or bugs with the service.
</Text>

<Text>
The admin(s) should join Oskari&apos;s Joint development forum (JDF) and the Oskari user list to keep up with Oskari&apos;s latest releases, bug fixes and new features and make sure that the updates are installed. Keeping up with what&apos;s happening in Oskari&apos;s development makes it also possible to better understand the possibilities of Oskari. Joining the JDF supports Oskari as a long-lasting open source solution.
</Text>

<Text>
After Oskari is up and running, it needs maintenance and updating. A good practice could be to follow Oskari&apos;s schedule with updates to make sure that it operates smoothly and stays up-to-date. Updating between the consecutive versions of Oskari is quite straightforward, but if you are updating Oskari after a long gap, it requires more manual migration needs. If there have been multiple new releases between the version you are using now and the latest Oskari version, you have to do all the migration changes for the whole gap. 
The amount of work this requires depends on what needs to be done: with custom created components the process might be taxing.
If your organization has an ICT / dev team in the house, the updating could be done by them. But if there has been a long gap before you last updated, it might be easier to procure the update from developers that have longer experience with Oskari.
</Text>

<Text>
And last but not least, remember to tell about your new Oskari service both to your colleagues in your organisation and the public. When the people know about your service, they can use it!
</Text>

<h2>Procuring an update (Updating an existing Oskari service)</h2>

<Text>
After Oskari is up and running, it needs maintenance and updating. A good practice could be to <b>follow Oskari&apos;s schedule with updates</b> to make sure that it operates smoothly and stays up-to-date. This means updates 2-4 times a year. To make sure that the updates will be done, it is recommended that for the Oskari map service there is a main user / admin who will look for the new Oskari releases and procure the update.
</Text>

<h3>How to estimate the time (and money) that it takes to update your Oskari instance?</h3>

<Text>
Updating between the consecutive versions of Oskari is quite straightforward, but if you are updating Oskari after a long time period, it will be more time-consuming as the updates have to be done version by version. If your organization has an ICT / developer team in the house, the update could be done by them. But if there has been a long gap before you last updated, it might be easier to procure the update from developers that have longer experience with Oskari.
</Text>

<Text>
The usual update of Oskari means updating the Oskari versions on dependencies (once for the frontend and once for the server) and then rebuilding the application. See <Link href='/documentation/docs/latest/3-Setup-instructions#Updating-Oskari-version'>the documentation</Link>. Should there be any additional steps, they have been documented in <a href='https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md'>the migration guide</a>. 

<Link href='/documentation/docs/latest/12-Changelog'>The change log</Link> has information on the new implementations of bundles. The removal of implementations, if any, are mentioned on the migration guide.

<Link href='/documentation/docs/latest/3-Setup-instructions#Updating-Oskari-version'>The documentation</Link> has all the required information for updating. If your organization has its own ICT department / developers, you can share the documentation with them to get feedback.
</Text>

<h3>Which version are you using now?</h3>

<Text>
Before updating you should find out when the instance was last updated - that is, what version is in use now? 
</Text>

<Text>
Easiest way to find out which version you are using now is to open your web browser&apos;s console and type <b>Oskari.VERSION</b>. The console can be opened, for example, by pressing F12.
</Text>

<h3>Release notes / changelog</h3>

<Text>
For every Oskari version there are release notes. See <Link href='/documentation/docs/latest/12-Changelog'>the documentation</Link> for further links to the release notes of the front end and back end. 
</Text>

<Text>
By going through the release notes you can also decide if you want to skip the updating this time and update through two versions at once. That can be a solid option if, for example, the changes are very minor or there are only very few changes between versions. On the other hand, you take the risk of using older and possibly vulnerable dependencies in your Oskari.
</Text>

<h3>Updating a heavily customszed Oskari instance</h3>

<Text>
If your Oskari instance has been highly customised and includes application spesific functionalities, they might complicate the updating process. Depending on how the customisations and new functionalities have been made and documented, they affect the total time that the updating process takes. But whether the customisations are big or small, if they have been done and documented well, the updating can be very straightforward.
</Text>

<h2>Customising an existing Oskari service</h2>

<Text>
Usually customisations are made using Oskari&apos;s sample application (Oskari out of the box) as a base. First, of course, you have to find out what is <b>the need for the customisation</b> - is it, for example, to help the work of admin or the end-users? 
What Oskari enables now and what you wish it enables in the future? There are various different ways to customise Oskari, and the amount of time/money depends on the need.
</Text>

<Text>
<b><Link href='/documentation/docs/latest/1-Introduction#Requirements-for-developing-Oskari'>The requirements for developing Oskari (programming languages) have been listed in the Introduction section of Oskari&apos;s documentation.</Link></b> The introduction will also give you an overview of Oskari’s architecture and the general idea of when it is required to develop Oskari’s front-end and when the back-end.
</Text>

<h3>Changes to layout / theme</h3>

<Text>
Changing the theme of Oskari can be done using Oskari Theming configuration. The other solution is to use CSS to configure the UI, yet this isn&apos;t as usable and/or compatible with embedded maps. This is because the CSS overrides what the user (the publisher of embedded maps) configures to the embedded map.
</Text>

<h3>Enabling/disabling existing functionalities</h3>

<Text>
Oskari&apos;s sample application (Oskari installation “out of the box”) includes certain functionalities and some of them are enabled by default ie. visible in the menu of the map service and ready to be used. To see the complete list Oskari&apos;s functionalities, see <Link href='https://oskari.org/documentation/api/bundles/latest'>the bundle documentation</Link>. A bundle in Oskari is a technical term used to describe a frontend code package that implements a specific functionality.
</Text>

<Text>
If you want to enable or disable the functionalities available to the end-user of your Oskari-based application, changes to the code are relatively quick.
</Text>

<h3>Developing existing functionalities</h3>

<Text>
In some cases you might want to develop functionalities that already exist either in the Oskari sample application or that are made by other Oskari users. In this case you should first <Link href='/contribute'>contact the project coordinators of Oskari</Link> to find out whether or not the functionality is still actively maintained.
</Text>

<Text>
In other cases a certain functionality is popular amongst other Oskari users and other organisations might have similar wishes to develop it further, but that requires communication between organisations.
</Text>

<Text>
On the other hand, the functionality might not be used by anyone and hasn&apos;t been maintained, so the project steering committee of Oskari is about to drop it out of the codebase. 
</Text>

<h3>Creating new functionalities</h3>

<Text>
Before creating new functionalities, see the list of existing functionalities in <Link href='https://oskari.org/documentation/api/bundles/latest'>the bundle documentation</Link> and <a href='https://github.com/oskariorg/oskari-frontend-contrib'>the functionalities and customisations done by other Oskari users (the unofficial Oskari bundles created by the Oskari community).</a> One should also think about joint development: could this be something that some other organisation using Oskari could also wish to have?
</Text>

<Text>
If you want to create new functionalities for Oskari, it might be a good idea to gather together all the ideas that you have and hand them over to the development team. Thus they can see which are top of your priorities now and what kind of things to expect next - and also suggest to you which of your ideas could be fulfilled at the same time quite easily. By coming up with multiple ideas at once they can also take the upcoming ideas into consideration when developing the first new functionalities.
</Text>

<Text>
With new functionalities, one should remember that they must be maintained. When you create new functionalities to your Oskari service, remember to inform NLS both beforehand and after the development has taken place. <Link href='/contribute'>By contacting Oskari project coordinators</Link> before you start the development, your developers can get best practices for the development process and further ideas on how to create the functionalities that you want. 
</Text>

<Text>
When the new functionalities are in use one should document it in the Oskari documentation, either by contributing to the Oskari documentation about what you needed to do and how you did it or create a request/event API to do what you need and contribute just the API to Oskari.
Once it&apos;s documented on the Oskari side, the technical coordinator(s) should be able to document any changes to it on the migration guide.
</Text>

<Text>
If you want something maintained, the best bet is to have it on the Oskari repositories (&quot;the core of Oskari&quot;). The next best solution is to have it as application specific code on the application repository.
What you don&apos;t want is having your own branched off fork of Oskari that might be difficult to update as the official repositories have changes that conflict with ones on the branched off fork.
</Text>

<Text>
And to make sure that Oskari is a living, developing open source project for years to come for your organisation and everybody else, <b>it is highly recommended that you also contribute to the main Oskari GitHub repositories.</b> The other Oskari users will be then informed about the new functionalities in Oskari release notes when the contributed functionality has been merged and released in an Oskari version. This way other Oskari users can both enjoy the new functionalities and possibilities of Oskari but also contribute to the further development of the software. Oskari is open source at heart and if you create something Oskari-related, please publish it as open source.
</Text>

<h3>Documentation</h3>

<Text>
To make sure that the next developer who either updates your Oskari instance or further develops your new functionalities/customisations knows what to do and what to take into account, you must request proper documentation. 
</Text>

<Text>
The documentation should include, for example, what kind of customisations have been done, how, and where. 
For new functionalities the names of the new bundles (basically modules of Oskari that do the wanted functionality) should be listed. The documentation should be so comprehensive that a person who hasn&apos;t been in the original development team can continue the work.

The implementation of new functionalities should be available on the application repository (if not contributed to Oskari repositories). The functionalities that the application uses should be queryable from the database and based on the application it might not be trivial to document these. Any documentation will benefit anyone that has to maintain it in the future.
If the functionalities have been brought to the Oskari repositories, the documentation should be generic. The application specific documentation can be very clear on what goes where and how does that particular application work.
</Text>

<Text>
The documentation can be requested as a separate document or as a Readme file that is included in the GitHub repository of your Oskari-based application.
</Text>

<h3>Support and training</h3>

<Text>
After your new Oskari service is up and running, you or the people in your organisation might also need support and training. Easiest way to get support might be to join the Oskari Joint development forum and get to know other Oskari main users and organisations, their use cases, problems and wishes. 
</Text>

<Text>
You can also procure support and training for Oskari and the software related to it from commercial partners. In some other procurement cases the experience with Oskari is not necessarily required from the vendor, but with support and training it is highly required.
</Text>

<h3>When can you use your own organisation&apos;s IT capabilities?</h3>

<Text>
If you have an in-house IT department who have experience on JS and Java, for example the installing and customizing Oskari could be done by them. The Oskari documentation is also being improved so that as many people as possible could use Oskari and join in the development.
</Text>

<Text>
<ul>
Database-related work:
<li>- Updating and maintenance of databases</li>
<li>- Updating and maintenance of database connections (in case the database Oskari uses changes)</li>
</ul>
</Text>

<Text>
<ul>
JavaScript, npm, NodeJS (and possibly CSS/SCSS) experience:
<li>- Competence related to Oskari&apos;s front end and its customisations</li>
<li>- npm/NodeJS experience is required to build and install dependencies</li>
</ul>
</Text>

<Text>
<ul>
Minor Java/Maven and npm/NodeJS experience:
<li>- Updating Oskari when it&apos;s only updating the dependencies (what is usually done when updating Oskari can be found in <Link href='/documentation/docs/latest/3-Setup-instructions#Updating-Oskari-version'>the documentation</Link>)</li>
<li>- If the version update requires further work, it has been documented in <a href='https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md'>the migration guide</a></li>
</ul>
</Text>

<h2>Closing thoughts</h2>

<Text>
Should you have any questions about your wishes, use cases or problems with Oskari, please contact <Link href='/contribute'>the project coordinators of Oskari</Link>. Ask for help and tell your developers to contact us if they are facing problems. Report bugs by making issues on <a href='https://github.com/oskariorg/oskari-documentation/issues'>Oskari&apos;s GitHub repository</a> and create pull requests that include your proposals for new, better solutions both in Oskari software and its documentation. As a procurer of Oskari-related projects, try to make sure that the new admin, developer or end-user of your Oskari service has an easy start with Oskari. That is our aim, too.
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
