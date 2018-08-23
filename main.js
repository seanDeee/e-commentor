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
        var COMMANDO_ID = "commentor.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("HTML Template", COMMANDO_ID, htmlFunction);

        //Single Line Comment 2 tmplt function in Custom Menu
        function comment1() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {


                var cmt1 =
                    "//This is a Single Line Comment";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cmt1, insertionPos);
            }
        }

        // HTML Command Menu (Function comment1())
        var COMMANDO_COMMENT1_ID = "comment1.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Single Line Comment 1 // ", COMMANDO_COMMENT1_ID, comment1);


        //Single Line comment 2 tmplt function in Custom Menu
        function comment2() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var cmt2 =
                    "# This is also a Single-Line comment";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cmt2, insertionPos);
            }
        }

        // HTML Command Menu (Function comment2())
        var COMMANDO_COMMENT2_ID = "comment2.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Single Line Comment 2 # ", COMMANDO_COMMENT2_ID, comment2);


        //Multi Line comment  function in Custom Menu
        function comment3() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var cmt3 =
                    "/* \n" +
                    "This is a Multi Line Comment \n" +
                    "*/";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cmt3, insertionPos);
            }
        }

        // HTML Command Menu (Function comment3())
        var COMMANDO_COMMENT3_ID = "comment3.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Multi Line Comment /**/", COMMANDO_COMMENT3_ID, comment3);



        //Section comment  tmplt function in Custom Menu
        function comment4() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var cmt4 =
                    "/* \n" +
                    "========================================== \n" +
                    "This is a Section Comment \n" +
                    "========================================== \n" +
                    "*/";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cmt4, insertionPos);
            }
        }

        // HTML Command Menu (Function comment4())
        var COMMANDO_COMMENT4_ID = "comment4.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("Section Comment", COMMANDO_COMMENT4_ID, comment4);


        //canonical tmplt function in Custom Menu
        function comment5() {
            var editor = EditorManager.getFocusedEditor();
            if (editor) {

                var cmt5 =
                    "<!-- This is a Comment -->";

                var insertionPos = editor.getCursorPos();
                editor.document.replaceRange(cmt5, insertionPos);
            }
        }

        // HTML Command Menu (Function comment5())
        var COMMANDO_COMMENT5_ID = "comment5.seanDeee"; // package-style naming to avoid collisions
        CommandManager.register("HTML Comment <!----> ", COMMANDO_COMMENT5_ID, comment5);



        //modal function in Custom Menu
        function aboutModal() {
            var displayAbout = "<img style=\"float: left; margin:11px 5px 0px 0px; padding:0;\" src=\"styles/images/brackets_icon.svg\" alt=\"logo\" width=\"30\" height=\"30\">";
            displayAbout += "<h3 style=\"margin-bottom:-5px;\">Custom Menu</h3></span>\n<small>version: 1.0.4</small><br><br>\n";
            displayAbout += "<p>&#1023; Author: SeanDee Dela Torre</p> <p>&#1023; Github Profile: <a href=\"https://github.com/seanDeee/\" >seanDeee</a></p><p>&#1023; GitHub Repository: <a href=\"https://github.com/seanDeee/e-commentor\" >https://github.com/seanDeee/e-commentor</a></p>";
            displayAbout += "&#1023; Contact: sjdt17@gmail.com<br><hr>";
            displayAbout += "<p> Give a Star if you like it Thank You!!. :) ";
            // show modal dialog with "About Extension" information
            Dialogs.showModalDialog('a', "About Extension", displayAbout);
        }

        // extension main menu
        Menus.addMenu('E-Comment', 'custom.main');
        var menu = Menus.getMenu('custom.main');


        // Comment 1 Extension menu item
        var nav_CMT1 = "comment1.custom";
        CommandManager.register("Canonical", nav_CMT1, comment1);

        // Comment 2 Extension menu item
        var nav_CMT2 = "comment2.custom";
        CommandManager.register("Canonical", nav_CMT2, comment2);

        // Comment 3 Extension menu item
        var nav_CMT3 = "comment3.custom";
        CommandManager.register("Canonical", nav_CMT3, comment3);

        // Comment 4 Extension menu item
        var nav_CMT4 = "comment4.custom";
        CommandManager.register("Canonical", nav_CMT4, comment4);

        // Comment 5  Extension menu item
        var nav_CMT5 = "comment5.custom";
        CommandManager.register("Canonical", nav_CMT5, comment5);

        // About Extension menu item
        var nav_ABOUT = "about.custom";
        CommandManager.register("About Extension", nav_ABOUT, aboutModal);

        //Command key for the htmlFunction()
        //var menu = Menus.getMenu(Menus.AppMenuBar.CUSTOM_MENU);
        menu.addMenuItem(COMMANDO_ID, [{
            "key": "ctrl-1"
        }, {
            "key": "ctrl-1"
        }]);

        //divider
        menu.addMenuDivider();

        //Command key for the Comment 1 ()
        menu.addMenuItem(COMMANDO_COMMENT1_ID, [{
            "key": "ctrl-2"
        }, {
            "key": "ctrl-2"
        }]);

        //Command key for the Comment 2 ()
        menu.addMenuItem(COMMANDO_COMMENT2_ID, [{
            "key": "ctrl-3"
        }, {
            "key": "ctrl-3"
        }]);

        //Command key for the Comment 3 ()
        menu.addMenuItem(COMMANDO_COMMENT3_ID, [{
            "key": "ctrl-4"
        }, {
            "key": "ctrl-4"
        }]);

        //Command key for the Comment 4 ()
        menu.addMenuItem(COMMANDO_COMMENT4_ID, [{
            "key": "ctrl-5"
        }, {
            "key": "ctrl-5"
        }]);

        //Command key for the Comment 5 ()
        menu.addMenuItem(COMMANDO_COMMENT5_ID, [{
            "key": "ctrl-6"
        }, {
            "key": "ctrl-6"
        }]);


        //menu.addMenuItem(CMT2);
        menu.addMenuDivider();
        menu.addMenuItem(nav_ABOUT);

    });
