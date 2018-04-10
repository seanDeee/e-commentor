define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    // get extension path, create dataObjectbject with all data from our JSON file
    var sourcesObject = JSON.parse(JSONfile);
    var libraryNames = Object.getOwnPropertyNames(sourcesObject);
    
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
                "</html>" + "\n"                  
            ;
            
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(tmpt, insertionPos);
        }
    }
    

    
    var COMMANDO_ID = "htmltemplates.seanDeee";   // package-style naming to avoid collisions
    CommandManager.register("HTML Template", COMMANDO_ID, htmlFunction);

// extension main menu
    Menus.addMenu('test', 'quicklib.main');
    var menu = Menus.getMenu('quicklib.main');
    
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(COMMANDO_ID, [{ "key": "ctrl-1" }, { "key": "ctrl-1"}]);
    
    
});                           
