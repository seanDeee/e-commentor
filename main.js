    define(function (require, exports, module) {
        "use strict";

        var Commands = brackets.getModule("command/Commands"),
            CommandManager = brackets.getModule("command/CommandManager"),
            Menus = brackets.getModule("command/Menus"),
            EditorManager = brackets.getModule("editor/EditorManager"),
            ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
            FileUtils = brackets.getModule("file/FileUtils"),
            Dialogs = brackets.getModule("widgets/Dialogs");

        // Function to run when the menu item is clicked

        //html tmplt function in Custom Menu
        function htmlFunction() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var tmpt =
                    "<!DOCTYPE html>" + "\n" +
                    "<html lang=\"en\">" + "\n" +
                    "\n" +
                    "<head>" + "\n" +
                    "\t" + "<meta charset=\"UTF-8\">" + "\n" +
                    "\t" + "<title> HTML Template </title>" + "\n" +
                    "\t" + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" + "\n" +

                    "\t" + "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">" + "\n" +

                    "</head>" + "\n\n" +
                    "<body>" + "\n" +
                    "\n" +
                    "\t" + "<h1> HTML Template! </h1>" +
                    "\n" +
                    "\t" + "<p> Hello World! </p>" +
                    "\n" +
                    "</body>" + "\n" +
                    "\n" +
                    "</html>" + "\n";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(tmpt, insertionPos);
            }
        }

        // HTML Command Menu (Function htmlFunction())
        var COMMANDO_ID = "htmltemplates.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("HTML Template", COMMANDO_ID, htmlFunction);

        //canonical tmplt function in Custom Menu
        function normalRedirect() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {


                var nrmal =
                    "<html>" + "\n" +
                    "\n" +
                    "<head>" + "\n" +
                    "\t" + "<meta name=\"robots\" content=\"noindex\">" + "\n" +
                    "\t" + "<meta http-equiv=\"refresh\" content=\"0; url=TARGET LINK HERE\">" + "\n" +

                    "</head>" + "\n\n" +

                    "</html>" + "\n";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(nrmal, insertionPos);
            }
        }

        // HTML Command Menu (Function canonical())
        var COMMANDO_NORMAL_ID = "normal.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Normal Redirect", COMMANDO_NORMAL_ID, normalRedirect);


        //canonical tmplt function in Custom Menu
        function canonicalRedirect() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var cnncl =
                    "<html>" + "\n" +
                    "\n" +
                    "<head>" + "\n" +
                    "\t" + "<meta name=\"ROBOTS\" content=\"NOINDEX,NOFOLLOW\"/>" + "\n" +
                    "\t" + "<link rel=\"canonical\" href=\"FULL/ABSOLUTE PATH OF TARGET/NEW LINK\"/>" + "\n" +
                    "\t" + "<meta http-equiv=\"refresh\" content=\"0; url=TARGET LINK HERE (relative)\">" + "\n" +

                    "</head>" + "\n\n" +

                    "</html>" + "\n";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cnncl, insertionPos);
            }
        }

        // HTML Command Menu (Function canonical())
        var COMMANDO_CANONICAL_ID = "canonical.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Canonical Redirect", COMMANDO_CANONICAL_ID, canonicalRedirect);


        //canonical tmplt function in Custom Menu
        function vanityRedirect() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var vnty =
                    "<html>" + "\n" +
                    "\n" +
                    "<head>" + "\n" +
                    "\t" + "<meta http-equiv=\"refresh\" content=\"0; url=TARGET LINK HERE\">" + "\n" +
                    "</head>" + "\n\n" +
                    "</html>" + "\n";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(vnty, insertionPos);
            }
        }

        // HTML Command Menu (Function canonical())
        var COMMANDO_VANITY_ID = "vanity.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Vanity Redirect", COMMANDO_VANITY_ID, vanityRedirect);



        //modal function in Custom Menu
        function aboutModal() {
            var displayAbout = "<img style=\"float: left; margin:11px 5px 0px 0px; padding:0;\" src=\"styles/images/brackets_icon.svg\" alt=\"logo\" width=\"30\" height=\"30\">";
            displayAbout += "<h3 style=\"margin-bottom:-5px;\">Custom Menu</h3></span>\n<small>version: 1.0.4</small><br><br>\n";
            displayAbout += "<span style=\"letter-spacing: 1px;\">Quick & simple last-version snippet insert for all resources on ";
            displayAbout += "<a href=\"https://developers.google.com/speed/libraries/\">Google Hosted Libraries</a>.<hr>";
            displayAbout += "<p>&#1023; Author: SeanDee Dela Torre</p> <p>&#1023; Github Profile: <a href=\"https://github.com/seanDeee/\" >seanDeee</a></p><p>&#1023; GitHub Repository: <a href=\"https://github.com/seanDeee/brackets-custom-extension\" >https://github.com/seanDeee/brackets-custom-extension</a></p>";
            displayAbout += "&#1023; Contact: sjdt17@gmail.com<br><hr>";
            // show modal dialog with "About Extension" information
            Dialogs.showModalDialog('a', "About Extension", displayAbout);
        }

        // Normal redirect Extension menu item
        var nav_NORMAL = "normal.custom";
        CommandManager.register("Canonical", nav_NORMAL, normalRedirect);

        // Canonical redirect Extension menu item
        var nav_CANONICAL = "canonical.custom";
        CommandManager.register("Canonical", nav_CANONICAL, canonicalRedirect);

        // Canonical redirect Extension menu item
        var nav_VANITY = "vanity.custom";
        CommandManager.register("Canonical", nav_VANITY, canonicalRedirect);

        // About Extension menu item
        var nav_ABOUT = "about.custom";
        CommandManager.register("About Extension", nav_ABOUT, aboutModal);

        // extension main menu
        Menus.addMenu('Custom Menu', 'custom.main');
        var menu = Menus.getMenu('custom.main');

        //Command key for the htmlFunction()
        //var menu = Menus.getMenu(Menus.AppMenuBar.CUSTOM_MENU);
        menu.addMenuItem(COMMANDO_ID, [{
            "key": "ctrl-1"
        }, {
            "key": "ctrl-1"
        }]);

        //Command key for the canonical redirect()
        menu.addMenuItem(COMMANDO_NORMAL_ID, [{
            "key": "ctrl-2"
        }, {
            "key": "ctrl-2"
        }]);

        //Command key for the canonical redirect()
        menu.addMenuItem(COMMANDO_CANONICAL_ID, [{
            "key": "ctrl-3"
        }, {
            "key": "ctrl-3"
        }]);

        //Command key for the canonical redirect()
        menu.addMenuItem(COMMANDO_VANITY_ID, [{
            "key": "ctrl-4"
        }, {
            "key": "ctrl-4"
        }]);


        //menu.addMenuItem(nav_CANONICAL);
        menu.addMenuDivider();
        menu.addMenuItem(nav_ABOUT);

    });
