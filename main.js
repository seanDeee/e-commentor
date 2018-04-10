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

        
        function canonical() {
            var editor2 = EditorManager.getFocusedEditor();
            if (editor2) {


                var cnncl =
                    "<html>" + "\n" +
                    "\n" +
                    "<head>" + "\n" +
                    "\t" + "<meta name=\"robots\" content=\"noindex\">" + "\n" +
                    "\t" + "<meta http-equiv=\"refresh\" content=\"0; url=TARGET LINK HERE\">" + "\n" +

                    "</head>" + "\n\n" +
                   
                    "</html>" + "\n";

                var insertionPos2 = editor2.getCursorPos();
                editor2.document.replaceRange(cnncl, insertionPos2);
            }
        }
        
         // HTML Command Menu (Function htmlFunction())
        var COMMANDO_CANONICAL_ID = "htmltemplates.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Canonical Redirect", COMMANDO_CANONICAL_ID, canonical);
        
        // Menus -> quickLib : display the "About Extension" modal
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

        // About Extension menu item
        var nav_ABOUT = "about.custom";
        CommandManager.register("About Extension", nav_ABOUT, aboutModal);
        
         // About Extension menu item
        var nav_CANONICAL = "canonical.custom";
        CommandManager.register("Canonical", nav_CANONICAL, canonical);

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
        
         menu.addMenuItem(COMMANDO_CANONICAL_ID, [{
            "key": "ctrl-2"
        }, {
            "key": "ctrl-2"
        }]);

        
        menu.addMenuItem(nav_ABOUT);
    });
