# Adding map layers manually

Before adding any map layers there must be at least one dataprovider and one theme. Look at Dataprovider and Theme for information.

Open map layers, press + -symbol and choose Add a new map layer. Choose the type for the map layer.

Input the map layer’s interface URL and if necessary username and password. Choose the interface version. Later, it’s told which version is used for which interface.

Fill in the unique name of the map layer, which comes from the interface. Give the map layer a name and optionally a description for every desired language.

Choose a dataprovider and theme from Select groups for the map layer.

Opacity and scale are changed in the Visualization tab. Different map layer types have differences in visualization that are expanded on later. 

Metadata input is in the Additional tab if the map layer has any.

Permissions are given to roles that are given to users and not to the users directly. Always give the admin role at least viewing permission and other roles the desired permissions. These are view, view in embedded map, publish and download.

When done with configuration, press the Add-button at the bottom of the window. If the Close-button or X-button are pressed, the window will close and not save anything. Sometimes there might be some error popups, but they are not always problems that hinder the adding or viewing of the map, but it’s recommended to read its content and do the necessary adjustments.

# Editing and deleting of map layers

Map layers can be edited by pressing the pen icon before its name.

Edit the map layer as you like and press the save button at the bottom. If you don’t want to keep the changes, you can press the close button at the bottom or the x at the top right corner.

If you want to completely delete a map layer, press the Delete button. Sometimes it's only necessary to remove permissions from map layers from roles other than admin. Before deleting a map layer it’s good to think if someone is using the map layer in a published map or will it be needed later.

Pressing the Add a new layer from the same service button opens a list of all the map layers of that same interface where it is easier to add map layers. Check that all of the information is correct before adding the map layer.

# Different map layer types

WFS/OAPIF layers are vector type layers. Their common version is 1.1.0. Vector type layers can be defined to have a style made in the editor or added with JSON code. The style can be modified for point, line and area depending on the map layer.

# Data provider

Add data provider from Map Layers and pressing + symbol and Add dataprovider. Give the data provider a name with all the desired languages and a description if needed. Lastly press the Add button.

Data providers can be edited when map layers are sorted by Data Provider. Press the pen icon on the right and do the necessary changes. Lastly press the Save button.

Press the Delete button if you want to remove the data provider. There must not be any map layers in the data provider for it to be able to be deleted.

# Theme

Add theme from Map Layers and pressing + symbol and Add theme. Give the theme a name with all the desired languages and a description if needed. Lastly press the Add button

Theme can be edited when map layers are sorted by Theme. Press the pen icon on the right and do the necessary changes. Lastly press the Save button.

Press the Delete button if you want to remove the theme. There must not be any map layers in the theme for it to be able to be deleted.

# Announcements

Announcements show current, upcoming and outdated announcements together with making new ones.

There are two types of announcements: banner and pop-up. When adding a new announcement, you must specify the time and what type of announcement it is. The types are Title only, Title and contents, and Title and external link. Add a title and alternatively contents or an external link if needed for every language.

You can preview, edit or delete announcements from the icons at the right of the window. Remember to press the Save button when you have done the desired changes.

# Layer rights

In layer rights, you can update the rights of the roles for each layer. If there are several pages of different layers, it is possible to search for the layer for which you want to update the rights.

# Users

In the Users tab, you can see a list of all users. This is where you can search for users, modify their information or delete them. When editing the data, you can change the user's nickname, first and last name, and email, but these should not be touched without the user's permission/knowledge. This is where roles are added to the users.

In the Roles tab, you can add new roles and edit the names of old ones, as well as delete roles. Among the users of the role, you can see a list of users who own a certain role. By default, the roles have an admin-level role and a user-level role.

Users by role tab show which users has a specific role

# Administration

In administration, you can set different views and the default view.(?)

# Layer monitoring

In layer monitoring, you can see a list of all levels and their information about ID, name, data provider, type, total screens and incorrect screens. By clicking on the name of the information, you can arrange the information in descending/ascending order. Here you can also edit the level or delete it.

By clicking on the name of the map layer, you can see more detailed information about its openings. Here you can see the number of successful and failed openings, at what time interval these have occurred and the map layer on the map where the error occurred.
