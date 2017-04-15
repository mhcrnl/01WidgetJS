#!/usr/bin/gjs
/*
    This part always goes at the start at your code. Depending on what you'll be doing with it, you may want to declare more inports here. 
*/
//const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;
//const Webkit = imports.gi.WebKit;
/*
    This is the start of the application itself, and the _init function  which creates it. It tells _buildUI to create an ApplicationWindow, which we're going to call _window, and it tells our window to present itself whenever needed.
*/
const WelcomeToTheGrid = new Lang.Class ({
    Name: 'Wellcome to the GNOME grid',

    // Create the application itself
    _init: function () {
        this.application = new Gtk.Application ();

        // Connect 'activate' and 'startup' signals to the callback functions
        this.application.connect('activate', Lang.bind(this, this._onActivate));
        this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    // Callback function for 'activate' signal presents windows when active
    _onActivate: function () {
        this._window.present ();
    },

    // Callback function for 'startup' signal builds the UI
    _onStartup: function () {
        this._buildUI ();
    },

    // Build the application's UI
    _buildUI: function () {

        // Create the application window
        this._window = new Gtk.ApplicationWindow  ({
            application: this.application,
            title: "Welcome to the GNOME grid!",
            default_height: 200,
            default_width: 400,
            border_width: 10,
            window_position: Gtk.WindowPosition.CENTER });
/*
    Create an image
*/
        this._image = new Gtk.Image({file: "foto1.jpg"});
/*
    Create a second image using a stock icon
*/
        this._icon = new Gtk.Image({ stock:'gtk-about' });
        // Create a webview to show the web app
        //this._webView = new Webkit.WebView ();
/*
    Create a label. Add a margin_top property like an HTML element using inline CSS.     
*/
        this._label = new Gtk.Label({
            label:"Welcome to GNOME, too!",
            margin_top: 20 
        });
        //Create new label
        this._labelTwo = new Gtk.Label ({
            label: "The cake is a pie."
        });
/*
    Create a button
*/
        this._button = new Gtk.Button({
            label: "Welcom to Gnome, too!"
        });
/*
    Create the grid. Attach the image and label to the grid
*/        
        this._grid = new Gtk.Grid({
            column_homogeneous: true,
            row_spacing: 20
            });
        this._grid.attach(this._image, 0,0,2,1);
        // Attach stock image
        this._grid.attach(this._icon, 0,1,1,1); 
        //this._grid.attach(this._label, 0,1,1,1);
        // Add second label to grid
        //this._grid.attach(this._labelTwo, 1,1,1,1);
        //Add button to the grid
        this._grid.attach(this._button, 1,1,1,1);
/*
    Add the grid to the window
*/
        this._window.add(this._grid);
        // Put the web app into the webview
        //this._webView.load_uri (GLib.filename_to_uri (GLib.get_current_dir() +
           // "/hellognome.html", null));

        // Put the webview into the window
        //this._window.add (this._webView);

        // Show the window and all child widgets
        this._window.show_all();
    },

});

// Run the application
let app = new WelcomeToTheGrid ();
app.application.run (ARGV);
