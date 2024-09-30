# Adding and deleting data providers

Before you can add any map layers to the service, you must have at least one data provider and theme.

Add data provider from **Map Layers**. Click the **+** symbol and **Add data provider**. Give the data provider a name in all the desired languages and a description if needed. Then click **Add**.

Data providers can be edited when map layers are sorted by Data Provider. Click the pen icon on the right and do the necessary changes. Remember to **Save** the changes.

Click the **Delete** button if you want to remove a data provider. There must not be any map layers in the data provider's group for it to be able to be deleted.

# Adding and deleting themes

Before you can add any map layers to the service, you must have at least one theme and data provider.

Add theme from **Map Layers**. Click **+** and **Add theme**. Give the theme a name in all the desired languages and a description if needed. Finally click the **Add** button.

Theme can be edited when map layers are sorted by theme. Click the pen icon on the right and do the necessary changes. Remember to **Save** the changes.

If you want to remove a theme, click **Delete**. There must not be any map layers in the theme for it to be able to be deleted.

# Adding map layers

Before adding any map layers there must be at least one data provider and one theme. Look at **Data provider** and **Theme** for information.

Open map layers, click the **+** symbol and choose **Add a new map layer**. Choose a type for the map layer.

Add the map layer’s API URL and, if necessary, an username and password Choose the version of the interface. For vector data the common version is 1.1.0.

Fill in the unique name of the map layer which comes from the interface. You can add a description in every desired language.

Choose a data provider and theme from **Select groups for the map layer**.

Clicking the **Add a new layer** from the same service button opens a list of all the map layers of that same interface. Check that all of the information is correct before adding the map layer.

# Changing visualisation of a map layer

Opacity and scale are changed in the **Visualization tab**. Different map layer types have differences in visualization.

Vector type layers can be defined to have a style made in the editor or added with JSON code. The style can be modified for point, line and polygon (area) depending on the map layer. Vector type layers include WFS / OAPIF layers.

Raster type layers include WMS layers. They come from the API usually "as is", meaning that their visualisation cannot usually be changed.

# Adding metadata to the map layer 

Metadata input can be found in the **Additional tab**. Oskari displays metadata from a separate metadata page.

# Editing and deleting of map layers

A map layer can be edited by clicking the pen icon before its name.

Edit the map layer as you like and finally click **Save** at the bottom of the window. If you don’t want to keep the changes just close the window by clicking **Close** at the bottom of the window or **X** at the top right corner of the window.

If you want to completely delete a map layer, click the **Delete** button. Sometimes deleting isn't necessary, and you can just remove viewing permissions to the desired map layer from roles other than admin. 

Note that someone might be using the map layer in an embedded map. By deleting the layer it will also become unavailable in the embedded map.

# Users

In the **Users** tab you can see a list of all users. This is where you can search for users, modify their information or delete them. When editing the data, you can change the user's nickname, first and last name and email, but these should not be touched without the user's permission/knowledge. This is where roles are added to the users.

## Roles

Users are given **roles** and different roles can be given different **permissions** to the map layers. The same role can be given to various users, making it possible to have user groups with the same permissions.

The permissions that can be granted to map layers are view, view in an embedded map, publish and download.

In the **Roles** tab you can create new roles, edit the names of old ones, as well as delete roles. By default, the roles have an admin role or an user role.

**Users by role** tab show which users has a specific role.

When you have configured a new role click the **Add** button at the bottom of the window. The changes will not be saved if you click the **Close** or **X** buttons. Should there be any pop up windows warning of an error, act accordingly to resolve the issues.

# Layer rights

In layer rights, you can update the rights of the roles for each layer. If there are several pages of different layers, it is possible to search for the layer for which you want to update the rights.

# Layer monitoring

In layer monitoring, you can see a list of all levels and their information about ID, name, data provider, type, total screens and incorrect screens. By clicking on the name of the information, you can arrange the information in descending/ascending order. Here you can also edit the level or delete it.

By clicking on the name of the map layer, you can see more detailed information about its openings. Here you can see the number of successful and failed openings, at what time interval these have occurred and the map layer on the map where the error occurred.

# Announcements

**Announcements** tab shows current, upcoming and outdated announcements together with making new ones.

There are two types of announcements: banner and pop-up. When adding a new announcement, you must specify the time for the announcement and what type of announcement it is. The types are Title only, Title and contents, and Title and external link. Add a title and possible other contents for every language your map service uses.

You can preview, edit or delete announcements from the icons at the right of the window. Remember to click the **Save** button when you have done the desired changes.